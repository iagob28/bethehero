import { DeleteButton } from "./buttons.js";
import { Description } from "./texts.js";
import { SecondTitle } from "./titles.js";
import { useContext } from "react";
import { CasesContext } from "../contexts/CaseContext.jsx";
import { useAuth } from "../hooks/useAuth.js";
import { AiFillDelete } from "react-icons/ai";

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
            <AiFillDelete fill="#e02041" className="button_image" />
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
