import { useEffect, useState } from "react";
import { fetchAllMembers } from "../sanity/membersServices";
import value from "../components/Layout"
import Arbeidslogg from "./Arbeidslogg";

export default function Profiler({name}){
    const [medlem, setMedlem] = useState([]);

    const getAllMembers = async () => {
        const data = await fetchAllMembers();
        setMedlem(data);
      };

      useEffect(() => {
        getAllMembers();
      }, []);
      
        const filteredMedlem = medlem.filter((member)=> member.medlemsnavn == name)
        return (
          
           <> 
             <h1>profiler</h1>
            {console.log(medlem.map((m)=>m.medlemsnavn))}
            {console.log(name)}
          <section>
            {filteredMedlem.map((person) => (
              <>
              <article
                key={person._id}
               >
                <img
                  src={person.image?.asset?.url}
                  alt={person.medlemsnavn}
                />
              </article>
              <article>
              <h3>{person.medlemsnavn}</h3>
              <h3>Om meg</h3>
              <p>{person.about}</p>
              </article>
              </>
            ))}
          </section>

          <section className="interesser">
          {filteredMedlem.map((person) => (
<<<<<<< Updated upstream
            <article key={`${person._id} -interesser`}>
=======
<<<<<<< HEAD
            <article key={person._id}>
=======
            <article key={`${person._id} -interesser`}>
>>>>>>> 04be83fbfcaaf0b8c7a2d7c13c256d357866a9c8
>>>>>>> Stashed changes
              <h3>Interesser</h3>
              {person.interesser && person.interesser.length > 0 && (
                <ul>
                  {person.interesser.map((interesse, index) => (
                    <li key={index}>{interesse}</li>
                  ))}
                </ul>
              )}
            </article>
          ))}
        </section>
          <Arbeidslogg />
        </>
    )

}