import { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/img/Logo.svg";
import imgOmni from "../assets/img/OmniStack11 1.png";
import {
  TextInput,
  Title,
  InputButton,
  MinorTitle,
} from "../components/elements";

export function Home() {
  const history = useNavigate();
  const [id, setID] = useState("");
  function registerPath() {
    history("/register");
  }

  function handleSignIn(id) {
    if (id === "") {
      alert("You must put an ID");
      return;
    } else {
      history(`/list/${id}`);
    }
  }
  return (
    <>
      <div className="container">
        <section>
          <img src={logo} alt="Logo Be The Hero" />
          <Title>Faça seu login</Title>
          <TextInput
            type="text"
            placeholder="Sua ID"
            style={{ width: "351px", height: "60px" }}
            onChange={(event) => setID(event.target.value)}
            value={id}
          />
          <InputButton
            type="input"
            style={{ width: "351px", height: "60px" }}
            onClick={() => handleSignIn(id)}
          >
            Entrar
          </InputButton>
          <MinorTitle onClick={registerPath}>Não tenho cadastro</MinorTitle>
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
