import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";

import { CasesContext } from "./contexts/CaseContext.jsx";
import { LoginContext } from "./contexts/LoginContext.jsx";

import "./styles/Global.css";
import "./styles/List.css"
import "./styles/Register.css"
import "./styles/CardCase.css"

import { Home } from "./pages/Home.jsx";
import { Register } from "./pages/Register.jsx";
import { List } from "./pages/List.jsx";
import { NewCase } from "./pages/NewCase.jsx";

function App() {
  const [cases, setCases] = useState([]);
  const [users, setUsers] = useState([]);
  function createNewCase(title, description, donation, id) {
    setCases((state) => [
      ...state,
      {
        title: title,
        description: description,
        donation: donation,
        key: id,
      },
    ]);
  }

  function createNewUser(ong, email, whatsApp, city, uf) {
    setUsers((state) => [
      ...state,
      {
        ong: ong,
        email: email,
        whatsApp: whatsApp,
        city: city,
        uf: uf,
        key: ong,
      },
    ]);
  }
  return (
    <>
      <BrowserRouter>
        <LoginContext.Provider value={{ users, createNewUser }}>
          <CasesContext.Provider value={{ cases, createNewCase }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/register" element={<Register />} />
              <Route path="/list/:id/*" element={<List />} />
              <Route path="/list/:id/newcase/*" element={<NewCase />} />
            </Routes>
          </CasesContext.Provider>
        </LoginContext.Provider>
      </BrowserRouter>
    </>
  );
}

export default App;
