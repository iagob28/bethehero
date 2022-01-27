import { useNavigate } from "react-router-dom";
import logo from "../assets/img/Logo.svg";
import {
  TextInput,
  Title,
  InputButton,
  MinorTitle,
  ReturnTitle,
  Description,
} from "../components/elements";

export function Register() {
  const history = useNavigate();
  function handleReturn() {
    history("/");
  }
  return (
    <>
      <div className="box_register">
        <section>
          <img src={logo} alt="Logo Be The Hero" />
          <Title>Cadastro</Title>
          <Description style={{ width: "380px" }}>
            Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem
            os casos da sua ONG.
          </Description>
          <ReturnTitle onClick={handleReturn}>Voltar para o login</ReturnTitle>
        </section>
        <section>
          <TextInput
            placeholder="Nome da ONG"
            style={{ width: "448px", height: "60px", marginTop: "8px" }}
          />
          <TextInput
            placeholder="E-mail"
            style={{ width: "448px", height: "60px", marginTop: "8px" }}
          />
          <TextInput
            placeholder="WhatsApp"
            style={{ width: "448px", height: "60px", marginTop: "8px" }}
          />
          <div>
            <TextInput
              placeholder="Cidade"
              style={{ width: "370px", height: "60px", marginTop: "8px" }}
            />
            <TextInput
              placeholder="UF"
              style={{
                width: "70px",
                height: "60px",
                marginTop: "8px",
                marginLeft: "8px",
              }}
            />
          </div>
          <InputButton style={{ width: "448px", height: "60px" }}>
            Cadastrar
          </InputButton>
        </section>
      </div>
    </>
  );
}
