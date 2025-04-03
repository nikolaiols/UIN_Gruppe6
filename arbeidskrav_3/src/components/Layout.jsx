/*import { children } from "react";*/
import { Link } from "react-router-dom";
import "../styles/layout.scss"

export default function Layout({children}){
    return(
        <>       
         <header className="header-content">
            <h1><Link to="/">GRUPPENAVN</Link></h1>
            <nav>
                <ul>
                    <li><button><Link to="/">Hjem</Link></button></li>
                    <li><button><Link to="/asrin">Asrin</Link></button></li>
                    <li><button><Link to="/kristoffer">Kristoffer</Link></button></li>
                    <li><button><Link to="/nikolai">Nikolai</Link></button></li>
                </ul>
            </nav>
        </header>
        <main>
        {children}
        </main>
        <footer>
        footer!
        </footer>
        </>

    );
}