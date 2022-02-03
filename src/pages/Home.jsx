//React
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { onAuthStateChanged } from "firebase/auth";
//Contexts

//Components
import { TextInput } from "../components/texts.js";
import { Title, LinkTitle } from "../components/titles.js";
import { InputButton } from "../components/buttons.js";
//imgs
import logo from "../assets/img/Logo.svg";
import imgOmni from "../assets/img/OmniStack11 1.png";
//form
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useEffect } from "react";

export function Home() {
  const history = useNavigate();

  const { userSignIn, auth } = useAuth();

  const userObject = yup.object({
    email: yup.string().email().required(),
    password: yup.string().required().min(8),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(userObject),
  });

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        history(`/list/${user.email}`);
      } else {
        return;
      }
    });
    return;
  }, [auth, history]);

  const userData = (data) => {
    try {
      userSignIn(data.email, data.password);
    } catch (error) {
      alert(error);
      return;
    }
  };

  function registerPath() {
    history("/register");
  }

  return (
    <>
      <div className="container">
        <section>
          <img src={logo} alt="Logo Be The Hero" />
          <Title>Faça seu login</Title>
          <form onSubmit={handleSubmit(userData)}>
            <TextInput
              type="text"
              placeholder="E-mail"
              style={{ width: "351px", height: "60px" }}
              autoComplete="username"
              {...register("email")}
            />
            <p className="error">{errors.email?.message}</p>
            <TextInput
              type="password"
              placeholder="Senha"
              style={{ width: "351px", height: "60px" }}
              autoComplete="current-password"
              {...register("password")}
            />
            <p className="error">{errors.password?.message}</p>
            <InputButton
              type="submit"
              style={{ width: "351px", height: "60px" }}
            >
              Entrar
            </InputButton>
            <LinkTitle onClick={registerPath}>Não tenho cadastro</LinkTitle>
          </form>
        </section>
        <section>
          <img
            src={imgOmni}
            style={{ width: "593px", height: "auto", marginTop: "16px" }}
            alt=""
          />
        </section>
      </div>
    </>
  );
}
