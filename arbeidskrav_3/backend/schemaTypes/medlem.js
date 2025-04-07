export const medlem ={
    name: "medlem",
    title: "Medlem",
    type: "document",
    fields:[
        {
            name: "medlemsnavn",
            title: "Medlemsnavn",
            type: "string"
        },
        {
            name: "image",
            title: "Bilde",
            type: "image"
        },
        {
            name: "epost",
            title: "E-post",
            type: "string"
        },
        {
            name: "loggforing",
            title: "Loggforing",
            type: "text"
        },
        {
            name: "interesser",
            title: "Interesser",
            type: "array",
            of: [{ type: "string" }],
        }

    ]
     
}
