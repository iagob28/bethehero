//React
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { onAuthStateChanged } from "firebase/auth";
//Contexts

//Components
import { Label, TextInput } from "../components/texts.js";
import { Title, LinkTitle } from "../components/titles.js";
import { Button } from "../components/buttons.js";
//imgs
import logo from "../assets/img/Logo.svg";
import imgOmni from "../assets/img/OmniStack11 1.png";
import { MdLogin } from "react-icons/md";
//form
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useEffect } from "react";
//css
import "../styles/Home.css";

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
        history(`/list`);
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
        <section className="home_left">
          <img src={logo} alt="Logo Be The Hero" />
          <Title>Faça seu login</Title>
          <form onSubmit={handleSubmit(userData)}>
            <div className="float_label">
              <TextInput
                size="medium"
                type="text"
                autoComplete="username"
                {...register("email")}
              />
              <Label position="low" htmlFor="text">
                Entrar
              </Label>
              <p className="error">{errors.email?.message}</p>
            </div>
            <div className="float_label">
              <TextInput
                size="medium"
                type="password"
                autoComplete="current-password"
                {...register("password")}
              />
              <Label position="low" htmlFor="text">
                Senha
              </Label>
              <p className="error">{errors.password?.message}</p>
            </div>

            <Button type="submit" size="default" outline="none">
              Entrar
            </Button>
          </form>
          <LinkTitle onClick={registerPath} className="link">
            <MdLogin fill="#e02041" /> Não tenho cadastro
          </LinkTitle>
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
