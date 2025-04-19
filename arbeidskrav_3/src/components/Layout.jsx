/*import { children } from "react";*/
import { Link } from "react-router-dom";
import "../styles/layout.scss"

export default function Layout({children}){
    
    
    return(
        <>       
         <header className="header-content">
            <h1><Link to="/">Niko&Kris</Link></h1>
            <nav>
                <ul>
                    <li><button><Link to="/">Hjem</Link></button></li>
                    <li><button><Link to="/profiler1">Peter</Link></button></li>
                    <li><button><Link to= "/profiler0">Kristoffer</Link></button></li>
                    <li><button><Link to="/profiler2">Nikolai</Link></button></li>
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