import Cart from '@/components/store/cart'
import { Button } from '@/components/ui/button'
import { CartProvider } from '@/contexts/cart-context'
import { Heart, ShoppingCart, User } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function StoreLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <>
            <CartProvider>
                <header className="sticky top-0 z-30 flex h-14 items-center justify-between gap-4 pt-10 pb-6 sm:static bg-muted/40">
                    <nav className="flex flex-grow justify-between items-center gap-4 max-w-7xl mx-auto px-4">
                        <section className="flex gap-2 items-center">
                            <Image
                                src="/logo.png"
                                alt="Logo"
                                width={32}
                                height={32}
                                className="self-start"
                            />
                            <h1 className="text-xl font-medium">Fashion Trend</h1>
                        </section>
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
            </CartProvider>
        </>
    )
}