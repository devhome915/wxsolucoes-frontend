import { Outlet } from "react-router";
import { Header } from "./mainHeader/header/header";
import { Footer } from "./mainFooter/footer/footer";

export function MainLayout() {
  return (
    <>
      <Header />

      <main className="container-fluid">
        <Outlet />
      </main>

      <Footer/>
    </>
  );
}