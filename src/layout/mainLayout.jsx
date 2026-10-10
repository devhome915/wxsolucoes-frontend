import { Outlet } from "react-router";
import { Header } from "./mainHeader/header/header";

export function MainLayout() {
  return (
    <>
      <Header />

      <main className="container-fluid">
        <Outlet />
      </main>
    </>
  );
}