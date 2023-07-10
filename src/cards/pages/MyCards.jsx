import { Box, Container, Fab } from "@mui/material";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import PageHeader from "../../components/PageHeader";
import ROUTES from "../../routes/routesModel";
import { useUser } from "../../users/providers/UserProvider";
import CardsFeedback from "../components/CardsFeedback";
import useCards from "../hooks/useCards";
import AddIcon from '@mui/icons-material/Add';

export default function MyCards() {
  const { value, handleGetMyCards, handleDeleteCard, handleLikeCard } = useCards();
  const { filteredCards, error, isLoading } = value;

  const { user } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate(ROUTES.CARDS);
    } else {
      handleGetMyCards();
    }
  }, [user]);

  const handleDelete = async (id) => {
    await handleDeleteCard(id);
    await handleGetMyCards();
  };
  
  const handleLike = async (id) => {
    await handleLikeCard(id);
  };

  return (
    <div>
      <Container>
        <PageHeader
          title="Cards"
          subtitle="On this page you can find all the bussines cards you created!"
        />
        <CardsFeedback
          isLoading={isLoading}
          error={error}
          cards={filteredCards}
          handleDelete={handleDelete}
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
    </div>
  );
}
