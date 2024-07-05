"use client";

import { Product } from "@prisma/client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Delete, DeleteIcon, Edit, MoreHorizontal, Search, Trash } from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import Image from "next/image";
import AddProductButton from "@/components/products/add-product-button";
import SheetProvider from "@/components/sheet-provider";
import { formatCurrency } from "@/lib/utils";
import { useEffect, useState } from "react";
import Link from "next/link";
import { deleteProduct } from "@/actions/products";
import { toast } from "sonner";

type ProducstTableProps = {
    products: Product[];
}

export default function ProductsTable({ products }: ProducstTableProps) {
    const [query, setQuery] = useState("");
    const [currentProducts, setCurrentProducts] = useState(products);

    useEffect(() => {
        const filteredProducts = products.filter((product) => {
            const name = product.name.toLowerCase();
            const search = query.toLowerCase();

            return name.includes(search);
        });

        setCurrentProducts(filteredProducts);
    }, [products, query])

    return (
        <div className="flex flex-col gap-4">
            <section className="flex flex-col md:items-center md:flew-row gap-4">
                <div className="md:ml-auto flex items-center gap-2">
                    <div className="relative ml-auto flex-1 md:grow-0">
                        <Search className="absolute left-2.5 top-3 h-4 w-4 text-muted-foreground" />
                        <Input
                            type="search"
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            placeholder="Buscar producto..."
                            className="w-full rounded-lg bg-background pl-8 md:w-[200px] lg:w-[520px] h-10"
                        />
                    </div>
                    <SheetProvider>
                        <AddProductButton />
                    </SheetProvider>
                </div>
            </section>
            <Card>
                <CardHeader>
                    <CardTitle>Productos</CardTitle>
                    <CardDescription>
                        Lista de productos de la tienda
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead className="hidden w-[100px] sm:table-cell">
                                    <span className="sr-only">Imagén</span>
                                </TableHead>
                                <TableHead>Nombre</TableHead>
                                <TableHead>Estado</TableHead>
                                <TableHead>Precio</TableHead>
                                <TableHead className="table-cell">
                                    Disponible
                                </TableHead>
                                <TableHead className="hidden md:table-cell">
                                    Fecha de creación
                                </TableHead>
                                <TableHead>
                                    <span className="sr-only">Acciones</span>
                                </TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {
                                currentProducts.map((product) => (
                                    <TableRow key={product.id}>
                                        <TableCell className="hidden sm:table-cell">
                                            <Image
                                                alt="Product image"
                                                className="aspect-square rounded-md object-cover"
                                                height="64"
                                                src={`${product.image}`}
                                                width="64"
                                            />
                                        </TableCell>
                                        <TableCell className="font-medium">
                                            {product.name.slice(0, 18) + (product.name.length > 18 ? "..." : "")}
                                        </TableCell>
                                        <TableCell>
                                            <Badge variant="outline">{product.status}</Badge>
                                        </TableCell>
                                        <TableCell>{formatCurrency(product.price)}</TableCell>
                                        <TableCell className="table-cell">
                                            {product.stock}
                                        </TableCell>
                                        <TableCell className="hidden md:table-cell">
                                            {product.createdAt.toLocaleString().split(",")[0]}
                                        </TableCell>
                                        <TableCell className="items-center space-x-3">
                                            <Button
                                                aria-haspopup="true"
                                                size="icon"
                                                variant="ghost"
                                                asChild
                                            >
                                                <Link href={`/panel/productos/${product.id}`}>
                                                    <Edit className="h-4 w-4" />
                                                </Link>
                                            </Button>
                                            <Button
                                                aria-haspopup="true"
                                                size="icon"
                                                variant="destructive"
                                                onClick={async() => {
                                                    const result = await deleteProduct(product.id);

                                                    if (result.error) {
                                                        return toast.error(result.message);
                                                    }

                                                    toast.success(result.message);
                                                }}
                                            >
                                                <Trash className="h-4 w-4" />
                                            </Button>
                                        </TableCell>
                                    </TableRow>
                                ))
                            }
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
        </div>
    )
}