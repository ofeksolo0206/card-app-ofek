import { Box, Container, Fab } from "@mui/material";
import React, { useCallback, useEffect } from "react";
import PageHeader from "../../components/PageHeader";
import CardsFeedback from "../components/CardsFeedback";
import useCards from "../hooks/useCards";
import AddIcon from '@mui/icons-material/Add';
import { useUser } from "../../users/providers/UserProvider";
import ROUTES from "../../routes/routesModel";
import { useNavigate } from "react-router-dom";

const FavCardsPage = () => {
  const {user} = useUser();
  const navigate = useNavigate();
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
       {user &&
        <Box>
        <Fab color="primary"
         sx={{position:"fixed" ,bottom:100, right: 40}}
         aria-label="add"
         onClick={()=>navigate(ROUTES.CREATE_CARD)}
           >
        <AddIcon/>
      </Fab>
        </Box>
        }
    </Container>

  );
};

export default FavCardsPage;
