//React
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
//Contexts
import { LoginContext } from "../contexts/LoginContext";
//Components
import { Title, LinkTitle } from "../components/titles.js";
import { Button } from "../components/buttons.js";
import { TextInput, Description, Label } from "../components/texts.js";
//imgs
import logo from "../assets/img/Logo.svg";
import { AiOutlineArrowLeft } from "react-icons/ai";
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
      <div className="box_background">
        <div className="box_register">
          <section>
            <img src={logo} alt="Logo Be The Hero" />
            <Title>Cadastro</Title>
            <Description>
              Faça seu cadastro, entre na plataforma e ajude pessoas a
              encontrarem os casos da sua ONG.
            </Description>
            <LinkTitle onClick={handleReturn} className="link">
              <AiOutlineArrowLeft fill="#e02041" />
              Voltar para o login
            </LinkTitle>
          </section>
          <section>
            <form onSubmit={handleSubmit(users)}>
              {/* Nome da Ong */}
              <div className="float_label">
                <TextInput size="long" {...register("ong")} />
                <Label position="low">Nome da ONG</Label>
                <p className="error">{errors.ong?.message}</p>
              </div>
              {/* Email */}
              <div className="float_label">
                <TextInput size="long" {...register("email")} />
                <Label position="low">E-mail</Label>
                <p className="error">{errors.email?.message}</p>
              </div>
              {/* Senha */}
              <div className="float_label">
                <TextInput
                  size="long"
                  type="password"
                  {...register("password")}
                />
                <Label position="low">Senha</Label>
                <p className="error">{errors.password?.message}</p>
              </div>
              {/* whatsapp */}
              <div className="float_label">
                <TextInput size="long" {...register("whatsApp")} />
                <Label position="low">WhatsApp</Label>
                <p className="error">{errors.whatsApp?.message}</p>
              </div>
              <div className="split_area">
                {/* cidade */}
                <div className="float_label">
                  <TextInput {...register("city")} />
                  <Label position="low">Cidade</Label>
                  <p className="error">{errors.city?.message}</p>
                </div>
                {/* UF */}
                <div className="float_label">
                  <TextInput size="small" {...register("uf")} />
                  <Label position="low">UF</Label>
                  <p className="error">{errors.uf?.message}</p>
                </div>
              </div>
              <Button size="long" outline="none">
                Cadastrar
              </Button>
            </form>
          </section>
        </div>
      </div>
    </>
  );
}
