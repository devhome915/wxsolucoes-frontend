
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
      // Cross-plataform application
      { nome: "WINDEV", link: "/windev" },
      { nome: "WEBDEV", link: "/webdev" },
      { nome: "WINDEV Mobile", link: "/windevmobile" },
      { nome: "W.A.S.", link: "/was" },
      { nome: "Novos recursos da versão 25", link: "/news" },
      { nome: "Novos recursos da versão 26", link: "https://pcsoft.fr/annonce26/index.html" },
      { nome: "WDMSG", link: "/wdmsg" },
      { nome: "HFSQL", link: "/hfsql" },
      { nome: "Relatórios e consultas", link: "/wxreport" },
      { nome: "Nuvem", link: "https://pcscloud.net/UK/INDEX.awp" },
      { nome: "Hospedagem Serverwx", link: "/serverwx" },
      { nome: "Wx Datawave Driver Nativo", link: "/wxdatawave" },

      // Descobrir
      { nome: "Depoimentos", link: "/testemunhos" },
      { nome: "Documentação", link: "/docs" },
      { nome: "Help completo", link: "https://help.windev.com" },
      { nome: "Facebook", link: "https://www.facebook.com/WX-Solu%C3%A7%C3%B5es-111664987076678/" },

      // Exemplos
      { nome: "Repositório de exemplos", link: "https://depot.pcsoft.fr/" },

      // Drivers nativos DB
      { nome: "Drivers nativos DB", link: "https://windev.com/nativeconnectors/clientserver.htm" },
      { nome: "AS/400 e IBM", link: "https://windev.com/nativeconnectors/as400.htm" },
      { nome: "Oracle", link: "https://windev.com/nativeconnectors/ANOracle.htm" },
      { nome: "SQL Server", link: "https://windev.com/nativeconnectors/ANSQLServer.htm" },
      { nome: "DB2", link: "https://windev.com/nativeconnectors/ANDB2.htm" },
      { nome: "MySQL", link: "https://windev.com/nativeconnectors/ANMySQL.htm" },
      { nome: "Informix", link: "https://windev.com/nativeconnectors/ANInformix.htm" },
      { nome: "PostgreSQL", link: "https://windev.com/nativeconnectors/ANPostgreSQL.htm" },
      { nome: "Progress", link: "https://windev.com/nativeconnectors/ANProgress.htm" },
      { nome: "Sybase", link: "https://windev.com/nativeconnectors/ANSybase.htm" },
      { nome: "xBase", link: "https://windev.com/nativeconnectors/ANxBase.htm" },
      { nome: "SQLite", link: "https://windev.com/nativeconnectors/ANSQLite.htm" },
      { nome: "Access", link: "https://windev.com/nativeconnectors/ANAccess.htm" },
      { nome: "MariaDB", link: "https://windev.com/nativeconnectors/ANMariaDB.htm" }
    ]
  },

  {
    nome: "Help",
    link: "https://help.windev.com",
    dropdown: false
  },

  {
    nome: "Baixar",
    link: "/baixar",
    dropdown: true,
    submenu: [
      // Versão Express
      { nome: "WINDEV Express", link: "https://windev.com/windev/WD-Express.htm" },
      { nome: "WINDEV Mobile Express", link: "https://windev.com/windevmobile/WM-Express.htm" },

      // Centro de downloads
      { nome: "Sequencia de Instalação", link: "https://forum.pcsoft.fr/fr-FR/pcsoft.br.windev/3512-ordem-instalacao-pacote/read.awp" },
      { nome: "FTP", link: "ftp://ftp.pcsoft.fr" },
      { nome: "Principais Links", link: "https://forum.pcsoft.fr/fr-FR/pcsoft.br.windev/3502-principais-links-para-estudo/read.awp" },
      { nome: "Versão 26 FR", link: "https://pcsoft.fr/st/telec/index.html" },
      { nome: "Versão 25 US", link: "https://windev.com/ts/download" },
      { nome: "Versão 25 FR", link: "https://www.pcsoft.fr/st/telec/index.html" },
      { nome: "Versão 24", link: "https://windev.com/ts/download/index.html" },
      { nome: "Download HFSQL", link: "/hfsql" },

      // Recursos
      { nome: "Imagens redistribuíveis", link: "https://windev.com/pcsoft/visuals.html" },
      { nome: "Repositório", link: "https://repository.windev.com/" },
      { nome: "Downloads", link: "https://windev.com/ts/download/index.html" },
      { nome: "Pack de Correções", link: "https://stg.webdev.info/publicationSt_WEB/FR/miseajourst.awp" },
      { nome: "FAQ", link: "https://faq.windev.com/" },
      { nome: "DRIVER DOUNGLES", link: "https://repository.windev.com/resource.awp?file_id=281474976710836;install-driver-doungle-new-version" },

      // Download PostgreSQL
      { nome: "Driver para a versão 20", link: "http://wxsolucoes.com.br/PostgreSQL/v20.zip" },
      { nome: "Driver para a versão 21", link: "http://wxsolucoes.com.br/PostgreSQL/v21.zip" },
      { nome: "Driver para a versão 22", link: "http://wxsolucoes.com.br/PostgreSQL/v22.zip" },
      { nome: "Driver para a versão 23", link: "http://wxsolucoes.com.br/PostgreSQL/v23.zip" },
      { nome: "Driver para a versão 24", link: "http://wxsolucoes.com.br/PostgreSQL/v24.zip" },
      { nome: "Driver para a versão 25", link: "http://wxsolucoes.com.br/PostgreSQL/v25.zip" },
      { nome: "Download PostgreSQL", link: "https://www.enterprisedb.com/downloads/postgres-postgresql-downloads" },
      { nome: "Driver/Lib PostgreSQL", link: "https://repository.windev.com/resource.awp?file_id=281474976710821;libpqdll-free-biblioteca-lib-postgresql" }
    ]
  },

  {
    nome: "Suporte técnico",
    link: "/suporte",
    dropdown: true,
    submenu: [
      // Nossos serviços
      { nome: "Suporte técnico", link: "/suporte" },
      { nome: "Assistência Direta", link: "/ad" },
      { nome: "Consultoria via videoconferência", link: "/consultoria" },

      // Comunidade / Ajuda
      { nome: "Ajuda online para produtos", link: "https://help.windev.com/en-US/" },
      { nome: "Fóruns", link: "https://forum.pcsoft.fr/en-US/index.awp" },
      { nome: "Fórum Brasil", link: "https://wxdev.com.br/forum/" },
      { nome: "Perguntas frequentes", link: "https://faq.windev.com/" },
      { nome: "Repositório", link: "https://repository.windev.com/" },

      // Grupos do Skype e WhatsApp
      { nome: "Skype - WX Soluções", link: "https://join.skype.com/EwmFbeRCFBlE" },
      { nome: "Skype - WINDEV", link: "https://join.skype.com/yLcU9ZAWcx9i" },
      { nome: "Skype - WEBDEV", link: "https://join.skype.com/wwMAbduXFBAe" },
      { nome: "Skype - WINDEV Mobile", link: "https://join.skype.com/zUBldCVUmDMf" },
      { nome: "Skype - HFSQL", link: "https://join.skype.com/BnIBfbZzWlTA" },
      { nome: "Skype - PostgreSQL", link: "https://join.skype.com/AC0EYSmCGcQo" },
      { nome: "WhatsApp", link: "https://chat.whatsapp.com/IMJQF8wZRvmJTUgQQVF0s6" }
    ]
  },

  {
    nome: "Treinamento",
    link: "/treinamento",
    dropdown: true,
    submenu: [
      // Treine seus desenvolvedores
      { nome: "Treinamento no local", link: "https://windev.com/training/in-house-training-sessions.html" },
      { nome: "Consultoria via videoconferência", link: "/consultoria" },

      // Instituições educacionais
      { nome: "Instituições educacionais", link: "/universidades" },
      { nome: "Versão Express (grátis)", link: "https://windev.com/windev/WD-Express.htm" },
      { nome: "Vídeos sobre WINDEV", link: "https://www.youtube.com/results?search_query=windev" },
      { nome: "Vídeos sobre WEBDEV", link: "https://www.youtube.com/results?search_query=webdev" },
      { nome: "Vídeos sobre WINDEV Mobile", link: "https://www.youtube.com/results?search_query=windev%20mobile" },
      { nome: "Fórum Oficial", link: "https://forum.pcsoft.fr" },
      { nome: "Fórum da Comunidade Brasileira", link: "https://wxdev.com.br/forum/" },

      // Video Aulas
      { nome: "Vídeos Prof Adriano", link: "https://www.youtube.com/user/Bollerzito/videos" },
      { nome: "Vídeos Prof Neri - WINDEV", link: "https://www.youtube.com/watch?v=4PGdQ2LWgf4&list=PLGFfUAt_pphJDLr6gTZB9Cg9tOJPDHX_Y" },
      { nome: "Vídeos Prof Neri - WEBDEV", link: "https://www.youtube.com/watch?v=2sIbCj60tKY&list=PLGFfUAt_pphKH_G-9PXnl-daV6PFFMZ9M" },
      { nome: "Vídeos Prof Neri - WINDEV Mobile", link: "https://www.youtube.com/watch?v=fsMg8n-foYo&list=PLGFfUAt_pphIEoQvriGXAE6i9899ly9Qc" },
      { nome: "Vídeos Prof Amarildo", link: "https://www.youtube.com/c/AmarildoMatos_windev/videos" },
      { nome: "Vídeos Prof Pedroso", link: "https://www.youtube.com/channel/UCv_gTQKDjNL3J6lztF9Mr8Q/videos" },

      // Blogs e tutoriais
      { nome: "Blog Prof Pedroso", link: "http://pedrosoinformatica.com.br/" },
      { nome: "Blog Prof Amarildo Mattos", link: "http://windevdesenvolvimento.blogspot.com/" },
      { nome: "Blog Prof Leonardo Vilani", link: "http://leonardo-vilani.blogspot.com/" },
      { nome: "Caminho das Pedras", link: "https://www.youtube.com/watch?v=fdAatkgyFLU&list=PLRw3IoCVHhYq1IyKz-WfqzMFan1bkw3o5" },
      { nome: "WAS Vídeos Tutoriais", link: "https://www.youtube.com/watch?v=8AU3dFqlkmI&list=PLRw3IoCVHhYpwbm29T-S9sUIoNIOI40Gd" },
      { nome: "WAS Manual Step by Step", link: "https://forum.pcsoft.fr/fr-FR/pcsoft.br.windev/443-was-webdev-aplicativo-server-1652/read.awp?hl=was,tutorial" },
      { nome: "Webservices", link: "https://www.youtube.com/watch?v=b2Yy5Kii7eA&list=PLRw3IoCVHhYpnypbpJEN8UJDMDjuOT-Ou" },
      { nome: "WINDEV", link: "https://www.youtube.com/watch?v=2AWKEms3oEw&list=PLRw3IoCVHhYqrIQOLOK5zyWESb87FiD6i" },
      { nome: "WEBDEV", link: "https://www.youtube.com/watch?v=2AWKEms3oEw&list=PLRw3IoCVHhYqrIQOLOK5zyWESb87FiD6i" },
      { nome: "WINDEV Mobile", link: "https://www.youtube.com/watch?v=lv7P2Gcyhxc&list=PLRw3IoCVHhYq4zP7WiFWoaoUxAcBS8Bd8" },
      { nome: "Tutoriais PCSOFT", link: "https://www.youtube.com/user/PCSOFTdotFR/videos" }
    ]
  },

  {
    nome: "Informações",
    link: "/info",
    dropdown: true,
    submenu: [
      // Encontrar informação
      { nome: "Fórum BR", link: "https://help.windev.com/" },
      { nome: "FAQ", link: "https://faq.windev.com/" },
      { nome: "Blog PCSOFT", link: "https://blogs.windev.com/FR/?lang=us" },
      { nome: "Repositório de Exemplos", link: "https://repository.windev.com/" },
      { nome: "Fórum PCSOFT", link: "https://forum.windev.com/" },
      { nome: "Fórum Oficial BR", link: "https://forum.pcsoft.fr/en-US/pcsoft.br.windev/page/1.awp" },
      { nome: "Fórum WXDEV BR", link: "https://wxdev.com.br/forum/" },
      { nome: "Mapa do site", link: "https://windev.com/sitemap.htm" },

      // Entrar em contato
      { nome: "Fale Conosco", link: "/contatos" },
      { nome: "Intranet WX Soluções", link: "/intranetwx" },
      { nome: "Acesso do Cliente", link: "/login" },
      { nome: "Orçamentos/Cotações", link: "/orcamentos" },
      { nome: "Pedido", link: "/pedido" },
      { nome: "Sobre a PCSOFT", link: "https://www.pcsoft.fr/pcsoft/pcsoft.htm" }
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
