"use client";

import { Product as ProductType } from "@prisma/client"
import Image from "next/image";

import { CardDescription, CardHeader, CardTitle, CardContent, Card, CardFooter } from "@/components/ui/card";
import { formatCurrency } from "@/lib/utils";
import { Button } from "../ui/button";
import { useContext } from "react";
import { CartContext } from "@/contexts/cart-context";
import { PlusIcon } from "lucide-react";
import Link from "next/link";

type ProductProps = {
    product: ProductType;
}

export default function Product({ product }: ProductProps) {
    const { addToCart, isItemInCart, getQuantity } = useContext(CartContext);

    return (
        <Link href={`/productos/${product.id}`}>
            <Card className="h-fit">
                <CardHeader>
                    <Image
                        src={`/products/${product.image}`}
                        alt={product.name}
                        width={200}
                        height={200}
                        className="object-contain w-full h-48"
                    />
                </CardHeader>
                <CardContent className="bg-muted/40 py-4 flex flex-col gap-2 justify-between">
                    <CardTitle className="line-clamp-1">{product.name}</CardTitle>
                    <CardDescription className="text-lg flex-1">{formatCurrency(product.price)}</CardDescription>
                    <Button
                        variant="outline"
                        onClick={() => {
                            addToCart(product);
                        }}
                    >
                        <PlusIcon className="mr-2 h-4 w-4" />
                        {
                            isItemInCart(product) ? `${getQuantity(product)} en el carro` : "Añadir al carrito"
                        }
                    </Button>
                </CardContent>
            </Card>
        </Link>
    )
}