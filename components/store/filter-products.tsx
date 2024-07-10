"use client"

import { Category, Product } from "@prisma/client";

import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import Products from "@/components/store/products";
import { useMemo, useState } from "react";
import { RadioColor, RadioColorGroup } from "./radio-color";
import { RadioSize, RadioSizeGroup } from "./size-radio";
import { Button } from "../ui/button";
import { Checkbox } from "../ui/checkbox";
import { capitalize } from "@/lib/utils";
import { Separator } from "../ui/separator";

type FilterProductsProps = {
    products: Product[];
    categories: Category[];
}

const colors = [
    { name: "Rojo", value: "red", color: "bg-red-500", border: "border-red-500" },
    { name: "Azul", value: "blue", color: "bg-blue-500", border: "border-blue-500" },
    { name: "Verde", value: "green", color: "bg-green-500", border: "border-green-500" },
    { name: "Amarillo", value: "yellow", color: "bg-yellow-500", border: "border-yellow-500" },
]

const sizes = ["xs", "s", "m", "l", "xl", "xxl"];

const categories = ["relojes", "joyas", "ropa", "accesorios"];

export default function FilterProducts({ products }: FilterProductsProps) {
    // Filter states
    const [size, setSize] = useState<string | null>(null);
    const [color, setColor] = useState<string | null>(null);
    const [category, setCategory] = useState<string[] | null>([]);

    const filteredProducts = useMemo(() => {
        let filtered = products;

        if (size) {
            filtered = filtered.filter((product) => product.size === size);
        }

        if (color) {
            filtered = filtered.filter((product) => product.color === color);
        }

        return filtered;
    }, [products, size, color, category]);

    return (
        <>
            <aside>
                <Card>
                    <CardHeader>
                        <CardTitle className="mb-1">Filtros</CardTitle>
                        <Separator />
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="space-y-2">
                            <h2 className="font-bold">Categoría</h2>
                            {
                                categories.map((categoryOption) => (
                                    <div className="items-top flex space-x-2" key={categoryOption}>
                                        <Checkbox
                                            id={categoryOption}
                                            checked={category?.includes(categoryOption)}
                                            onCheckedChange={(checked) => {
                                                setCategory((prev) => {
                                                    if (checked) {
                                                        return [...prev!, categoryOption];
                                                    }

                                                    return prev!.filter((category) => category !== categoryOption);
                                                });
                                            }}
                                        />
                                        <div className="grid gap-1.5 leading-none">
                                            <label
                                                htmlFor={categoryOption}
                                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                            >
                                                {capitalize(categoryOption)}
                                            </label>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                        <Separator />
                        <div className="space-y-2">
                            <h2 className="font-bold">Color</h2>
                            <RadioColorGroup className="flex flex-wrap gap-4" defaultChecked>
                                {
                                    colors.map((colorOption) => (
                                        <RadioColor
                                            key={colorOption.value}
                                            value={colorOption.value}
                                            color={colorOption.color}
                                            className={colorOption.border}
                                            onClick={() => {
                                                if (colorOption.value === color) {
                                                    setColor(null);
                                                    return;
                                                }
                                                setColor(colorOption.value);
                                            }}
                                            checked={colorOption.value === color}
                                        />
                                    ))
                                }
                            </RadioColorGroup>
                        </div>
                        <Separator />
                        <div className="space-y-2">
                            <h2 className="font-bold">Talla</h2>
                            <RadioSizeGroup className="flex flex-wrap gap-4" defaultChecked>
                                {
                                    sizes.map((sizeOption) => (
                                        <RadioSize
                                            key={sizeOption}
                                            value={sizeOption}
                                            className="border-gray-500"
                                            onClick={() => {
                                                if (sizeOption === size) {
                                                    setSize(null);
                                                    return;
                                                }
                                                setSize(sizeOption);
                                            }}
                                            checked={sizeOption === size}
                                        >
                                            {sizeOption}
                                        </RadioSize>
                                    ))
                                }
                            </RadioSizeGroup>
                        </div>
                    </CardContent>
                </Card>
            </aside>
            <Products products={filteredProducts} />
        </>
    )
}