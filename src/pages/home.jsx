import "../components/home/homeCss/homeMainCss.css"
import { Link } from "react-router";
import crossPlataformas from "../assets/imagens/cross-plateformes.png";
import { Carousel } from "../components/home/carousel";
import { Wdev } from "../components/home/wdev";
import { CarouselParceiros } from "../components/home/CarouselParceiros";
import { Noticias } from "../components/home/Noticias";
import { AppCrossPlataform } from "../components/home/AppCrossPlataform";



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