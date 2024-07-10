/**
 * @jest-environment jsdom
 */

import "@testing-library/jest-dom"
import { render, screen, fireEvent } from "@testing-library/react"
import MainPage from "@/app/(store)/page" 
import { CartProvider } from "@/contexts/cart-context"

describe("Store", () => {
    it("should contain two items", async() => {
        const ui = await MainPage();
        render(
            <CartProvider>
                {ui}
            </CartProvider>
        );

        expect(screen.getByText("Reloj de mano")).toBeInTheDocument()
        expect(screen.getByText("Reloj de bolsa")).toBeInTheDocument()
    })
})

describe("Store", () => {
    it("should contain an item", async() => {
        const ui = await MainPage();
        render(
            <CartProvider>
                {ui}
            </CartProvider>
        );

        expect(screen.getByText("Reloj de bolsa")).toBeInTheDocument()
    })
})

describe("Store", () => {
    it("should filter with yellow color", async() => {
        const ui = await MainPage();
        const { container } = render(
            <CartProvider>
                {ui}
            </CartProvider>
        );

        const checkbox = container.querySelector("button[value='yellow']") as HTMLInputElement;
        expect(checkbox).toBeInTheDocument();

        fireEvent.click(checkbox);
        expect(screen.getByText("Reloj de mano")).toBeInTheDocument();
        expect(screen.queryByText("Reloj de bolsa")).not.toBeInTheDocument();
    })
})

describe("Store", () => {
    it("should filter with green color and xl size", async() => {
        const ui = await MainPage();
        const { container } = render(
            <CartProvider>
                {ui}
            </CartProvider>
        );

        const color = container.querySelector("button[value='green']") as HTMLInputElement;
        expect(color).toBeInTheDocument();

        fireEvent.click(color);

        const size = container.querySelector("button[value='xl']") as HTMLInputElement;
        expect(size).toBeInTheDocument();

        fireEvent.click(size);

        expect(screen.getByText("Reloj de bolsa")).toBeInTheDocument();
        expect(screen.queryByText("Reloj de mano")).not.toBeInTheDocument();
    })
})

describe("Store", () => {
    it("should filter with green color and xl size", async() => {
        const ui = await MainPage();
        const { container } = render(
            <CartProvider>
                {ui}
            </CartProvider>
        );

        const color = container.querySelector("button[value='green']") as HTMLInputElement;
        expect(color).toBeInTheDocument();

        fireEvent.click(color);

        const size = container.querySelector("button[value='xl']") as HTMLInputElement;
        expect(size).toBeInTheDocument();

        fireEvent.click(size);

        expect(screen.getByText("Reloj de bolsa")).toBeInTheDocument();
        expect(screen.queryByText("Reloj de mano")).not.toBeInTheDocument();
    })
})

describe("Store", () => {
    it("should filter with green color and l size", async() => {
        const ui = await MainPage();
        const { container } = render(
            <CartProvider>
                {ui}
            </CartProvider>
        );

        const color = container.querySelector("button[value='green']") as HTMLInputElement;
        expect(color).toBeInTheDocument();

        fireEvent.click(color);

        const size = container.querySelector("button[value='l']") as HTMLInputElement;
        expect(size).toBeInTheDocument();

        fireEvent.click(size);

        expect(screen.queryByText("Reloj de bolsa")).not.toBeInTheDocument();
        expect(screen.queryByText("Reloj de mano")).not.toBeInTheDocument();
    })
})