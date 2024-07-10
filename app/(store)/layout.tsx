import Cart from '@/components/store/cart'
import { Button } from '@/components/ui/button'
import { CartProvider } from '@/contexts/cart-context'
import { InstagramLogoIcon, TwitterLogoIcon } from '@radix-ui/react-icons'
import { Heart, Mail, MapPin, Phone, ShoppingCart, User } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function StoreLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    const year = new Date().getFullYear()

    return (
        <>
            <CartProvider>
                <header className="sticky top-0 z-30 flex h-14 items-center justify-between gap-4 pt-10 pb-6 sm:static bg-muted/40">
                    <nav className="flex flex-grow justify-between items-center gap-4 max-w-7xl mx-auto px-4">
                        <Link className="flex gap-2 items-center" href="/">
                            <Image
                                src="/logo.png"
                                alt="Logo"
                                width={32}
                                height={32}
                                className="self-start"
                            />
                            <h1 className="text-xl font-medium uppercase">Fashion Trend</h1>
                        </Link>
                        <section className="flex gap-2">
                            <Cart />
                            <Button
                                size="icon"
                                variant="outline"
                                className="self-end"
                            >
                                <Heart className="size-4" />
                            </Button>
                            <Button
                                size="icon"
                                variant="outline"
                                className="self-end"
                                asChild
                            >
                                <Link href="/panel/productos">
                                    <User className="size-4" />
                                </Link>
                            </Button>
                        </section>
                    </nav>
                </header>
                <main className="min-h-screen gap-4 p-4 md:gap-8 bg-muted/40">
                    {children}
                </main>
                <footer className="bg-zinc-900/50 text-foreground py-4">
                    <div className="max-w-screen-lg mx-auto py-4 lg:px-12 px-4">
                        <div className="grid md:grid-cols-2 gap-4 mx-auto">
                            <section className="max-w-sm grid grid-rows-2">
                                <div>
                                    <h3 className="text-xl font-bold uppercase">Fashion Trend</h3>
                                    <p className="text-sm">La tienda de todo super star 🌟</p>
                                </div>
                                <div className="space-y-1">
                                    <h3 className="text-xl font-bold uppercase">Información</h3>
                                    <p className="text-sm flex items-center gap-1">
                                        <MapPin className="size-4" />
                                        <span>Av. Siempre Viva 123, Springfield</span>
                                    </p>
                                    <p className="text-sm flex items-center gap-1">
                                        <Phone className="size-4" />
                                        <Link href="tel:+1234567890">+123 456 7890</Link>
                                    </p>
                                    <p className="text-sm flex items-center gap-1">
                                        <Mail className="size-4" />
                                        <Link href="mailto:">contacto@fashiontrend.cl</Link>
                                    </p>
                                </div>
                            </section>
                            <section className="grid grid-rows-2 gap-4 h-fit">
                                <div>
                                    <h3 className="text-xl font-bold uppercase">Redes sociales</h3>
                                    <p className="text-sm">¡Visita nuestras redes sociales para más información!</p>
                                </div>
                                <div className="flex gap-4 h-fit">
                                    <Link href="https://instagram.com" className="hover:bg-background hover:text-primary p-1 rounded-lg transition-colors duration-300">
                                        <InstagramLogoIcon className="size-8" />
                                    </Link>
                                    <Link href="https://twitter.com" className="hover:bg-background hover:text-primary p-1 rounded-lg transition-colors duration-300">
                                        <TwitterLogoIcon className="size-8" />
                                    </Link>
                                </div>
                            </section>
                        </div>
                    </div>
                    <div className="max-w-screen-lg mx-auto pt-4 lg:px-12 px-4 border-t-2 border-zinc-600/40">
                        <p className="text-center text-sm">
                            © {year} Fashion Trend. Todos los derechos reservados.
                        </p>
                    </div>
                </footer>
            </CartProvider>
        </>
    )
}