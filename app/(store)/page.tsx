import { getProducts } from "@/data/products";
import FilterProducts from "@/components/store/filter-products";

export default async function MainPage() {
    const products = await getProducts(true);

    return (
        <div className="grid lg:max-w-7xl lg:mx-auto lg:grid-cols-4 p-4 gap-6">
            <FilterProducts products={products} />
        </div>
    )
}