import { Container } from "@mui/material";
import React, { useCallback, useEffect } from "react";
import PageHeader from "../../components/PageHeader";
import CardsFeedback from "../components/CardsFeedback";
import useCards from "../hooks/useCards";

const FavCardsPage = () => {
  const { value, handleDeleteCard, handleGetFavCards, handleLikeCard } = useCards();
  

  useEffect(() => {
    handleGetFavCards();
  },[]);

  const onDeleteCard = useCallback(
    async (cardId) => {
      await handleDeleteCard(cardId);
      await handleGetFavCards();
    },
    [handleDeleteCard]
  );

  const handleLike = async (id) => {
    await handleLikeCard(id);
    await handleGetFavCards();
  };

  return (
    <Container>
      <PageHeader 
      title="Favorite Cards Page"
      subtitle="Here you can find all your favorite business cards"
      />

      <CardsFeedback 
      isLoading={value.isLoading}
      error={value.error}
      cards={value.filteredCards}
      handleDelete={onDeleteCard}
      handleLike={handleLike}
      />
    </Container>

  );
};

export default FavCardsPage;
