import React from 'react'
import { useUser } from '../../users/providers/UserProvider'
import useCards from '../hooks/useCards';
import useForm from '../../forms/hooks/useForm';
import initialCardForm from '../helpers/initialForms/initialCardForm';
import cardSchema from '../models/joi-schema/cardSchema';
import {useTheme} from "@emotion/react"
import { Navigate } from 'react-router-dom';
import ROUTES from '../../routes/routesModel';
import { Container } from '@mui/material';
import CardForm from '../components/CardForm';

export default function CreateCardPage() {
    const {user} = useUser();
    const {handleCreateCard} = useCards();
    const {value:{data,errors},...rest} = useForm(
        initialCardForm,
        cardSchema,
        handleCreateCard
    );

    const {isDark} = useTheme();

    if(user) <Navigate replace to={ROUTES.MY_CARDS}/>
  return (
  <Container
  sx={{
    paddingTop: 8,
    display: "flex",
    alignContent: "center",
    alignItems: "center",
    color: isDark ? "info" : "primary",
  }}>
    <CardForm
    onSubmit={rest.onSubmit}
    onReset={rest.handleReset}
    errors={errors}
    onFormChange={rest.validateForm}
    onInputChange={rest.handleChange}
    data={data}
    title='Create New Card'
    />
  </Container>
  );
}
