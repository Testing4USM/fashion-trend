import Product from "@/components/store/product";
import { Product as ProductType } from "@prisma/client";
import { useMemo, useState } from "react";

type ProductsProps = {
    products: ProductType[];
}

export default function Products({ products }: ProductsProps) {
    const [sortBy, setSortedBy] = useState<string>("price");

    const sortedProducts = useMemo(() => {
        return products.sort((a, b) => {
            if (sortBy === "price") {
                return a.price - b.price;
            } else if (sortBy === "-price") {
                return b.price - a.price;
            } else if (sortBy === "name") {
                return a.name.localeCompare(b.name);
            } else if (sortBy === "-name") {
                return b.name.localeCompare(a.name);
            }

            return a.name.localeCompare(b.name);
        });
    }, [products, sortBy])

    return (
        <div className="lg:col-span-3">
            {
                sortedProducts.length > 0 ? (
                    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                        {sortedProducts.map((product) => (
                            <Product key={product.id} product={product} />
                        ))}
                    </section>
                ) : (
                    <section className="w-full h-full flex justify-center items-center">
                        <p>¡No hay productos disponibles!</p>
                    </section>
                )
            }
        </div>
    )
}