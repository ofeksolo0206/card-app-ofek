import { useCallback, useEffect, useMemo, useState } from "react";
import useAxios from "../../hooks/useAxios";
import { useSnack } from "../../providers/SnackbarProvider";
import { useUser } from "../../users/providers/UserProvider";
import {
  changeLikeStatus,
  createCard,
  deleteCard,
  editCard,
  getCard,
  getCards,
  getMyCards,
} from "../services/cardApiService";
import { useSearchParams } from "react-router-dom";
import normalizeCard from "../helpers/normalization/normalizeCard";

export default function useCards() {
  const [cards, setCards] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [card, setCard] = useState(null);
  const [query, setQuery] = useState("");
  const [filteredCards, setFilter] = useState(null);
  const [searchParams] = useSearchParams();
  
  useAxios();
  const snack = useSnack();
  const { user } = useUser();

  const requestStatus = (loading, errorMessage, cards, card = null) => {
    setLoading(loading);
    setError(errorMessage);
    setCards(cards);
    setCard(card);
  };

  useEffect(() => {
    setQuery(searchParams.get("q") ?? "");
  },[searchParams]);

  useEffect(() => {
    if(cards){
      setFilter(
        cards.filter(
          card => card.title.includes(query) || String(card.bizNumber).includes(query)
        )
      );
    }
  },[cards,query]);

  const handleGetCards = useCallback(async () => {
    try {
      setLoading(true);
      const cards = await getCards();
      requestStatus(false, null, cards);
    } catch (error) {
      requestStatus(false, error, null);
    }
  }, []);

  const handleGetMyCards = useCallback(async () => {
    try {
      setLoading(true);
      const cards = await getMyCards();
      snack("success","All the cards you created here!")
      requestStatus(false, null, cards);
    } catch (error) {
      requestStatus(false, error, null);
    }
  }, []);

  const handleDeleteCard = useCallback(async (cardId) => {
    try {
      setLoading(true);
      await deleteCard(cardId);
      snack("error","the card has been deleted")
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(error);
    }
  }, []);

  
  const handleGetCard = useCallback(async (cardId) => {
    try {
      setLoading(true);
      const card = await getCard(cardId);
      setLoading(false);
      setCard(card);
      return card;
    } catch (error) {
      requestStatus(false, error, null);
    }
  }, []);

  
  const handleUpdateCard = useCallback(async (cardId, cardFromClient) => {
    try {
      setLoading(true);
      const card = await editCard(cardId, cardFromClient);
      requestStatus(false, null, null, card);
      snack("success", "The business card has been successfully updated");
    } catch (error) {
      requestStatus(false, error, null);
    }
  }, []);

  const handleLikeCard = useCallback(async (cardId) => {
    try {
     await changeLikeStatus(cardId);
      setLoading(false);
    } catch (error) {
      requestStatus(false, error, null);
    }
  }, []);

  const handleGetFavCards = useCallback(async () => {
    try {
      setLoading(true);
      const cards = await getCards();
      const favCards = cards.filter(
        (card) => card.likes.includes(user.id)
      );
      snack("success","All your favourite cards are here")
      requestStatus(false, null, favCards);
    } catch (error) {
      requestStatus(false, error, null);
    }
  }, [user]);

  
  const handleCreateCard = useCallback(
    async (cardFromClient) => {
      try {
        setLoading(true);
        const normalizedCard = normalizeCard(cardFromClient);
        normalizedCard.user_id = user.id;
        const card = await createCard(normalizedCard);
        requestStatus(false, null, null, card);
        snack("success", "A new business card has been created");
      } catch (error) {
        requestStatus(false, error, null);
      }
    },
    [ snack]
  );

  const value = useMemo(() => {
    return { isLoading, cards, card, error, filteredCards };
  }, [isLoading, cards, card, error, filteredCards]);

  return {
    value,
    handleGetCards,
    handleGetMyCards,
    handleDeleteCard,
    handleGetCard,
    handleUpdateCard,
    handleCreateCard,
    handleGetFavCards,
    handleLikeCard,
  };
}
