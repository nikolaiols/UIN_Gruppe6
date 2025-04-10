/*import { children } from "react";*/
import { Link } from "react-router-dom";
import "../styles/layout.scss"

export const handleClick = (e) => {
    const value = e.target.innerText;
    console.log("Verdi fra knapp:", value)
    return value
  };

export default function Layout({children}){
    
    
    return(
        <>       
         <header className="header-content">
            <h1><Link to="/">GRUPPENAVN</Link></h1>
            <nav>
                <ul>
                    <li><button onClick={handleClick}><Link to="/">Hjem</Link></button></li>
                    <li><button onClick={handleClick}><Link to="/profiler">Asrin</Link></button></li>
                    <li><button onClick={handleClick}><Link to="/profiler1">Kristoffer</Link></button></li>
                    <li><button onClick={handleClick}><Link to="/profiler2">Nikolai</Link></button></li>
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