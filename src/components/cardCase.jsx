import { DeleteButton } from "./buttons.js";
import { Description } from "./texts.js";
import { SecondTitle } from "./titles.js";
import deleteButton from "../assets/img/delete.svg";
import { useContext, useEffect } from "react";
import { CasesContext } from "../contexts/CaseContext.jsx";
import { useAuth } from "../hooks/useAuth.js";

export function CardCase(card) {
  const { deleteCase } = useContext(CasesContext);
  const { user } = useAuth();

  function handleDeleteCase() {
    deleteCase(card.id, user.id);
  }

  return (
    <>
      <div className="card_case" style={{ margin: "12px" }}>
        <header className="delete_button">
          <DeleteButton onClick={handleDeleteCase}>
            <img src={deleteButton} alt="delete case button" />
          </DeleteButton>
        </header>
        <section style={{ background: "transparent" }}>
          <SecondTitle>Caso:</SecondTitle>
          <Description style={{ margin: "20px 0" }}>{card.title}</Description>
          <SecondTitle>Descrição:</SecondTitle>
          <Description style={{ margin: "20px 0" }}>
            {card.description}
          </Description>
          <SecondTitle>Valor:</SecondTitle>
          <Description style={{ margin: "20px 0" }}>
            {card.donation}
          </Description>
        </section>
      </div>
    </>
  );
}
