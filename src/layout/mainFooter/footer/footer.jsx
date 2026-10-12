import "./footerCss/footer.css";


import React from "react";

const footerMenus = [
  [
    {
      titulo: "Home",
      links: []
    },
    {
      titulo: "Programas",
      links: [
        "WINDEV",
        "WEBDEV",
        "WINDEV Mobile",
        "Novos recursos da versão 25",
        "Novos recursos da versão 26",
        "Conectores nativos para bancos de dados",
        "Documentações",
        "Vídeos técnicos",
        "Peça agora!",
        "HFSQL",
        "Nuvem"
      ]
    }
  ],
  [
    {
      titulo: "Suporte técnico",
      links: [
        "Suporte técnico",
        "Assistência Direta",
        "Baixar",
        "Fóruns",
        "Fórum Brasil",
        "Perguntas frequentes",
        "Recursos úteis",
        "Repositório",
        "Ajuda online para os produtos"
      ]
    },
    {
      titulo: "Treinamento",
      links: [
        "Consultando",
        "Assistência Direta",
        "Instituições educacionais"
      ]
    }
  ],
  [
    {
      titulo: "Exemplos",
      links: [
        "Formulário de Pedido",
        "Peça online",
        "Solicite uma estimativa",
        "Baixar",
        "WINDEV Express",
        "WINDEV Mobile Express",
        "Versões 24",
        "Atualizações",
        "Elementos visuais reutilizáveis"
      ]
    },
    {
      titulo: "Política ambiental",
      links: []
    }
  ],
  [
    {
      titulo: "PC SOFT",
      links: [
        "FORUM BR",
        "FAQ",
        "BLOG PCSOFT",
        "Repositório de Exemplos",
        "Fórum PCSOFT",
        "Fórum Oficial BR",
        "Fórum WXDEV BR",
        "Mapa do site",
        "Contate-Nos"
      ]
    },
    {
      titulo: "Contato",
      links: [
        "PC SOFT",
        "Enviar comentários"
      ]
    }
  ]
];

export function Footer() {
  const voltarAoTopo = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <footer className="footer">

      {/* ÁREA DE CONTATO */}
      <div className="footer-contact">
        <div className="container">
          <div className="row justify-content-center align-items-center">

            <div className="col-12 col-lg-7 text-center">
              <h2>Precisa de informações?</h2>

              <p>
                BR +55 (41) 99949 1800 ou WhatsApp
                +554199491800
              </p>

              <a href="mailto:financeirowx@gmail.com">
                financeirowx@gmail.com
              </a>
            </div>

            <div className="col-12 col-lg-3 text-center">
              <a href="tel:+5541999491800" className="footer-call">
                <span>☎</span> Ser chamado
              </a>
            </div>

          </div>
        </div>
      </div>

      {/* ÁREA DE LINKS */}
      <div className="footer-links">
        <div className="container">

          <div className="row g-4">

            {footerMenus.map((coluna, index) => (
              <div
                className="col-12 col-sm-6 col-lg-3"
                key={index}
              >

                {coluna.map((grupo, grupoIndex) => (
                  <div
                    className="footer-menu-group"
                    key={grupoIndex}
                  >

                    <h5>{grupo.titulo}</h5>

                    <ul>
                      {grupo.links.map((link, linkIndex) => (
                        <li key={linkIndex}>
                          <a href="#">
                            {link}
                          </a>
                        </li>
                      ))}
                    </ul>

                  </div>
                ))}

              </div>
            ))}

          </div>

          <div className="footer-social">
            <span>PC WORLD, Revista Computador, ...</span>

            <div>
              <a href="#">YouTube</a>
              <a href="#">Enviar para um amigo</a>
            </div>
          </div>

        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="footer-bottom">
        <div className="container text-center">
          <p>
            Marcas Registradas Copyright © 2026 PC SOFT.
            Todos os direitos reservados.
          </p>
        </div>

        <button
          type="button"
          className="footer-top"
          onClick={voltarAoTopo}
          aria-label="Voltar ao topo"
        >
          ↑
        </button>
      </div>

    </footer>
  );
}


