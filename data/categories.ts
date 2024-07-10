import prisma from "@/prisma";

const DEFAULT_DATA = [
    {
        id: "ea6kfls1cxa",
        slug: "relojes",
        name: "Relojes",
        createdAt: new Date(),
        updatedAt: new Date(),
    },
    {
        id: "ea6kfls1cxb",
        slug: "joyas",
        name: "Joyas",
        createdAt: new Date(),
        updatedAt: new Date(),
    },
    {
        id: "ea6kfls1cxc",
        slug: "ropa",
        name: "Ropa",
        createdAt: new Date(),
        updatedAt: new Date(),
    },
    {
        id: "ea6kfls1cxd",
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