//React
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
//Contexts
import { LoginContext } from "../contexts/LoginContext";
//Components
import { TextInput } from "../components/texts.js";
import { Title, LinkTitle } from "../components/titles.js";
import { InputButton } from "../components/buttons.js";
//imgs
import logo from "../assets/img/Logo.svg";
import imgOmni from "../assets/img/OmniStack11 1.png";



export function Home() {
  const history = useNavigate();
  const [id, setID] = useState("");

  const { users } = useContext(LoginContext);

  function registerPath() {
    history("/register");
  }

  function handleSignIn(id) {
    if (id === "") {
      alert("You must put an ID");
      return;
    } else {
      users.map((user) => {
        if (user.ong === id) {
          history(`/list/${user.ong}`);
          return user;
        } else {
          alert("User not registered");
          return user;
        }
      });
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
            type="text"
            style={{ width: "351px", height: "60px" }}
            onClick={() => handleSignIn(id)}
          >
            Entrar
          </InputButton>
          <LinkTitle onClick={registerPath}>Não tenho cadastro</LinkTitle>
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
