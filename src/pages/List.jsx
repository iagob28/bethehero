//React
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
//Contexts
import { CardCase } from "../components/cardCase.jsx";
import { useAuth } from "../hooks/useAuth";
//Components
import { Description } from "../components/texts.js";
import { Button } from "../components/buttons.js";
import { Title } from "../components/titles.js";
//imgs
import logo from "../assets/img/Logo.svg";
import { AiOutlinePoweroff } from "react-icons/ai";
//hooks
import { useCases } from "../hooks/useCases.js";
import { onAuthStateChanged } from "firebase/auth";

export function List() {
  const history = useNavigate();
  const { cases } = useCases();
  const { auth, userSignOut, user } = useAuth();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (!user) {
        history("/");
      } else {
        return;
      }
    });
    return;
  }, [auth, history]);

  function handleCreateCase() {
    history(`/list/newcase`);
  }

  function handleOff() {
    userSignOut();
  }
  return (
    <>
      <header className="header">
        <div>
          <img src={logo} alt="" style={{ width: "144px" }} />
          <Description>Bem vinda(o), {user.email}</Description>
        </div>
        <div>
          <Button size="medium" outline="none" onClick={handleCreateCase}>
            Cadastrar novo Caso
          </Button>
          <Button size="tiny" color="transparent" innerSize="big" onClick={handleOff}>
            <AiOutlinePoweroff fill="#e02041" />
          </Button>
        </div>
      </header>
      <div className="divider"></div>
      <section className="list_body">
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
