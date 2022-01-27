import { Home } from "./pages/Home.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Register } from "./pages/Register.jsx";
import { List } from "./pages/List.jsx";
import "./styles/App.css";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/list" element={<List />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
