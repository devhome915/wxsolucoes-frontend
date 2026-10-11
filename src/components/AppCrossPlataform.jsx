import { Link } from "react-router"

export function AppCrossPlataform(){
    return(
        <div className="app-cross-plataform d-flex">
            <div className="container">
                <h3 className="display">Seus aplicativos Cross-plataform (nativo)</h3>
                <h4 className="text-light">Um código, mesma interface, mesmos relatórios ... para todas as plataformas de destino.</h4>
                <p>Graças ao WINDEV, WEBDEV e WINDEV Mobile, o mesmo aplicativo de origem é executado nativamente no Windows, Linux, Android, iOS, Windows 10 Iot, Internet, SaaS e muito mais.</p>

                <Link className="text-warning">
                    <p>Consulte Mais informação</p>
                </Link>
            </div>
        </div>
    )
}