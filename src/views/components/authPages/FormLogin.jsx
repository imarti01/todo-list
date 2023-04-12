import React, { useState } from "react";
import { InputElement } from "./InputElement";
import { ButtonForm } from "./ButtonForm";

export const FormLogin = () => {
  const [formLogin, setFormLogin] = useState({ email: "", password: "" });

  const handleFormLogin = (e) => {
    setFormLogin({ ...formLogin, [e.target.name]: e.target.value });
  };

  const submitForm = (e) => {
    e.preventDefault();
  };

  return (
    <form className="w-11/12 h-44 flex flex-col items-center justify-around">
      <InputElement
        label="Email:"
        type="email"
        name="email"
        value={formLogin.email}
        onChange={handleFormLogin}
      />
      <InputElement
        label="Password:"
        type="password"
        name="password"
        value={formLogin.password}
        onChange={handleFormLogin}
      />
      <ButtonForm onClick={submitForm} />
    </form>
  );
};
