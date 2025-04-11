import { client } from "./client"

export async function fetchAllMembers() {
    const data = await client.fetch(`*[_type == "medlem"]{
        _id,
        medlemsnavn,
        loggforing,
        epost,
        image{asset ->{ _id, url }},
        interesser,
        about
        }`);
        
        return data;
}

export const fetchMemberByName = async (name) => {
    const query = `*[_type == "medlem" && medlemsnavn == $name][0]{
      medlemsnavn,
      "image": bilde,
      interesser,
      beskrivelse
    }`;
    return await client.fetch(query, { name });
  };