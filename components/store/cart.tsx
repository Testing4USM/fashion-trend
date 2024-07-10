"use client";

import SheetProvider from "@/components/sheet-provider";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger
} from "../ui/sheet";
import { Button } from "@/components/ui/button";
import { CartContext, ProductWithQuantity } from "@/contexts/cart-context";

import { MinusIcon, PlusIcon, ShoppingCart, TrashIcon } from "lucide-react";
import { useContext, useState } from "react";
import Image from "next/image";
import { formatCurrency } from "@/lib/utils";
import { Badge } from "../ui/badge";

interface ProductQuantityProps {
    product: ProductWithQuantity;
    addToCart: (item: ProductWithQuantity) => void;
    removeFromCart: (item: ProductWithQuantity) => void;
    removeProduct: (item: ProductWithQuantity) => void;
}

function ProductQuantity({ product, addToCart, removeFromCart, removeProduct }: ProductQuantityProps) {
    return (
        <div className="flex flex-col gap-4">
            <div className="flex gap-8 items-start">
                <Image
                    src={`/products/${product.image}`}
                    alt={product.name}
                    width={96}
                    height={0}
                    className="object-contain h-24"
                />
                <div className="flex flex-col">
                    <h3 className="text-primary uppercase">{product.name}</h3>
                    <span className="font-bold">{formatCurrency(product.price)}</span>
                </div>
                <span className="font-bold">{formatCurrency(product.quantity * product.price)}</span>
            </div>
            <div className="flex gap-4 items-center self-start">
                <section className="flex gap-2 items-center bg-gray-950 rounded-full p-2">
                    <Button
                        variant="link"
                        size="icon"
                        onClick={() => removeFromCart(product)}
                    >
                        <MinusIcon size="20" />
                    </Button>
                    <span className="tabular-nums min-w-6 text-center">{product.quantity}</span>
                    <Button
                        variant="link"
                        size="icon"
                        onClick={() => addToCart(product)}
                    >
                        <PlusIcon size="20" />
                    </Button>
                </section>
                <Button
                    size="icon"
                    variant="outline"
                    onClick={() => removeProduct(product)}
                >
                    <TrashIcon size="20" />
                </Button>
            </div>
        </div>
    )
}

export default function Cart() {
    const [open, setOpen] = useState(false);
    const { cartItems, addToCart, removeFromCart, getTotalItems, removeProduct, getCartTotal } = useContext(CartContext);

    return (
        <SheetProvider>
            <Sheet open={open} onOpenChange={setOpen}>
                <SheetTrigger asChild>
                    <Button
                        size="icon"
                        variant="outline"
                        className="self-end relative"
                    >
                        {
                            getTotalItems() > 0 && (
                                <Badge className="absolute -top-2 left-5 rounded-full m-0 py-0 px-1.5 text-[10px] font-bold">
                                    {getTotalItems()}
                                </Badge>
                            )
                        }
                        <ShoppingCart className="size-4" />
                    </Button>
                </SheetTrigger>
                <SheetContent>
                    <SheetHeader className="mb-4">
                        <SheetTitle className="uppercase flex items-center">
                            Carro de compras
                            <span className="ml-2 text-xs text-gray-400">({getTotalItems()} artículos)</span>
                        </SheetTitle>
                    </SheetHeader>
                    {
                        cartItems && cartItems.length > 0 ? (
                            <section className="space-y-16 max-h-[550px] overflow-y-auto">
                                {
                                    cartItems.map((item: ProductWithQuantity) => (
                                        <ProductQuantity 
                                            key={item.id} 
                                            product={item}
                                            addToCart={addToCart}
                                            removeFromCart={removeFromCart}
                                            removeProduct={removeProduct}
                                        />
                                    ))
                                }
                            </section>
                        ) : (
                            <section className="flex justify-center items-center">
                                <p>No hay productos en el carrito</p>
                            </section>
                        )
                    }
                    <SheetFooter>
                        <h3 className="py-4">
                            Subtotal: <span className="font-bold">{formatCurrency(getCartTotal())}</span>
                        </h3>
                    </SheetFooter>
                </SheetContent>
            </Sheet>
        </SheetProvider>
    )
}