import { useContext, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import logo from "../assets/img/Logo.svg";
import {
  TextInput,
  Title,
  InputButton,
  ReturnTitle,
  Description,
} from "../components/elements";
import { CasesContext } from "../contexts/CaseContext";

export function NewCase() {
  const params = useParams();
  const history = useNavigate();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [donation, setDonation] = useState("");
  const { createNewCase } = useContext(CasesContext);

  function handleReturn() {
    history(`/list/${params.id}`);
  }

  function handleReturnHome() {
    history("/");
  }

  function handleCaseRegistry(event) {
    event.preventDefault();
    if (title === "" || description === "" || donation === "") {
      alert("Please fill all the form");
      return;
    }
    createNewCase(title, description, donation, title);

    history(`/list/${params.id}`);
  }
  return (
    <>
      <div className="box_register">
        <section>
          <img src={logo} alt="Logo Be The Hero" />
          <Title>Cadastrar novo caso</Title>
          <Description style={{ width: "380px" }}>
            Descreva o caso detalhadamente para encontrar um herói para resolver
            isso.
          </Description>
          <ReturnTitle onClick={handleReturnHome}>Voltar para home</ReturnTitle>
        </section>
        <section>
          <TextInput
            placeholder="Título do caso"
            style={{ width: "448px", height: "60px", marginTop: "8px" }}
            onChange={(event) => setTitle(event.target.value)}
            value={title}
          />
          <TextInput
            placeholder="Descrição"
            style={{ width: "448px", height: "175px", marginTop: "8px" }}
            onChange={(event) => setDescription(event.target.value)}
            value={description}
          />
          <TextInput
            placeholder="Valor em reais"
            style={{ width: "448px", height: "60px", marginTop: "8px" }}
            onChange={(event) => setDonation(event.target.value)}
            value={donation}
          />
          <div>
            <InputButton
              style={{
                width: "168px",
                height: "60px",
                background: "transparent",
                color: "#41414D",
                fontWeight: "700",
                border: "1px solid #13131a32",
              }}
              onClick={handleReturn}
            >
              Cancelar
            </InputButton>
            <InputButton
              style={{ width: "263px", height: "60px", marginLeft: "17px" }}
              onClick={handleCaseRegistry}
            >
              Cadastrar
            </InputButton>
          </div>
        </section>
      </div>
    </>
  );
}
