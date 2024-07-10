import prisma from "@/prisma";
import { Status } from "@prisma/client";

export async function getProducts(store: boolean = false) {
    let results;

    try {
        results = await prisma.product.findMany({
            include: {
                category: true,
            },
            where: {
                ...store ? { status: "ACTIVE" } : {},
            }
        });
    } catch (error) {
        results = [{
            id: "6fa5b1c1-1b7b-4b3b-8b3b-3b1b7b6fa5b1",
            categoryId: "ea6kfls1cxa",
            slug: "reloj-de-mano",
            name: "Reloj de mano",
            description: "Reloj de mano con correa de cuero",
            status: "ACTIVE" as Status,
            price: 1000,
            stock: 10,
            image: "https://via.placeholder.com/150",
            color: "yellow",
            size: "",
            createdAt: new Date(),
            updatedAt: new Date(),
        },{
            id: "6fa5b1c1-1b7b-4b3b-8b3b-3b1b7b6fa5b2",
            categoryId: "ea6kfls1cxb",
            slug: "reloj-de-mano-2",
            name: "Reloj de bolsa",
            description: "Reloj de mano con correa de cuero",
            status: "ACTIVE" as Status,
            price: 1000,
            stock: 10,
            image: "https://via.placeholder.com/150",
            color: "green",
            size: "xl",
            createdAt: new Date(),
            updatedAt: new Date(),
        
        }]
    }

    return results;
}

export async function getLatestProducts() {
    return await prisma.product.findMany({
        include: {
            category: true,
        },
        orderBy: {
            createdAt: "desc",
        },
        take: 10,
    });
}

export async function getProductById(id: string) {
    return await prisma.product.findUnique({
        where: {
            id,
        },
        include: {
            category: true,
        },
    });
}