import React, { useEffect } from "react";
import { useUser } from "../providers/UserProvider";
import useUsers from "../hooks/useUsers";
import useForm from "../../forms/hooks/useForm";
import { Container } from "@mui/material";
import userToModel from "../helpers/normalization/userToModel";
import signUpSchema from "../models/joi-schema/signupSchema";
import normalizeUser from "../helpers/normalization/normalizeUser";
import UserForm from "../components/UserForm";
import initialSignupForm from "../helpers/initialForms/initialSignupForm";
import { Navigate } from "react-router-dom";
import { useTheme } from "../../providers/ThemeProvider";
import ROUTES from "../../routes/routesModel";

export default function EditAccount() {

  const { handleUpdateUser, handleGetUser } = useUsers();
  const { user } = useUser();
  const { value, ...rest } = useForm(
    initialSignupForm,
    signUpSchema,
    () => {
      handleUpdateUser(user.id, {
        ...normalizeUser({ ...value.data }),
      });
    }
  );

  useEffect(() => {
    handleGetUser(user.id).then((data) => {
      const modelUser = userToModel(data);
      rest.setData(modelUser);
    });
  }, []);

  const { isDark } = useTheme();
  if (!user) {
    return <Navigate replace to={ROUTES.ROOT} />;
  } else
    return (
      <Container
        sx={{
          paddingTop: 8,
          display: "flex",
          alignContent: "center",
          alignItems: "center",
          color: isDark ? "white" : "primary",
        }}
      >
        <UserForm
          onSubmit={rest.onSubmit}
          onReset={rest.handleReset}
          onFormChange={rest.validateForm}
          title="Edit Account"
          errors={value.errors}
          data={value.data}
          onInputChange={rest.handleChange}
          setData={rest.setData}
        />
      </Container>
    );
}


