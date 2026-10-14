import { Outlet } from "react-router";

// Ajuste os caminhos conforme seus arquivos
import { Header} from "../layout/mainHeader/header/header";
import { Footer } from "../layout/mainFooter/footer/footer";

export function MainLayout() {
  return (
    <div className="app-layout">
      <Header/>

      <main className="app-content">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}