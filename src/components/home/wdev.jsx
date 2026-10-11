import logoWindev from "../assets/imagens/img/logo-windev.png";
import pacoteWindev from "../assets/imagens/img/package-windev-26.png";

import logoWebdev from "../assets/imagens/img/logo-webdev.png";
import pacoteWebdev from "../assets/imagens/img/package-webdev-26.png";

import logoMobile from "../assets/imagens/img/logo-windev-mobile.png";
import pacoteMobile from "../assets/imagens/img/package-windev-mobile-26.png";

const produtos = [
  {
    id: "windev",
    nome: "WINDEV",
    titulo: "Desenvolvimento Windows, Linux e .NET",
    descricao:
      "Crie todos os seus aplicativos para Windows, Linux e Mac 10 vezes mais rápido",
    logo: logoWindev,
    imagem: pacoteWindev
  },
  {
    id: "webdev",
    nome: "WEBDEV",
    titulo: "Desenvolvimento Web",
    descricao:
      "Crie sites e aplicativos da Intranet e da Internet 10 vezes mais rápido",
    logo: logoWebdev,
    imagem: pacoteWebdev
  },
  {
    id: "windev-mobile",
    nome: "WINDEV Mobile",
    titulo: "Desenvolvimento para Android e iPhone",
    descricao:
      "Crie em poucas horas seus aplicativos iOS, Android, Windows 10 IoT e CE",
    logo: logoMobile,
    imagem: pacoteMobile
  }
];

function ProdutoCard({ produto }) {
  return (
    <article className="card_wdev h-100 p-4 text-center">
      <img
        src={produto.logo}
        alt={`Logo ${produto.nome}`}
        className="produto-logo img-fluid mb-3"
      />

      <h3 className="h5">{produto.titulo}</h3>

      <img
        src={produto.imagem}
        alt={`Pacote ${produto.nome}`}
        className="produto-imagem img-fluid my-3"
        loading="lazy"
      />

      <p className="mb-0">{produto.descricao}</p>
    </article>
  );
}

export function Wdev() {
  return (
    <section className="wdev container py-5">
      <div className="titleWdev text-center mb-4">
        <p>Plataforma integrada de DevOps</p>
        <h2 className="h4 mt-2">
          DESENVOLVA 10 VEZES MAIS RÁPIDO
        </h2>
      </div>

      <div className="card-wdev-main row g-4 mt-4">
        {produtos.map((produto) => (
          <div
            key={produto.id}
            className="col-12 col-md-6 col-lg-4"
          >
            <ProdutoCard produto={produto} />
          </div>
        ))}
      </div>
    </section>
  );
}