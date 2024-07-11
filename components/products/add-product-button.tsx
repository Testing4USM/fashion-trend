"use client";

import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { PlusCircle } from "lucide-react";
import { ReloadIcon } from "@radix-ui/react-icons"
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod"
import { Textarea } from "@/components/ui/textarea";

import * as z from "zod";
import { ProductSchema } from "@/schemas";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { useEffect, useState } from "react";
import { createProduct } from "@/actions/products";
import { toast } from "sonner";
import  getCategories from "@/data/categories";

type Category = {
    id: string;
    slug: string;
    name: string;
    createdAt: Date;
    updatedAt: Date;
};

export default function AddProductButton() {
    const form = useForm<z.infer<typeof ProductSchema>>({
        resolver: zodResolver(ProductSchema),
        defaultValues: {
            name: "",
            price: 0,
            description: "",
            stock: 0,
            image: "",
            category: "",
        },
    });

    const [open, setOpen] = useState(false);
    const [pending, setPending] = useState(false);
    const [categories, setCategories] = useState<Category[]>([]);

    useEffect(() => {
        async function fetchCategories() {
            const categories = await getCategories();
            setCategories(categories);
        }

        fetchCategories();
    }, []);


    async function onSubmit(values: z.infer<typeof ProductSchema>) {
        setPending(true);
        const status = await createProduct(values);
        setPending(false);

        if (status.error) {
            toast.error(status.message);
            return;
        }
        
        toast.success(status.message);
        form.reset();
        setOpen(false);
    }

    return (
        <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
                <Button size="sm" className="h-8 gap-1">
                    <PlusCircle className="h-3.5 w-3.5" />
                    <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                        Añadir producto
                    </span>
                </Button>
            </SheetTrigger>
            <SheetContent>
                <SheetHeader className="mb-4">
                    <SheetTitle className="uppercase">Nuevo producto</SheetTitle>
                    <SheetDescription>
                        En esta sección podrás añadir un nuevo producto a tu tienda.
                    </SheetDescription>
                </SheetHeader>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                        <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Nombre del producto</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Reloj de mano" {...field} required/>
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="price"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Precio</FormLabel>
                                    <FormControl>
                                        <Input placeholder="0" {...field} required/>
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="description"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Descripción</FormLabel>
                                    <FormControl>
                                        <Textarea 
                                            placeholder="Description"
                                            className="resize-none"
                                            required
                                            {...field} 
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="image"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Link de imagen</FormLabel>
                                    <FormControl>
                                        <Input placeholder="https://imgur.com" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="category"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Categoría</FormLabel>
                                    <FormControl>
                                        <select {...field} 
                                        className="block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500"
                                        required>
                                            <option value="">Seleccione una categoría</option>
                                            {categories.map((category) => (
                                                <option key={category.id} value={category.id}>
                                                    {category.name}
                                                </option>
                                            ))}
                                        </select>
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <Button 
                            type="submit"
                            className="w-full mt-12"
                            disabled={pending}
                        >
                            {
                                pending && (
                                    <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
                                )
                            }
                            Crear producto
                        </Button>
                    </form>
                </Form>
            </SheetContent>
        </Sheet>
    )
}