"use client";

import { Product } from "@prisma/client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CardContent, CardDescription, CardHeader, CardTitle, Card, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { ChevronLeft, PlusCircle, Save, Trash, Upload } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { RadioColor, RadioColorGroup } from "@/components/store/radio-color";
import { RadioSize, RadioSizeGroup } from "@/components/store/size-radio";
import { saveProduct } from "@/actions/products";
import { toast } from "sonner";
import { useState, useEffect } from "react";

const colors = [
    { name: "Rojo", value: "red", color: "bg-red-500", border: "border-red-500" },
    { name: "Azul", value: "blue", color: "bg-blue-500", border: "border-blue-500" },
    { name: "Verde", value: "green", color: "bg-green-500", border: "border-green-500" },
    { name: "Amarillo", value: "yellow", color: "bg-yellow-500", border: "border-yellow-500" },
]

const sizes = ["xs", "s", "m", "l", "xl", "xxl"];

type Category = {
    label: string;
    value: string;
}

type EditFormProductProps = {
    product: Product;
    categories: Category[];
}

export default function EditFormProduct({ product, categories }: EditFormProductProps) {
    const [pending, setPending] = useState(false);

    return (
        <form className="mx-auto grid max-w-[59rem] flex-1 auto-rows-maxx gap-4" action={async (formData: FormData) => {
            setPending(true);
            const result = await saveProduct(product.id, formData);

            if (result.error) {
                return toast.error(result.message);
            }

            setPending(false);
            toast.success(result.message);
        }}>
            <div className="flex items-center gap-4">
                <Button variant="outline" size="icon" className="size-7" asChild>
                    <Link href="/panel/productos">
                        <ChevronLeft className="size-4" />
                        <span className="sr-only">Volver</span>
                    </Link>
                </Button>
                <h1 className="flex-1 shrink-0 whitespace-nowrap text-xl font-semibold tracking-tight sm:grow-0">
                    {product.name}
                </h1>
                <Badge variant="outline" className="ml-auto sm:ml-0">
                    {
                        product.stock === 0
                            ? "Sin stock"
                            : product.stock === 1
                                ? "Última unidad"
                                : `${product.stock} unidades`
                    }
                </Badge>
                <div className="hidden items-center gap-2 md:ml-auto md:flex">
                    <Button size="sm" type="submit" className="bg-blue-900 hover:bg-blue-800" disabled={pending}>
                        <Save className="h-4 w-4 mr-2" />
                        Guardar producto
                    </Button>
                </div>
            </div>
            <div className="grid gap-4 md:grid-cols-[1fr_250px] lg:grid-cols-3 lg:gap-8">
                <div className="grid auto-rows-max items-start gap-4 lg:col-span-2 lg:gap-8">
                    <Card>
                        <CardHeader>
                            <CardTitle>Detalles del producto</CardTitle>
                            <CardDescription>
                                A continuación se encuentran algunos detalles de configuración del producto actual.
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="grid gap-6">
                                <div className="grid gap-3">
                                    <Label htmlFor="name">Nombre</Label>
                                    <Input
                                        id="name"
                                        name="name"
                                        type="text"
                                        className="w-full"
                                        defaultValue={product.name}
                                    />
                                </div>
                                <div className="grid gap-3">
                                    <Label htmlFor="description">Descripcion</Label>
                                    <Textarea
                                        id="description"
                                        name="description"
                                        defaultValue={product.description}
                                        className="min-h-32 resize-none"
                                    />
                                </div>
                                <div className="grid gap-3">
                                    <Label htmlFor="price">Precio</Label>
                                    <Input
                                        id="price"
                                        name="price"
                                        type="number"
                                        className="w-full"
                                        defaultValue={product.price ?? 0}
                                    />
                                </div>
                                <div className="grid gap-3">
                                    <Label htmlFor="stock">Disponibilidad</Label>
                                    <Input
                                        id="stock"
                                        name="stock"
                                        type="number"
                                        className="w-full"
                                        defaultValue={product.stock ?? 0}
                                    />
                                </div>
                                <div className="grid gap-3">
                                    <Label htmlFor="category">Categoría</Label>
                                    <Select name="category" defaultValue={product.categoryId}>
                                        <SelectTrigger aria-label="Selecciona una categoría">
                                            <SelectValue placeholder="Selecciona una categoría" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            {/* Aquí debes cargar las categorías desde tu base de datos */}
                                            {categories.map((cat) => (
                                                <SelectItem key={cat.value} value={cat.value}>
                                                    {cat.label}
                                                </SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
                <div className="grid auto-rows-max items-start gap-4 lg:gap-8">
                    <Card>
                        <CardHeader>
                            <CardTitle>Estado del producto</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="grid gap-6">
                                <div className="grid gap-3">
                                    <Select name="status" defaultValue={product.status ?? "DRAFT"}>
                                        <SelectTrigger id="status" aria-label="Selecciona un estado">
                                            <SelectValue placeholder="Selecciona un estado" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="DRAFT">Borrador</SelectItem>
                                            <SelectItem value="ACTIVE">Activo</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                    <Card
                        className="overflow-hidden"
                    >
                        <CardHeader>
                            <CardTitle>Adicionales</CardTitle>
                            <CardDescription>
                                Elige la talla y/o color del producto.
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-8">
                            <div className="grid gap-4">
                                <Label htmlFor="color">Color</Label>
                                <RadioColorGroup id="color" name="color" className="flex flex-wrap gap-4" defaultValue={product.color ?? ""}>
                                    {
                                        colors.map((colorOption) => (
                                            <RadioColor
                                                key={colorOption.value}
                                                value={colorOption.value}
                                                color={colorOption.color}
                                                className={colorOption.border}
                                            />
                                        ))
                                    }
                                </RadioColorGroup>
                            </div>
                            <div className="grid gap-4">
                                <Label htmlFor="size">Talla</Label>
                                <RadioSizeGroup id="size" name="size" className="flex flex-wrap gap-4" defaultValue={product.size ?? ""}>
                                    {
                                        sizes.map((sizeOption) => (
                                            <RadioSize
                                                key={sizeOption}
                                                value={sizeOption}
                                                className="border-gray-500"
                                            >
                                                {sizeOption}
                                            </RadioSize>
                                        ))
                                    }
                                </RadioSizeGroup>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
            <div className="flex items-center justify-center gap-2 md:hidden">
                <Button size="sm" type="submit" className="bg-blue-900 hover:bg-blue-800">
                    <Save className="h-4 w-4 mr-2" />
                    Guardar producto
                </Button>
            </div>
        </form>
    )
}
