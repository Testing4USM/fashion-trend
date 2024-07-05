"use client";

import { formatCurrency } from "@/lib/utils";
import { Product } from "@prisma/client";
import Image from "next/image";
import { Button } from "../ui/button";
import { MinusIcon, PlusIcon, ShoppingCart } from "lucide-react";
import { useContext, useState } from "react";
import { CartContext } from "@/contexts/cart-context";

type ProductDetailProps = {
    product: Product;
}

export default function ProductDetail({ product }: ProductDetailProps) {
    const { addProductWithQuantity } = useContext(CartContext);
    const [quantity, setQuantity] = useState(1);

    return (
        <>
            <div className="lg:col-span-2 p-2 border-2 border-primary rounded-sm">
                <Image
                    src={`${product.image}`}
                    alt={product.name}
                    width={200}
                    height={200}
                    className="object-contain w-full h-[450px]"
                />
            </div>
            <div className="space-y-6">
                <h1 className="text-2xl font-semibold uppercase">{product.name}</h1>
                <p className="text-md text-gray-400">{product.description}</p>
                <p className="text-xl font-bold text-primary">{formatCurrency(product.price)}</p>

                <div className="flex gap-4 items-center self-start">
                    <section className="flex gap-2 items-center bg-gray-950 rounded-full p-2">
                        <Button
                            variant="link"
                            size="icon"
                            onClick={() => setQuantity(quantity - 1)}
                        >
                            <MinusIcon size="20" />
                        </Button>
                        <span className="tabular-nums min-w-6 text-center">{quantity}</span>
                        <Button
                            variant="link"
                            size="icon"
                            onClick={() => setQuantity(quantity + 1)}
                        >
                            <PlusIcon size="20" />
                        </Button>
                    </section>
                    <Button
                        variant="outline"
                        onClick={() => addProductWithQuantity(product, quantity)}
                    >
                        <ShoppingCart size="20" className="mr-4" />
                        Añadir al carrito
                    </Button>
                </div>
            </div>
        </>
    )
}