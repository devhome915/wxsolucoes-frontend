import { Link } from "react-router";
import crossPlataformas from "../assets/imagens/cross-plateformes.png";
import { Carousel } from "../components/carousel";
import { Wdev } from "../components/wdev";
import { CarouselParceiros } from "../components/CarouselParceiros";
import { Noticias } from "../components/Noticias";
import { AppCrossPlataform } from "../components/AppCrossPlataform";



export function Home() {
  return (
    <section className="text-center">
      <Link to="/Programas" className="text-dark text-decoration-none">
        <h4>
          Desenvolvimento de aplicações multiplataforma
          com a Wx Soluções - BR
        </h4>

        <img
          src={crossPlataformas}
          alt="Desenvolvimento de aplicações multiplataforma"
          className="img-fluid"
        />
      </Link>
      <Carousel/>
      <Wdev/>
      <CarouselParceiros /> 
      <Noticias/>
      <AppCrossPlataform/>
    </section>
  );
}