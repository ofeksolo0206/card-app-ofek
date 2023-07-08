import {
  BottomNavigation,
  BottomNavigationAction,
  Paper,
} from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import ROUTES from "../../routes/routesModel";
import InfoIcon from "@mui/icons-material/Info";
import RecentActorsIcon from "@mui/icons-material/RecentActors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ConstructionIcon from '@mui/icons-material/Construction';
import { useUser } from "../../users/providers/UserProvider";

export default function Footer() {
  const navigate = useNavigate();
  const { user } = useUser();
  return (
    <>
      <Paper
        sx={{ position: "sticky", bottom: 0, left: 0, right: 0 }}
        elevation={3}
      >
        <BottomNavigation showLabels>
          <BottomNavigationAction
            label="About"
            icon={<InfoIcon />}
            onClick={() => navigate(ROUTES.ABOUT)}
          />
          {user?.isBusiness && (
            <BottomNavigationAction
              label="My cards"
              icon={<RecentActorsIcon />}
              onClick={() => navigate(ROUTES.MY_CARDS)}
            />
          )}
          {user && (
            <BottomNavigationAction
              label="Favorite cards"
              icon={<FavoriteIcon />}
              onClick={() => navigate(ROUTES.FAV_CARDS)}
            />
          )}
          {user?.isAdmin && (
            <BottomNavigationAction
              label="sandbox"
              icon={<ConstructionIcon />}
              onClick={() => navigate(ROUTES.SANDBOX)}
            />
          )}
        </BottomNavigation>
      </Paper>
    </>
  );
}
