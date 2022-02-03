//React
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
//Contexts
import { CardCase } from "../components/cardCase.jsx";
import { useAuth } from "../hooks/useAuth";
//Components
import { Description } from "../components/texts.js";
import { InputButton, OffButton } from "../components/buttons.js";
import { Title } from "../components/titles.js";
//imgs
import logo from "../assets/img/Logo.svg";
import off from "../assets/img/off.png";
//hooks
import { useCases } from "../hooks/useCases.js";
import { onAuthStateChanged } from "firebase/auth";

export function List() {
  const params = useParams();
  const history = useNavigate();
  const { cases } = useCases();
  const { auth, userSignOut } = useAuth();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (!user) {
        alert("User not logged in");
        history("/");
      } else {
        return;
      }
    });
    return;
  }, [auth]);

  function handleCreateCase() {
    history(`/list/${params.id}/newcase`);
  }

  function handleOff() {
    userSignOut();
  }
  return (
    <>
      <div></div>
      <header className="header">
        <div>
          <img src={logo} alt="" style={{ width: "144px" }} />
          <Description style={{ margin: "0 0 0 8px" }}>
            Bem vinda(o), {params.id}
          </Description>
        </div>
        <div>
          <InputButton
            style={{ width: "262px", height: "60px", margin: "0 0 0 8px" }}
            onClick={handleCreateCase}
          >
            Cadastrar novo Caso
          </InputButton>
          <OffButton style={{ margin: "0 0 0 8px" }} onClick={handleOff}>
            <img src={off} alt="" />
          </OffButton>
        </div>
      </header>
      <div className="divider"></div>
      <section style={{ margin: "0 160px 0 160px" }}>
        <Title>Casos cadastrados</Title>
        <div className="card_list">
          {cases.map((card) => {
            return (
              <CardCase
                title={card.title}
                description={card.description}
                donation={card.donation}
                id={card.id}
                key={card.id}
              />
            );
          })}
        </div>
      </section>
    </>
  );
}
