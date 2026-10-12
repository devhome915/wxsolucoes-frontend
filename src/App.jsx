
import { Routes, Route } from "react-router";

import { Login } from "./pages/login";
import { Contatos } from "./pages/contatos";

export default function App() {
  return (
    <Routes>
      <Route path="login" element={<Login />} />
      <Route path="contatos" element={<Contatos />} />
    </Routes>
  );
}
