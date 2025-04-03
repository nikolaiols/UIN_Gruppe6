import SanityClientConstructor from "@sanity/client";

export const client = SanityClientConstructor({
    projectId: "dlvjcxmf",
    dataset: "production",
    apiVersion: "v2025-04-03",
    useCdn: false
})