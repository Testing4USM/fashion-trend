import { getProducts } from "@/data/products";
import FilterProducts from "@/components/store/filter-products";
import getCategories from "@/data/categories";

export default async function MainPage() {
    const products = await getProducts(true);
    const categories = await getCategories();

    return (
        <div className="grid lg:max-w-7xl lg:mx-auto lg:grid-cols-4 p-4 gap-6">
            <FilterProducts products={products} categories={categories} />
        </div>
    )
}