import { Home } from "./pages/Home.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Register } from "./pages/Register.jsx";
import { List } from "./pages/List.jsx";
import { NewCase } from "./pages/NewCase.jsx";
import "./styles/App.css";
import { CasesContext } from "./contexts/CaseContext.jsx";
import { useState } from "react";
function App() {
  const [cases, setCases] = useState([]);
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
  return (
    <CasesContext.Provider value={{ cases, createNewCase }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/list/:id/*" element={<List />} />
          <Route path="/list/:id/newcase/*" element={<NewCase />} />
        </Routes>
      </BrowserRouter>
    </CasesContext.Provider>
  );
}

export default App;
