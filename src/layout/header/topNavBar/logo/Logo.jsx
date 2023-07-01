import { Typography } from "@mui/material";
import React from "react";
import NavBarLink from "../../../../routes/components/NavBarLink";
import ROUTES from "../../../../routes/routesModel";
import { useTheme } from "../../../../providers/ThemeProvider";

export default function Logo() {
  const {isDark} = useTheme();
  return (
    <>
      <NavBarLink to={ROUTES.ROOT} sx={{ color: isDark ? "white" : "#000" }}>
        <Typography
          variant="h4"
          sx={{
            display: { xs: "none", md: "inline-flex" },
            marginRight: 2,
            fontFamily: "fantasy",
          }}
        >
          BCard
        </Typography>
      </NavBarLink>
    </>
  );
}

