import { useEffect, useState } from "react";
import { fetchMemberByName } from "../sanity/membersServices";

export default function Kristoffer() {
  const [person, setPerson] = useState(null);

  useEffect(() => {
    const getMember = async () => {
      const data = await fetchMemberByName("Kristoffer"); 
      setPerson(data);
    };
    getMember();
  }, []);

  if (!person) return <h2>Laster Kristoffer sin side...</h2>;

  return (
    <div className="personlig-side">
      <img src={person.image?.asset?.url} alt={person.medlemsnavn} />
      <h2>{person.medlemsnavn}</h2>
      <p>{person.beskrivelse}</p>
      <h3>Interesser</h3>
      <ul>
        {person.interesser?.map((interesse, i) => (
          <li key={i}>{interesse}</li>
        ))}
      </ul>
    </div>
  );
}