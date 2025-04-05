import { useEffect, useState } from "react";
import { fetchAllMembers } from "../sanity/membersServices";


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
      <section>
        {medlem.map((person) => (
          <article
            key={person._id}
           >
            <img
              src={person.image?.asset?.url}
              alt={person.medlemsnavn}
            />
            <h3>{person.medlemsnavn}</h3>
            <p>{person.epost}</p>
          </article>
        ))}
      </section>
    </>
    );
}