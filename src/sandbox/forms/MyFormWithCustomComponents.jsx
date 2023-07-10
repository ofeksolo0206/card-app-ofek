import { Container } from "@mui/material";
import React from "react";
import Form from "../../forms/components/Form";
import ROUTES from "../../routes/routesModel";
import Input from "../../forms/components/Input";
import Joi from "joi";
import { useState } from "react";

const initialValue = {
  first: "",
  last: "",
};
const schema = {
  first: Joi.string().max(10).required(),
  last: Joi.string().min(2).max(10).allow(""),
};
export default function MyFormWithCustomComponents() {
  const [data, setData] = useState(initialValue);
  const [errors, setErrors] = useState(initialValue);

  const validateProperty = (target) => {
    const joiPropertySchema = Joi.object({
      [target.name]: schema[target.name],
    });
    const obj = { [target.name]: target.value };
    const { error } = joiPropertySchema.validate(obj);
    return error ? error.details[0].message : null;
  };

  const handleChange = ({ target }) => {
    setData((prev) => ({ ...prev, [target.name]: target.value }));
    const errorMessage = validateProperty(target);
    if (errorMessage) {
      setErrors((prev) => ({ ...prev, [target.name]: errorMessage }));
    } else {
      setErrors((prev) => ({ ...prev, [target.name]: "" }));
    }
  };

  const handleSubmit = () => {
    console.log(data);
  };

  const handleReset = () => {
    setData(initialValue);
    setErrors(INITIAL_FORM);
  };

  const validateForm = () => {
    const schemaForValidate = Joi.object(schema);
    const { error } = schemaForValidate.validate(data);
    if (error) return error;
    return null;
  };

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
        title="My form"
        onSubmit={handleSubmit}
        onReset={handleReset}
        styles={{ maxWidth: "450px" }}
        validateForm={validateForm}
        to={ROUTES.SANDBOX}
      >
        <Input
          label={"first name"}
          name={"first"}
          data={data}
          error={errors["first"]}
          onChange={handleChange}
        />
        <Input
          label={"last name"}
          name={"last"}
          data={data}
          error={errors["last"]}
          onChange={handleChange}
        />
      </Form>
    </Container>
  );
}
