
import EditFormProduct from "@/components/products/edit-form-product";
import { getCategories, getProductById } from "@/data/products";
import { notFound } from "next/navigation";


export default async function ProductPage({ params }: { params: { id: string } }) {
    const id = params.id;
    const product = await getProductById(id);
    const categories = await getCategories();

    if (!product) {
        return notFound();
    }

    return (
        <EditFormProduct product={product} categories={categories} />
    );
}