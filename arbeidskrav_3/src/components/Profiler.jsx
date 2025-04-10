import { useEffect, useState } from "react";
import { fetchAllMembers } from "../sanity/membersServices";
import value from "../components/Layout"

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
        </>
    )

}