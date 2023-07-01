import { Avatar, Box, Card, Container, Divider, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import PageHeader from "../../components/PageHeader";
import useCards from "../hooks/useCards";
import { makeFirstLetterCapital } from "../../layout/header/topNavBar/menu/utils/algoMethods";
import Map from "../../sandbox/components/Map";


export default function CardDetailsPage() {
  const { id } = useParams();
  const { handleGetCard, value:{card} } = useCards();

  useEffect(() => {
     handleGetCard(id);
  },[])

  return (
    <Container>
      {card &&
      <PageHeader
        title={`${makeFirstLetterCapital(card.title)} Card Details`}
        subtitle={`Here you can find all the details about the ${card.title} card`}
      />
}
    <Box sx={{display: "flex", justifyContent:"space-around"}}>
      {card && 
      <Card sx={{
        maxWidth:"400px",
        height:"540px",
        boxShadow: 100,
        borderRadius:5
        }}>
      <Container  sx={{
        paddingTop:2,
        textAlign:"justify",
      }}
      >
        <Avatar sx={{height:"90px", width:"90px", marginBottom:1}} src={"/"+card.image.url} alt={card.image.alt}/>
        <Divider variant="fullWidth" sx={{margin:2}} />
      <Typography><ins>Title:</ins> {card.title}</Typography>
      <Typography><ins>Subtitle:</ins> {card.subtitle}</Typography>
      <Typography><ins>Description:</ins> {card.description}</Typography>
      <Typography><ins>Phone Number:</ins> {card.phone}</Typography>
      <Typography><ins>Email:</ins> {card.email}</Typography>
      <Typography><ins>Website:</ins> {card.web}</Typography>
      <Typography><ins>State:</ins> {card.address.state}</Typography>
      <Typography><ins>Country:</ins> {card.address.country}</Typography>
      <Typography><ins>Street:</ins> {card.address.street}</Typography>
      <Typography><ins>House Number:</ins> {card.address.houseNumber}</Typography>
      <Typography><ins>City:</ins> {card.address.city}</Typography>
      <Typography><ins>Zip Code:</ins> {card.address.zip}</Typography>
      <Typography><ins>Biz Number:</ins> {card.bizNumber}</Typography>
      <Typography><ins>UserID:</ins> {card.user_id}</Typography>  
      <Typography><ins>CardID:</ins> {id}</Typography> 
      </Container>
      </Card>
       }
       <Container sx={{
        width: "40%",
        height: "400px",
        margin: "20px"}}>
       <Map
          center={[51.505, -0.09]}
          zoom={13}
          address= {card&& `${card.address.city} ${card.address.street} ${card.address.houseNumber}`}
        />
       </Container >
       </Box>
    </Container>
  );
}

