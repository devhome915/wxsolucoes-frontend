import { Link } from "react-router";
export function Noticias(){

    return(
        <div className="noticias">
            <div className="noticias-title">
                <h3>Notícia</h3>
                <p>A versão 25, atualização 2, já está disponível</p>
            </div>
            <div className="download-noticias d-flex flex-column">
                <Link to="/Programas" className="text-dark text-decoration-none">
                     Leia mais <i class="fa fa-plus-circle"></i>
                </Link>
                <Link to="/Programas" className="text-dark text-decoration-none">
                     Download <i class="fa fa-cloud-download"></i>
                </Link>
            </div>
        </div>
    )
}