
import { Outlet } from "react-router";

// Ajuste os imports conforme os nomes reais
import { Nav } from "./mainHeader/Nav";
import { Footer } from "./mainFooter/Footer";

export function MainLayout() {
  return (
    <>
      <header>
        <Nav />
      </header>

      <main>
        <Outlet />
      </main>

      <Footer />
    </>
  );
}
