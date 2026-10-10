import { Route, Routes } from "react-router";
import { MainLayout } from "../layout/mainLayout";
import { Contatos } from "../pages/contatos";
import { Home } from "../pages/home";

export function AppRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="contatos" element={<Contatos />} />
        <Route path="" element={<Home />} />
      </Route>
    </Routes>
  );
}