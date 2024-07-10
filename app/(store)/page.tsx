import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { getLatestProducts } from "@/data/products";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Product from "@/components/store/product";

export default async function MainPage() {
    const latestProducts = await getLatestProducts();

    return (
        <div className="flex flex-col gap-8 max-w-screen-xl mx-auto rounded-lg overflow-hidden">
            <section className="relative">
                <div className="max-w-screen-lg flex flex-col md:flex-row justify-between items-center mx-auto md:py-0 min-h-[30rem] pt-40 lg:px-12 px-4">
                    <div className="flex flex-col items-center md:items-start space-y-8">
                        <div className="max-w-screen-sm text-center md:text-left">
                            <h1 className="text-4xl font-bold uppercase">Fashion Trend</h1>
                            <p className="text-xl text-foreground/70">Lo último en moda a la vuelta de la esquina.</p>
                        </div>
                        <Button
                            className="max-w-52 h-14 uppercase text-lg font-bold rounded-sm border-2 bg-transparent border-primary hover:bg-primary"
                            size="lg"
                            variant="outline"
                            asChild
                        >
                            <Link href="/tienda">Tienda</Link>
                        </Button>
                    </div>
                </div>
                <Image
                    src="/hero.webp"
                    alt="Hero"
                    className="object-cover -z-10 blur-sm opacity-30"
                    fill
                />
            </section>
            <section className="space-y-4">
                <h2 className="text-center uppercase text-2xl font-bold">Categorías</h2>
                <Separator className="bg-primary max-w-64 mx-auto" />
                <div className="grid md:grid-cols-3 gap-4 pt-4">
                    <Link href="/categorias/joyeria" className="relative min-h-72 group rounded-lg overflow-hidden">
                        <Image
                            src="/joyeria.jpg"
                            alt="Joyería"
                            className="object-cover -z-10 opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                            fill
                        />
                        <h3 className="uppercase font-bold text-xl absolute top-[45%] left-[40%]">Joyería</h3>
                    </Link>
                    <Link href="/categorias/ropa" className="relative min-h-72 group rounded-lg overflow-hidden">
                        <Image
                            src="/ropa.webp"
                            alt="Ropa"
                            className="object-cover -z-10 opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                            fill
                        />
                        <h3 className="uppercase font-bold text-xl absolute top-[45%] left-[40%]">Ropa</h3>
                    </Link>
                    <Link href="/categorias/accesorios" className="relative min-h-72 group rounded-lg overflow-hidden">
                        <Image
                            src="/accesorios.jpg"
                            alt="Accesorios"
                            className="object-cover -z-10 opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                            fill
                        />
                        <h3 className="uppercase font-bold text-xl absolute top-[45%] left-[40%]">Accesorios</h3>
                    </Link>
                </div>
            </section>
            <section className="space-y-4 pt-8">
                <h2 className="text-center uppercase text-2xl font-bold">Últimos productos</h2>
                <Separator className="bg-primary max-w-64 mx-auto" />
                <Carousel
                    className="pt-6 w-full max-w-[325px] mx-auto md:max-w-none"
                >
                    <CarouselContent>
                        {
                            latestProducts.length > 0 ? (
                                latestProducts.map((product) => (
                                    <CarouselItem key={product.id} className="md:basis-1/2 lg:basis-1/4">
                                        <Product product={product} />
                                    </CarouselItem>
                                ))
                            ) : (
                                <p className="text-center text-foreground/70 w-full flex items-center justify-center min-h-[350px] max-h-[350px] uppercase font-bold -mt-6">¡No hay productos destacados!</p>
                            )
                        }
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
            </section>
        </div>
    )
}