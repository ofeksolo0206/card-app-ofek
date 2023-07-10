import React from "react";
import { Route, Routes } from "react-router-dom";
import CardDetailsPage from "../cards/pages/CardDetailsPage";
import CardsPage from "../cards/pages/CardsPage";
import FavCardsPage from "../cards/pages/FavCardsPage";
import MyCards from "../cards/pages/MyCards";
import AboutPage from "../pages/AboutPage";
import ErrorPage from "../pages/ErrorPage";
import SandBox from "../sandbox/SandBox";
import EditUser from "../users/pages/EditUser";
import LoginPage from "../users/pages/LoginPage";
import SignupPage from "../users/pages/SignupPage";
import ROUTES from "./routesModel";
import Memoization from "../sandbox/components/Memoization";
import MyCounter from "../sandbox/components/MyCounter";
import Countires from "../sandbox/components/Countires";
import MyForm from "../sandbox/components/MyForm";
import EditCardPage from "../cards/pages/EditCardPage";
import CreateCardPage from "../cards/pages/CreateCardPage";

export default function Router() {
  
  return (
    <Routes>
      <Route path={ROUTES.ROOT} element={<CardsPage />} />
      <Route path={ROUTES.CARDS} element={<CardsPage />} />
      <Route path={ROUTES.ABOUT} element={<AboutPage />} />
      <Route path={ROUTES.FAV_CARDS} element={<FavCardsPage />} />
      <Route path={ROUTES.MY_CARDS} element={<MyCards />} />
      <Route path={`${ROUTES.EDIT_CARD}/:id`} element={<EditCardPage/>}/>
      <Route path={ROUTES.CREATE_CARD} element={<CreateCardPage/>}/>
      <Route path={ROUTES.SIGNUP} element={<SignupPage/>} />
      <Route path={ROUTES.LOGIN} element={<LoginPage />} />
      <Route path={ROUTES.EDIT_USER} element={<EditUser />} />
      <Route path={`${ROUTES.CARD_INFO}/:id`} element={<CardDetailsPage />} />
      <Route path={ROUTES.SANDBOX} element={<SandBox />}>
        <Route path="memo" element={<Memoization />} />
        <Route path="counter" element={<MyCounter />} />
        <Route path="countries" element={<Countires />} />
        <Route path="my-form" element={<MyForm/>}/>
       </Route>
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}


