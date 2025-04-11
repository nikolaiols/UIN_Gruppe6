import { useEffect, useState } from "react";
import { client } from "../sanity/client"; 
import Loggforing from "./Loggforing";
import '../styles/arbeidslogg.scss'; 

const Arbeidslogg = () => {
    const [loggposter, setLoggposter] = useState([]);
  
    useEffect(() => {
      client
        .fetch(`
          *[_type == "medlem"]{
            _id,
             medlemsnavn,
            loggforinger[]{
              tekst,
              timer,
              _createdAt
            }
          }
        `)
        .then((data) => {
          const poster = data.flatMap((medlem) =>
            (medlem.loggforinger || []).map((logg) => ({
              navn: medlem.medlemsnavn,
              tekst: logg.tekst,
              timer: logg.timer,
              dato: logg._createdAt,
              id: medlem._id,
            }))
          );
         
         
          poster.sort((a, b) => new Date(b.dato) - new Date(a.dato));
  
          setLoggposter(poster);
          console.log(poster)
        });
    }, []);
  
    return (
      <section className="arbeidslogg">
        <h2>Arbeidslogg</h2>
        {loggposter.map((logg, i) => (
          <Loggforing
            key={`${logg.id}-${i}`}
            navn={logg.navn}
            tekst={logg.tekst}
            timer={logg.timer}
            dato={logg.dato}
          />
        ))}
      </section>
    );
  };
  
  export default Arbeidslogg;