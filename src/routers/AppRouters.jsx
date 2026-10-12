import { Route, Routes } from "react-router";
import { MainLayout } from "../layout/mainLayout";
import { Contatos } from "../pages/contatos";
import { Home } from "../pages/home";
import { Login } from "../pages/login";

export function AppRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="contatos" element={<Contatos />} />
        <Route path="login" element={<Login />} />
        <Route path="/" element={<Home />} />
      </Route>
    </Routes>
  );
}