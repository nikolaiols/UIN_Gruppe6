import {createClient} from "@sanity/client";

export const client = createClient({
    projectId: "dlvjcxmf",
    dataset: "production",
    apiVersion: "v2025-04-03",
    useCdn: false
})