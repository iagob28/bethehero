import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import { LoginContext } from "../contexts/LoginContext";

import logo from "../assets/img/Logo.svg";
import {
  TextInput,
  Title,
  InputButton,
  ReturnTitle,
  Description,
} from "../components/elements";

export function Register() {
  const history = useNavigate();

  const [ong, setOng] = useState("");
  const [email, setEmail] = useState("");
  const [whatsApp, setWhatsApp] = useState("");
  const [city, setCity] = useState("");
  const [uf, setUF] = useState("");

  const { createNewUser } = useContext(LoginContext);

  function handleReturn() {
    history("/");
  }

  function handleRegistry() {
    if (
      ong === "" ||
      email === "" ||
      whatsApp === "" ||
      city === "" ||
      uf === ""
    ) {
      alert("Please fill all the form");
      return;
    }
    createNewUser(ong, email, whatsApp, city, uf);
    history(`/list/${ong}`);
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
          <TextInput
            placeholder="Nome da ONG"
            style={{ width: "448px", height: "60px", marginTop: "8px" }}
            onChange={(event) => setOng(event.target.value)}
            value={ong}
          />
          <TextInput
            placeholder="E-mail"
            style={{ width: "448px", height: "60px", marginTop: "8px" }}
            onChange={(event) => setEmail(event.target.value)}
            value={email}
          />
          <TextInput
            placeholder="WhatsApp"
            style={{ width: "448px", height: "60px", marginTop: "8px" }}
            onChange={(event) => setWhatsApp(event.target.value)}
            value={whatsApp}
          />
          <div>
            <TextInput
              placeholder="Cidade"
              style={{ width: "370px", height: "60px", marginTop: "8px" }}
              onChange={(event) => setCity(event.target.value)}
              value={city}
            />
            <TextInput
              placeholder="UF"
              style={{
                width: "70px",
                height: "60px",
                marginTop: "8px",
                marginLeft: "8px",
              }}
              onChange={(event) => setUF(event.target.value)}
              value={uf}
            />
          </div>
          <InputButton
            style={{ width: "448px", height: "60px" }}
            onClick={handleRegistry}
          >
            Cadastrar
          </InputButton>
        </section>
      </div>
    </>
  );
}
