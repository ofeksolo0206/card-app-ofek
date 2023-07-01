import { AppBar, Toolbar } from "@mui/material";
import React from "react";
import { MenuProvider } from "./menu/MenuProvider";
import LeftNavBar from "./left-navigation/LeftNavigation";
import RightNavBar from "./right-navigation/RightNavBar";


export default function NavBar() {
  return (
    <MenuProvider>
      <AppBar position="sticky" color="primary" elevation={10}>
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <LeftNavBar/>
          <RightNavBar/>
        </Toolbar>
      </AppBar>
    </MenuProvider>
  );
}
