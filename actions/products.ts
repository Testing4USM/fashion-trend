"use server";

import { slugify } from "@/lib/utils";
import prisma from "@/prisma";
import { ProductSchema } from "@/schemas";
import { Status } from "@prisma/client";
import { revalidatePath } from "next/cache";
import * as z from "zod";

export async function createProduct(values: z.infer<typeof ProductSchema>) {
    const { name, price, description, stock, image, category } = values;
    const slug = name.toLowerCase().replace(/\s/g, "-");

    let status = {
        error: false,
        message: "¡Producto creado con éxito!",
    }

    try {
        // Buscar o crear la categoría
        const categoryRecord = await prisma.category.upsert({
            where: { slug: slugify(category!) },
            update: {},
            create: {
                name: category!,
                slug: slugify(category!),
            },
        });

        await prisma.product.create({
            data: {
                name,
                price,
                description,
                stock,
                image,
                categoryId: categoryRecord.id,
                slug,
            },
        });
    } catch (error) {
        console.error("Error al crear el producto:", error);
        status = {
            error: true,
            message: "¡Hubo un error al crear el producto!",
        };
    }

    revalidatePath("/panel/productos");

    return status;
}

export async function saveProduct(id: string, formData: FormData) {
    let status = {
        error: false,
        message: "¡Producto actualizado con éxito!",
    }

    const slug = slugify(formData.get("name") as string);

    const data = {
        name: formData.get("name") as string,
        price: Number(formData.get("price")) as number,
        description: formData.get("description") as string,
        stock: Number(formData.get("stock")) as number,
        color: formData.get("color") as string,
        size: formData.get("size") as string,
        status: formData.get("status") as Status,
        slug,
        categoryId: formData.get("category") as string, // Asegúrate de que esto esté alineado con tu modelo
    }

    try {
        await prisma.product.update({
            where: {
                id,
            },
            data: {
                ...data
            },
        });
    } catch (error) {
        status = {
            error: true,
            message: "¡Hubo un error al actualizar el producto!",
        }

        console.log(error);
    }

    revalidatePath(`/panel/productos/${id}`);
    revalidatePath("/panel/productos");
    revalidatePath("/");

    return status;
}

export const deleteProduct = async (id: string) => {
    let status = {
        error: false,
        message: "¡Producto eliminado con éxito!",
    }

    try {
        await prisma.product.delete({
            where: {
                id,
            },
        });
    } catch (error) {
        status = {
            error: true,
            message: "¡Hubo un error al eliminar el producto!",
        }
    }

    revalidatePath("/panel/productos");
    revalidatePath("/");

    return status;
}
