//React
import { useContext, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
//Contexts
import { CasesContext } from "../contexts/CaseContext";
//Components
import { Title, ReturnTitle } from "../components/titles.js";
import { InputButton } from "../components/buttons.js";
import {
  TextInput,
  Description,
  DescriptionInput,
} from "../components/texts.js";
//imgs
import logo from "../assets/img/Logo.svg";
//form
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

export function NewCase() {
  const params = useParams();
  const history = useNavigate();
  const { createNewCase } = useContext(CasesContext);
  const cardObject = yup.object({
    title: yup.string().required(),
    description: yup.string().required(),
    donation: yup.string().required(),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(cardObject),
  });

  function handleReturn() {
    history(`/list/${params.id}`);
  }

  function handleReturnHome() {
    history("/");
  }

  const cases = (data) => {
    createNewCase(data.title, data.description, data.donation);

    history(`/list/${params.id}`);
  };

  return (
    <>
      <div className="box_register">
        <section>
          <img src={logo} alt="Logo Be The Hero" />
          <Title>Cadastrar novo caso</Title>
          <Description style={{ width: "380px" }}>
            Descreva o caso detalhadamente para encontrar um herói para resolver
            isso.
          </Description>
          <ReturnTitle onClick={handleReturnHome}>Voltar para home</ReturnTitle>
        </section>
        <section>
          <form onSubmit={handleSubmit(cases)}>
            <TextInput placeholder="Título do caso" {...register("title")} />
            <p className="error">{errors.title?.message}</p>
            <DescriptionInput
              placeholder="Descrição"
              {...register("description")}
            />
            <p className="error">{errors.description?.message}</p>
            <TextInput placeholder="Valor em reais" {...register("donation")} />
            <p className="error">{errors.donation?.message}</p>
            <div>
              <InputButton
                style={{
                  width: "168px",
                  background: "transparent",
                  color: "#41414D",
                  fontWeight: "700",
                  border: "1px solid #13131a32",
                }}
                onClick={handleReturn}
              >
                Cancelar
              </InputButton>
              <InputButton
                type="submit"
                style={{ width: "263px", marginLeft: "17px" }}
              >
                Cadastrar
              </InputButton>
            </div>
          </form>
        </section>
      </div>
    </>
  );
}
