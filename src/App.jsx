import { Home } from "./pages/Home.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Register } from "./pages/Register.jsx";
import "./styles/App.css";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
