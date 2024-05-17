import { getProducts } from "@/data/products";
import FilterProducts from "@/components/store/filter-products";

export default async function MainPage() {
    const products = await getProducts(true);

    return (
        <div className="grid max-w-7xl mx-auto xl:grid-cols-4 p-4 gap-6">
            <FilterProducts products={products} />
        </div>
    )
}