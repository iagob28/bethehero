import { Description, SecondTitle } from "./elements";

export function CardCase() {
  return (
    <>
      <div className="card_case">
        <header style={{ background:"transparent" }}>
          <SecondTitle >Caso:</SecondTitle>
          <Description style={{ margin: "20px 0"}}>Cadelinha atropelada</Description>
          <SecondTitle>Descrição:</SecondTitle>
          <Description style={{ margin: "20px 0" }}>A cadelinha Jolie foi atropelada por um carro no bairro Santana e teve que passar por uma cirurgia às pressas</Description>
          <SecondTitle>Valor:</SecondTitle>
          <Description style={{ margin: "20px 0" }}>R$ 120,00</Description>
        </header>
      </div>
    </>
  );
}
