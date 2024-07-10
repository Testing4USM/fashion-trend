import prisma from "@/prisma";

export default async function getCategories() {
    const query = await prisma.category.findMany();
    return query;
}