import { useState } from "react";
import { InputElement } from "./InputElement";
import { ButtonForm } from "./ButtonForm";
import { useAuthContext } from "../../../hooks";

export const FormRegister = () => {
  const { register } = useAuthContext();

  const [formRegister, setFormRegister] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleFormRegister = (e) => {
    setFormRegister({ ...formRegister, [e.target.name]: e.target.value });
  };

  const submitForm = (e) => {
    e.preventDefault();
    register(formRegister);
  };

  return (
    <form className="w-11/12 h-44 flex flex-col items-center justify-around">
      <InputElement
        label="Username:"
        type="text"
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
