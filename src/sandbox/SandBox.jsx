import { AppBar, Toolbar } from "@mui/material";
import { Container } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";
import NavItem from "../routes/components/NavItem";

export default function SandBox() {
  return (
    <div>
      <AppBar sx={{marginTop:7}} color="secondary">
        <Toolbar>
          <NavItem to="memo" label="Memoization" sx={{ color: "black" }} />
          <NavItem to="counter" label="My counter" sx={{ color: "black" }} />
          <NavItem to="countries" label="Countries" sx={{ color: "black" }} />
          <NavItem to="my-form" label="cusom hook" sx={{ color: "black" }} />
        </Toolbar>
      </AppBar>
      <Container sx={{paddingTop: "100px"}}>
        <Outlet />
      </Container>
    </div>
  );
}
