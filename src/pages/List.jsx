import logo from "../assets/img/Logo.svg";
import {
  Description,
  InputButton,
  OffButton,
  Title,
} from "../components/elements";
import off from "../assets/img/off.png";
import { CardCase } from "../components/cardCase.jsx";

export function List() {
  return (
    <>
    <div></div>
      <header className="header">
        <div>
          <img src={logo} alt="" style={{ width: "144px" }} />
          <Description style={{ margin: "0 0 0 8px" }}>
            Bem vinda(o), APAD
          </Description>
        </div>
        <div>
          <InputButton
            style={{ width: "262px", height: "60px", margin: "0 0 0 8px" }}
          >
            Cadastrar novo Caso
          </InputButton>
          <OffButton style={{ margin: "0 0 0 8px" }}>
            <img src={off} alt="" />
          </OffButton>
        </div>
      </header>
      <div className="divider"></div>
      <section style={{ margin: "0 160px 0 160px" }}>
        <Title>Casos cadastrados</Title>
        <div>
          <CardCase />
        </div>
      </section>
    </>
  );
}
