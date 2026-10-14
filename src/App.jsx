
import { Routes, Route } from "react-router";

import { MainLayout } from "./layout/mainLayout";
import { Contatos } from "./pages/contatos";
import { Login } from "./pages/login";
import { Home } from "./pages/home";
import { Help } from "./pages/help";

export default function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>

        <Route
          index
          element={<Home/>}
        />

        <Route path="contatos" element={<Contatos />} />

        <Route path="login" element={<Login />} />
        <Route path="help" element={<Help />} />

      </Route>
    </Routes>
  );
}
