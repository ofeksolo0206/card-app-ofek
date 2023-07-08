import { Box, Container, Fab } from "@mui/material";
import React, { useEffect  } from "react";
import PageHeader from "../../components/PageHeader";
import useCards from "../hooks/useCards";
import CardsFeedback from "../components/CardsFeedback";
import AddIcon from '@mui/icons-material/Add';
import { useNavigate } from "react-router-dom";
import ROUTES from "../../routes/routesModel";

export default function CardPage() {
  const { value, handleGetCards, handleDeleteCard, handleLikeCard } = useCards();
  const { error, isLoading, filteredCards } = value;
  const navigate = useNavigate();

  useEffect(() => {
    handleGetCards();
  }, []);

  const handleDelete = async (id) => {
    await handleDeleteCard(id);
    handleGetCards();
  };

  const handleLike = async (id) => {
    await handleLikeCard(id);
  };

  return (
    
      <Container >
        <PageHeader
          title="Cards"
          subtitle="On this page you can find all bussines cards from all categories"
        />
        <CardsFeedback
          isLoading={isLoading}
          error={error}
          cards={filteredCards}
          handleDelete={handleDelete}
          handleLike={handleLike}
        />
        <Box>
        <Fab color="primary"
         sx={{position:"fixed" ,bottom:100, right: 40}}
         aria-label="add"
         onClick={()=>navigate(ROUTES.CREATE_CARD)}
           >
        <AddIcon/>
      </Fab>
        </Box>
      </Container>
    
  );
}
