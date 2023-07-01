import { Container, Grid, Typography } from "@mui/material";
import React from "react";
import PageHeader from "../components/PageHeader";
import NavItem from "../routes/components/NavItem";
import ROUTES from "../routes/routesModel";
import { useTheme } from "../providers/ThemeProvider";

export default function AboutPage() {
  const {isDark} = useTheme();
  return (
    <Container sx={{color: isDark? "white" : "black"}}>
      <PageHeader
        title="About Page"
        subtitle="On this page you can find explanations about using the application"
      />
      <Grid container spacing={2}>
        <Grid item xs={12} md={8} alignItems="start" >
          <Typography sx={{fontSize: "25px"}}>
         Welcome to Ofek Business Cards Website!
         </Typography>

         <Typography sx={{fontSize: "17px"}}>
          <br />

- Our job is to help businesses and professionals promote their businesses for free by creating impactful and creative business cards.
<br/><br/> 
- On this website you can find all the contact information of the businesses that are advertised here and their location.
 <br /><br />
- Additionally if you want to advertise your business you can do this here and its <strong>completely free!</strong>  just<ins>{<NavItem to={ROUTES.SIGNUP} label="sign up here"/>}</ins>.
 <br /><br />

-Already a user??<br /> 
 You can customize your own cards on<ins>{<NavItem to={ROUTES.MY_CARDS} label="my cards page"/>}</ins>, or add the business cards you like to your<ins>{<NavItem to={ROUTES.FAV_CARDS} label="favorites"/>}</ins> . 

 <br/><br/>
</Typography>

 <Typography variant="h7" component="h3">
 We are looking forward to help you find the services you need and promote your own business!
         </Typography>

          
        </Grid>
        <Grid
          item
          md={4}
          sx={{ display: { md: "flex", xs: "block" }, justifyContent: "center" }}
        >
          <img src="/assets/images/card.jpg" alt="card" width="100%" />
        </Grid>
      </Grid>
    </Container>
  );
}
