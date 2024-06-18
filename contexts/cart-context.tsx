"use client";

import { Product } from '@prisma/client';
import { createContext, useState, useEffect } from 'react'

export const CartContext = createContext<any>(undefined);

export type ProductWithQuantity = Product & { quantity: number };

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
    const [cartItems, setCartItems] = useState<null | ProductWithQuantity[]>(null);

    const addToCart = (item: Product) => {
        if (!cartItems) {
            return;
        }

        const isItemInCart = cartItems?.find((cartItem: ProductWithQuantity) => cartItem.id === item.id);

        if (isItemInCart) {
            setCartItems(
                cartItems.map((cartItem: ProductWithQuantity) =>
                    cartItem.id === item.id
                        ? { ...cartItem, quantity: cartItem.quantity + 1 }
                        : cartItem
                )
            );
        } else {
            setCartItems([...cartItems, { ...item, quantity: 1 }]);
        }
    };

    const removeFromCart = (item: Product) => {
        if (!cartItems) {
            return;
        }

        const isItemInCart = cartItems.find((cartItem: ProductWithQuantity) => cartItem.id === item.id);

        if (isItemInCart?.quantity === 1) {
            setCartItems(cartItems.filter((cartItem: ProductWithQuantity) => cartItem.id !== item.id));
        } else {
            setCartItems(
                cartItems.map((cartItem: ProductWithQuantity) =>
                    cartItem.id === item.id
                        ? { ...cartItem, quantity: cartItem.quantity - 1 }
                        : cartItem
                )
            );
        }
    };

    const isItemInCart = (item: Product) => {
        if (!cartItems) {
            return false;
        }

        return cartItems.some((cartItem: ProductWithQuantity) => cartItem.id === item.id);
    }

    const clearCart = () => {
        setCartItems([]);
    };

    const getCartTotal = () => {
        if (!cartItems) {
            return 0;
        }

        return cartItems.reduce((total: number, item: ProductWithQuantity) => total + item.price * item.quantity, 0);
    };

    const getQuantity = (item: Product) => {
        if (!cartItems) {
            return 0;
        }

        const cartItem = cartItems.find((cartItem: ProductWithQuantity) => cartItem.id === item.id);
        return cartItem?.quantity || 0;
    }

    const getTotalItems = () => {
        if (!cartItems) {
            return 0;
        }

        return cartItems.reduce((total: number, item: ProductWithQuantity) => total + item.quantity, 0);

    }

    const removeProduct = (item: Product) => {
        if (!cartItems) {
            return;
        }

        setCartItems(cartItems.filter((cartItem: ProductWithQuantity) => cartItem.id !== item.id));
    }

    const addProductWithQuantity = (item: Product, quantity: number) => {
        if (!cartItems) {
            return;
        }

        const isItemInCart = cartItems.find((cartItem: ProductWithQuantity) => cartItem.id === item.id);

        if (isItemInCart) {
            setCartItems(
                cartItems.map((cartItem: ProductWithQuantity) =>
                    cartItem.id === item.id
                        ? { ...cartItem, quantity: cartItem.quantity + quantity }
                        : cartItem
                )
            );
        } else {
            const itemWithQuantity = { ...item, quantity };

            setCartItems([...cartItems, itemWithQuantity]);
        }
    }

    useEffect(() => {
        if (!cartItems) {
            return;
        }

        window.localStorage.setItem("cartItems", JSON.stringify(cartItems));
    }, [cartItems]);

    useEffect(() => {
        const cartItems = window.localStorage.getItem("cartItems");
        const parsedCartItems = cartItems ? JSON.parse(cartItems) : [];

        setCartItems(parsedCartItems);
    }, []);

    return (
        <CartContext.Provider
            value={{
                cartItems,
                addToCart,
                removeFromCart,
                clearCart,
                getCartTotal,
                isItemInCart,
                getTotalItems,
                getQuantity,
                removeProduct,
                addProductWithQuantity,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};
