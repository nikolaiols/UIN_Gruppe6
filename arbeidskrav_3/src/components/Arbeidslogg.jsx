import { useEffect, useState } from "react";
import { client } from "../sanity/client"; 
import Loggforing from "./Loggforing";
import '../styles/arbeidslogg.scss'; 

const Arbeidslogg = ({ filterNavn }) => {
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
            dato
          }
        }
      `)
      .then((data) => {
        const poster = data.flatMap((medlem) =>
          (medlem.loggforinger || []).map((logg) => ({
            navn: medlem.medlemsnavn,
            tekst: logg.tekst,
            timer: logg.timer,
            dato: logg.dato,
            id: medlem._id,
          }))
        );

        const filtrertePoster = filterNavn
          ? poster.filter((logg) => logg.navn === filterNavn)
          : poster;

        setLoggposter(filtrertePoster);
      });
  }, [filterNavn]);

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