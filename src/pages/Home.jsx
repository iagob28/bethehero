import logo from "../assets/img/Logo.svg";
import imgOmni from "../assets/img/OmniStack11 1.png";
import {
  TextInput,
  Title,
  InputButton,
  MinorTitle
} from "../components/elements";

export function Home() {
  return (
    <>
      <div className="container">
        <section>
          <img src={logo} alt="Logo Be The Hero" />
          <Title>Faça seu logon</Title>
          <TextInput
            type="text"
            placeholder="Sua ID"
            style={{ width: "351px", height: "60px" }}
          />
          <InputButton type="input" style={{ width: "351px", height: "60px" }}>
            Entrar
          </InputButton>
          <MinorTitle>Não tenho cadastro</MinorTitle>
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
