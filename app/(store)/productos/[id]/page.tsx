import ProductDetail from "@/components/store/product-detail";
import { getProductById } from "@/data/products";
import { notFound } from "next/navigation";

export default async function ProductPage({ params }: { params: { id: string } }) {
    const id = params.id;
    const product = await getProductById(id);

    if (!product) {
        return notFound();
    }

    return (
        <div className="lg:max-w-7xl mx-auto grid lg:grid-cols-3 gap-6">
            <ProductDetail product={product} />
        </div>
    )
}