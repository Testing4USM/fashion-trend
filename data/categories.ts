import prisma from "@/prisma";

const DEFAULT_DATA = [
    {
        id: "cly81k5r8000csvrnacucfguz",
        slug: "relojes",
        name: "Relojes",
        createdAt: new Date(),
        updatedAt: new Date(),
    },
    {
        id: "cly7x06vf0000123pfebtz5v6",
        slug: "joyerias",
        name: "Joyerias",
        createdAt: new Date(),
        updatedAt: new Date(),
    },
    {
        id: "cly7x0w7l0001123ppwb01x5g",
        slug: "ropa",
        name: "Ropa",
        createdAt: new Date(),
        updatedAt: new Date(),
    },
    {
        id: "cly87wibm0000jhplgcmbizlp",
        slug: "accesorios",
        name: "Accesorios",
        createdAt: new Date(),
        updatedAt: new Date(),
    },
]

export default async function getCategories() {
    let results = DEFAULT_DATA;

    try {
        results = await prisma.category.findMany();
    } catch (error) {
        results = DEFAULT_DATA;
    }

    return results;
}