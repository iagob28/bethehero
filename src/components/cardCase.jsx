import { Description } from "./texts.js";
import { SecondTitle } from "./titles.js";

export function CardCase(card) {
  return (
    <>
      <div className="card_case" style={{ margin: "12px" }}>
        <header style={{ background: "transparent" }}>
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
        </header>
      </div>
    </>
  );
}
