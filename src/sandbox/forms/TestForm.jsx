import React from "react";
import useForm from "../../forms/hooks/useForm";
import { Container } from "@mui/material";
import Form from "../../forms/components/Form";
import ROUTES from "../../routes/routesModel";
import Input from "../../forms/components/Input";
import Joi from "joi";
import { useNavigate } from "react-router-dom";

export default function TestForm() {
  const INITIAL_FORM = {
    first: "",
    last: "",
  };

  const schema = {
    first: Joi.string().min(2).required(),
    last: Joi.string().min(2).max(7).required(),
  };
  
  
  const navigate = useNavigate();

  const handleSubmit = (data) =>{
     console.log(data);
     navigate(ROUTES.ROOT)
  }

  const { data, errors, ...rest } = useForm(INITIAL_FORM, schema, handleSubmit);

  return (
    <Container
      sx={{
        mt: 8,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Form
        title="Test Form"
        onSubmit={rest.onSubmit}
        onReset={rest.handleReset}
        styles={{ maxWidth: "450px" }}
        validateForm={rest.validateForm}
        to={ROUTES.ROOT} >

        <Input
          label="first name"
          name="first"
          data={data}
          error={errors.first}
          onChange={rest.handleChange}
        />
        <Input
          label="last name"
          name="last"
          data={data}
          error={errors.last}
          onChange={rest.handleChange}
        />
      </Form>
    </Container>
  );
}
