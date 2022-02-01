//React
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
//Contexts
import { LoginContext } from "../contexts/LoginContext";
//Components
import { Title, ReturnTitle } from "../components/titles.js";
import { InputButton } from "../components/buttons.js";
import { TextInput, Description } from "../components/texts.js";
//imgs
import logo from "../assets/img/Logo.svg";
//form
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

export function Register() {
  const history = useNavigate();
  
  const userObject = yup.object({
    ong: yup.string().required(),
    email: yup.string().email().required(),
    password: yup.string().required().min(8),
    whatsApp: yup.string().required(),
    city: yup.string().required(),
    uf: yup.string().required(),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(userObject),
  });

  const { createNewUser } = useContext(LoginContext);

  const users = async (data) => {
    try {
      await createNewUser(data.email, data.password);
    } catch (error) {
      alert(error);
      return;
    }
    history(`/list/${data.ong}`);
  };

  function handleReturn() {
    history("/");
  }

  return (
    <>
      <div className="box_register">
        <section>
          <img src={logo} alt="Logo Be The Hero" />
          <Title>Cadastro</Title>
          <Description style={{ width: "380px" }}>
            Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem
            os casos da sua ONG.
          </Description>
          <ReturnTitle onClick={handleReturn}>Voltar para o login</ReturnTitle>
        </section>
        <section>
          <form onSubmit={handleSubmit(users)}>
            <TextInput placeholder="Nome da ONG" {...register("ong")} />
            <p className="error">{errors.ong?.message}</p>
            <TextInput placeholder="E-mail" {...register("email")} />
            <p className="error">{errors.email?.message}</p>
            <TextInput
              type="password"
              placeholder="Senha"
              {...register("password")}
            />
            <p className="error">{errors.password?.message}</p>
            <TextInput placeholder="WhatsApp" {...register("whatsApp")} />
            <p className="error">{errors.whatsApp?.message}</p>
            <div>
              <TextInput
                placeholder="Cidade"
                style={{ width: "370px" }}
                {...register("city")}
              />

              <TextInput
                placeholder="UF"
                style={{
                  width: "70px",
                  marginLeft: "8px",
                }}
                // onChange={(event) => setUF(event.target.value)}
                // value={uf}
                {...register("uf")}
              />
              <p className="error">{errors.city?.message}</p>
              <p className="error">{errors.uf?.message}</p>
            </div>
            <InputButton style={{ width: "448px" }}>Cadastrar</InputButton>
          </form>
        </section>
      </div>
    </>
  );
}
