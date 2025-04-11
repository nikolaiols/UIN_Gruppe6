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
            name: "interesser",
            title: "Interesser",
            type: "array",
            of: [{ type: "string" }],
        },
        {
            name: "loggforinger",
            title: "Loggføringer",
            type: "array",
            of: [
              {
                type: "object",
                fields: [
                  {
                    name: "tekst",
                    title: "Arbeidsoppgave",
                    type: "string",
                  },
                  {
                    name: "timer",
                    title: "Antall timer",
                    type: "number",
                  },
                  {
                    name: "dato",
                    title: "Dato",
                    type: "datetime",
                  }
                ]
              }
            ]
          }

    ]
     
}

