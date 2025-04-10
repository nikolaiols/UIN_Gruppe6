import { useEffect, useState } from "react";
import { client } from "../sanity/client"; 
import Loggforing from "./Loggforing";

const Arbeidslogg = () => {
    const [loggposter, setLoggposter] = useState([]);
  
    useEffect(() => {
      client
        .fetch(`
          *[_type == "medlemsnavn"]{
            _id,
            navn,
            loggforinger[]{
              tekst,
              timer,
              _createdAt
            }
          }
        `)
        .then((data) => {
          const poster = data.flatMap((medlemsnavn) =>
            (medlem.loggforinger || []).map((logg) => ({
              navn: medlem.navn,
              tekst: logg.tekst,
              timer: logg.timer,
              dato: logg._createdAt,
              id: medlem._id,
            }))
          );
  
         
          poster.sort((a, b) => new Date(b.dato) - new Date(a.dato));
  
          setLoggposter(poster);
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