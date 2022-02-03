//React
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
//Contexts
import { CasesContext } from "../contexts/CaseContext";
//Components
import { Title, LinkTitle } from "../components/titles.js";
import { Button } from "../components/buttons.js";
import {
  TextInput,
  Description,
  DescriptionTextArea,
  Label,
} from "../components/texts.js";
//imgs
import logo from "../assets/img/Logo.svg";
import { AiOutlineArrowLeft } from "react-icons/ai";
//form
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

export function NewCase() {
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
    history(`/list/`);
  }

  function handleReturnHome() {
    history("/");
  }

  const cases = (data) => {
    try {
      createNewCase(data.title, data.description, data.donation);
      history(`/list`);
    } catch (error) {
      alert(error);
      return;
    }
  };

  return (
    <>
      <div className="box_background">
        <div className="box_register">
          <section>
            <img src={logo} alt="Logo Be The Hero" />
            <Title>Cadastrar novo caso</Title>
            <Description>
              Descreva o caso detalhadamente para encontrar um herói para
              resolver isso.
            </Description>
            <LinkTitle onClick={handleReturnHome} className="link">
              <AiOutlineArrowLeft fill="#e02041" />
              Voltar para home
            </LinkTitle>
          </section>
          <section>
            <form onSubmit={handleSubmit(cases)}>
              <div className="float_label">
                <TextInput size="long" {...register("title")} />
                <Label position="low">Título do caso</Label>
                <p className="error">{errors.title?.message}</p>
              </div>
              <div className="float_label">
                <DescriptionTextArea type="text" {...register("description")} />
                <Label position="high">Descrição</Label>
                <p className="error">{errors.description?.message}</p>
              </div>
              <div className="float_label">
                <TextInput size="long" {...register("donation")} />
                <Label position="low">Valor em reais</Label>
                <p className="error">{errors.donation?.message}</p>
              </div>

              <div className="form_buttons">
                <Button type="submit" size="medium" outline="none">
                  Cadastrar
                </Button>
                <Button size="small" color="transparent" onClick={handleReturn}>
                  Cancelar
                </Button>
              </div>
            </form>
          </section>
        </div>
      </div>
    </>
  );
}
