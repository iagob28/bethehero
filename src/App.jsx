// React
import { BrowserRouter, Route, Routes } from "react-router-dom";
//Contexts
import { CaseContext } from "./contexts/CaseContext.jsx";
import { AuthContext } from "./contexts/LoginContext.jsx";
//Styles
import "./styles/Global.css";
import "./styles/List.css";
import "./styles/Register.css";
import "./styles/CardCase.css";
//Pages
import { Home } from "./pages/Home.jsx";
import { Register } from "./pages/Register.jsx";
import { List } from "./pages/List.jsx";
import { NewCase } from "./pages/NewCase.jsx";
import { Loading } from "./pages/Loading.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <AuthContext>
          <CaseContext>
            <Loading />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/register" element={<Register />} />
              <Route path="/list/:id/*" element={<List />} />
              <Route path="/list/:id/newcase/*" element={<NewCase />} />
            </Routes>
          </CaseContext>
        </AuthContext>
      </BrowserRouter>
    </>
  );
}

export default App;
