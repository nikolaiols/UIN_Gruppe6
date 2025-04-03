import { client } from "./client"

export async function fetchAllMembers() {
    const data = await client.fetch(`*[_type == "medlem"]{
        _id,
        medlemsnavn,
        loggforing,
        epost,
        image
        }`);
        return data;
}