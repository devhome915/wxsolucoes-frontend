import { Link } from "react-router";
import logo from "../../../assets/imagens/bandeiras/logo/logo-wx-pcsoft.png"; 
import brasil from "../../../assets/imagens/bandeiras/drapeau-br.gif";
import espanha from "../../../assets/imagens/bandeiras/drapeau-esp.gif";
import franca from "../../../assets/imagens/bandeiras/drapeau-fr.gif";
import usa from "../../../assets/imagens/bandeiras/drapeau-us.gif";

export function Nav(){

    const menuLabel = [
        { nome: "Programas", link:"/Programas", dropdown: true },
        { nome: "Help", link:"/help", dropdown: false },
        { nome: "Baixar", link:"/baixar", dropdown: true },
        { nome: "Suporte técnico", link:"/suporte", dropdown: true },
        { nome: "Treinamento", link:"/treinamento", dropdown: true },
        { nome: "Informações", link:"/info", dropdown: true },
        { nome: "Contatos", link:"/contatos", dropdown: false },
    ];
    const imgPais = [
        { nome: "Brasil", img: brasil, idioma: "Português" },
        { nome: "Espanha", img: espanha, idioma: "Espanhol" },
        { nome: "França", img: franca, idioma: "Francês" },
        { nome: "USA", img: usa, idioma: "Inglês" },
      ];
     return (
    <nav className="navbar navbar-expand-xl menu-principal">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img src={logo} alt="Logo da empresa" />
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapsibleNavbar"
          aria-controls="collapsibleNavbar"
          aria-expanded="false"
          aria-label="Abrir menu"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div
          className="collapse navbar-collapse"
          id="collapsibleNavbar"
        >
          <ul className="navbar-nav mx-auto">
            {menuLabel.map((menu) => (
              <li
                className={`nav-item ${menu.dropdown ? "dropdown" : ""}`}
                key={menu.nome}
              >
                {menu.dropdown ? (
                  <>
                    <button
                      className="nav-link dropdown-toggle"
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      {menu.nome}
                    </button>

                    <ul className="dropdown-menu">
                      <li>
                        <Link className="dropdown-item" to={menu.link}>
                          {menu.nome}
                        </Link>
                      </li>
                    </ul>
                  </>
                ) : (
                  <Link className="nav-link" to={menu.link}>
                    {menu.nome}
                  </Link>
                )}
              </li>
            ))}
          </ul>

          <div className="menu-idiomas">
            {imgPais.map((pais) => (
              <button
                key={pais.nome}
                type="button"
                aria-label={pais.idioma}
                title={pais.idioma}
              >
                <img src={pais.img} alt="" />
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}