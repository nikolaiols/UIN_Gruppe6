import { useEffect, useState } from "react";
import { fetchAllMembers } from "../sanity/membersServices";
import "../styles/personkort.scss"
import Arbeidslogg from "../components/Arbeidslogg";


export default function Home(){

    const [medlem, setMedlem] = useState([]);

    const getAllMembers = async () => {
        const data = await fetchAllMembers();
        setMedlem(data);
      };

      useEffect(() => {
        getAllMembers();
      }, []);
    return (
        <>
        <h2>Gruppemedlemmer</h2>
      <section >
        {medlem.map((person) => (
          <article 
            key={person._id}
           >
            <img
              src={person.image?.asset?.url}
              alt={person.medlemsnavn}
            />
            <h3>{person.medlemsnavn}</h3>
            <a>{person.epost}</a>
          </article>
        ))}
      </section>
      <Arbeidslogg />
    </>
    );
}