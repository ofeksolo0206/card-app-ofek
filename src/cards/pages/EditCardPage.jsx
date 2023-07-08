import { Container } from "@mui/material";
import React, { useEffect } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import useForm from "../../forms/hooks/useForm";
import ROUTES from "../../routes/routesModel";
import { useUser } from "../../users/providers/UserProvider";
import CardForm from "../components/CardForm";
import initialCardForm from "../helpers/initialForms/initialCardForm";
import mapCardToModel from "../helpers/normalization/mapToModel";
import normalizeCard from "../helpers/normalization/normalizeCard";
import useCards from "../hooks/useCards";
import cardSchema from "../models/joi-schema/cardSchema";

export default function EditCardPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { handleUpdateCard, handleGetCard, value } = useCards();
  const { user } = useUser();
  const { value:{data,errors}, ...rest } = useForm(initialCardForm, cardSchema, () => {
    handleUpdateCard(value.card._id, {
      ...normalizeCard({ ...data }),
      bizNumber: value.card.bizNumber,
      user_id: value.card.user_id,
    });
  });
  useEffect(() => {
    handleGetCard(id);
  },[])

  useEffect(() => {
    if(value.card) rest.setData(mapCardToModel(value.card));
  },[value.card])
  if (!user) return <Navigate replace to={ROUTES.CARDS} />;

  return (
    <Container
      sx={{
        paddingTop: 8,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <CardForm
        onSubmit={rest.onSubmit}
        onReset={rest.handleReset}
        errors={errors}
        onFormChange={rest.validateForm}
        onInputChange={rest.handleChange}
        data={data}
        title="edit card page"
      />
    </Container>
  );
}
