import { useState } from "react";
import { InputElement } from "./InputElement";
import { ButtonForm } from "./ButtonForm";

export const FormRegister = () => {
  const [formRegister, setFormRegister] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleFormRegister = (e) => {
    setFormRegister({ ...FormRegister, [e.target.name]: e.target.value });
  };

  const submitForm = (e) => {
    e.preventDefault();
  };
  return (
    <form className="w-11/12 h-44 flex flex-col items-center justify-around">
      <InputElement
        label="Username:"
        type="username"
        name="username"
        value={formRegister.username}
        onChange={handleFormRegister}
      />
      <InputElement
        label="Email:"
        type="email"
        name="email"
        value={formRegister.email}
        onChange={handleFormRegister}
      />
      <InputElement
        label="Password:"
        type="password"
        name="password"
        value={formRegister.password}
        onChange={handleFormRegister}
      />
      <ButtonForm onClick={submitForm} />
    </form>
  );
};
