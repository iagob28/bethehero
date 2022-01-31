//React
import { useNavigate, useParams } from "react-router-dom";
import { useContext, useEffect } from "react";
//Contexts
import { CardCase } from "../components/cardCase.jsx";
import { CasesContext } from "../contexts/CaseContext";
import { useAuth } from "../hooks/useAuth";
//Components
import { Description } from "../components/texts.js";
import { InputButton, OffButton } from "../components/buttons.js";
import { Title } from "../components/titles.js";
//imgs
import logo from "../assets/img/Logo.svg";
import off from "../assets/img/off.png";

export function List() {
  const params = useParams();
  const history = useNavigate();
  const { cases } = useContext(CasesContext);
  const { user, userSignOut } = useAuth();
  console.log(user);
  useEffect(() => {
    if (user.id === "" || user.id === undefined) {
      history("/");
    }
  });

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
                key={card.title}
              />
            );
          })}
        </div>
      </section>
    </>
  );
}
