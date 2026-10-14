
import { useState } from "react";
import { Link } from "react-router";

import logo from "../../../assets/imagens/bandeiras/logo/logo-wx-pcsoft.png";
import brasil from "../../../assets/imagens/bandeiras/drapeau-br.gif";
import espanha from "../../../assets/imagens/bandeiras/drapeau-esp.gif";
import franca from "../../../assets/imagens/bandeiras/drapeau-fr.gif";
import usa from "../../../assets/imagens/bandeiras/drapeau-us.gif";

import "bootstrap-icons/font/bootstrap-icons.css";

export function Nav() {

  const [menuAberto, setMenuAberto] = useState(null);

  const menuLabel = [
    {
      nome: "Programas",
      link: "/Programas",
      dropdown: true,
      submenu: [
        { nome: "Todos os programas", link: "/Programas" }
      ]
    },
    {
      nome: "Help",
      link: "/help",
      dropdown: false
    },
    {
      nome: "Baixar",
      link: "/baixar",
      dropdown: true,
      submenu: [
        { nome: "Downloads", link: "/baixar" }
      ]
    },
    {
      nome: "Suporte técnico",
      link: "/suporte",
      dropdown: true,
      submenu: [
        { nome: "Central de suporte", link: "/suporte" }
      ]
    },
    {
      nome: "Treinamento",
      link: "/treinamento",
      dropdown: true,
      submenu: [
        { nome: "Treinamentos", link: "/treinamento" }
      ]
    },
    {
      nome: "Informações",
      link: "/info",
      dropdown: true,
      submenu: [
        { nome: "Informações gerais", link: "/info" }
      ]
    },
    {
      nome: "Contatos",
      link: "/contatos",
      dropdown: false
    }
  ];

  const imgPais = [
    { nome: "Brasil", img: brasil, idioma: "Português" },
    { nome: "Espanha", img: espanha, idioma: "Espanhol" },
    { nome: "França", img: franca, idioma: "Francês" },
    { nome: "USA", img: usa, idioma: "Inglês" }
  ];

  const alternarMenu = (nome) => {
    setMenuAberto((atual) =>
      atual === nome ? null : nome
    );
  };

  const fecharMenu = () => {
    setMenuAberto(null);
  };

  return (
    <nav className="navbar navbar-expand-xl menu-principal">
      <div className="container-fluid">

        {/* LOGO */}
        <Link
          className="navbar-brand"
          to="/"
          onClick={fecharMenu}
        >
          <img src={logo} alt="Logo da empresa" />
        </Link>

        {/* MENU MOBILE */}
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

          {/* MENU PRINCIPAL */}
          <ul className="navbar-nav mx-auto">

            {menuLabel.map((menu) => (

              <li
                key={menu.nome}
                className={`nav-item ${
                  menu.dropdown ? "dropdown" : ""
                }`}
              >

                {menu.dropdown ? (
                  <>
                    <button
                      className={`nav-link dropdown-toggle ${
                        menuAberto === menu.nome ? "show" : ""
                      }`}
                      type="button"
                      aria-expanded={menuAberto === menu.nome}
                      aria-haspopup="true"
                      onClick={() => alternarMenu(menu.nome)}
                    >
                      {menu.nome}
                    </button>

                    <ul
                      className={`dropdown-menu ${
                        menuAberto === menu.nome ? "show" : ""
                      }`}
                    >
                      {menu.submenu.map((sub) => (
                        <li key={sub.nome}>
                          <Link
                            className="dropdown-item"
                            to={sub.link}
                            onClick={fecharMenu}
                          >
                            {sub.nome}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </>
                ) : (
                  <Link
                    className="nav-link"
                    to={menu.link}
                    onClick={fecharMenu}
                  >
                    {menu.nome}
                  </Link>
                )}

              </li>
            ))}

          </ul>

          {/* IDIOMAS E LOGIN */}
          <div className="menu-acoes d-flex align-items-center">

            <div className="menu-idiomas d-flex align-items-center">
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

            <div className="menu-login">
              <Link
                to="/login"
                className="btn-login"
                title="Acessar minha conta"
                onClick={fecharMenu}
              >
                <i
                  className="bi bi-person-circle"
                  aria-hidden="true"
                ></i>
                <span>Login</span>
              </Link>
            </div>

          </div>

        </div>
      </div>
    </nav>
  );
}
