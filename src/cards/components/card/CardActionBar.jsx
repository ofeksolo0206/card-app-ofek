import { Box, CardActions, IconButton } from "@mui/material";
import React, { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import CallIcon from "@mui/icons-material/Call";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { func, string } from "prop-types";
import { useUser } from "../../../users/providers/UserProvider";
import CardDeleteDialog from "./CardDeleteDialog";
import { useNavigate } from "react-router-dom";
import ROUTES from "../../../routes/routesModel";
import { useSnack } from "../../../providers/SnackbarProvider";
import useCards from "../../hooks/useCards";

export default function CardActionBar({
  handleDelete,
  handleLike,
  cardLikes,
  cardId,
  user_id,

}) {
  const snack = useSnack();
  const { user } = useUser();
  const navigate = useNavigate();
  const { handleGetCard, value:{card} } = useCards();
  const [isDialogOpen, setDialog] = useState(false);
  const [isLiked, setLike] = useState(
    () => !!cardLikes?.find(id => id === user.id)
  );

  const handleDeleteCard = () => {
    handleDelete(cardId);
    setDialog(false);
  };

  const handleLikeCard = async () => {
    setLike(prev => !prev);
    await handleLike(cardId);
  }

  let phoneNumber="";

  const getPhoneNumber = (number) => {
   phoneNumber = "";
    phoneNumber = "tel:"+number;
  }
 
  

  return (
    <>
      <CardActions sx={{ paddingTop: 0, justifyContent: "space-between" }}>
        <Box>
          {user?.isAdmin || user?.id === user_id ? (
            <>
              <IconButton
                aria-label="Delete Card"
                onClick={() => setDialog(true)}
              >
                <DeleteIcon />
              </IconButton>
              <IconButton
                aria-label="Edit Card"
                onClick={() => navigate(`${ROUTES.EDIT_CARD}/${cardId}`)}>
                <ModeEditIcon/>
              </IconButton>
            </>
          ) : null}
        </Box>

        <Box>
          <IconButton
           aria-label="Call"
           onClick={()=>{
            handleGetCard(cardId)
            card&& getPhoneNumber(card.phone)
            card&& console.log(phoneNumber);
           }}>
          <a href="tel:050-111-1111"><CallIcon/></a>
          </IconButton>

          {user && (
            <IconButton
              aria-label="Add to favorite"
              onClick={()=> {
                handleLikeCard();
                !isLiked ? snack("success","the business card has been liked") :
                 snack("success","the business card has been disliked") 
              }}
            >
              <FavoriteIcon color={isLiked ? "error" : "inherit"}/>
            </IconButton>
          )}
        </Box>
      </CardActions>
      <CardDeleteDialog
        isDialogOpen={isDialogOpen}
        onChangeDialog={() => setDialog(false)}
        onDelete={handleDeleteCard}
      />
    </>
  );
}

CardActionBar.propTypes = {
  handleDelete: func.isRequired,
  handleLike: func.isRequired,
  cardId: string.isRequired,
};