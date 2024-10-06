// This file defines the CartContext, which provides a way to share 
// cart data and functionality between components.

import { useState } from 'react';
import { createContext } from 'react'
import { getProductData } from '../data/items'

export const CartContext = createContext({
    items: [],
    getProductQuantity: () => { },
    addItemToCart: () => { },
    removeItemFromCart: () => { },
    deleteFromCard: () => { },
    getTotalAmount: () => { },
});

export function CartProvider({ children }) {

    const [CartProduct, setCartProduct] = useState([])

    function getProductQuantity(id) {
        const quantity = CartProduct.find((item) => item.id === id)?.quantity

        if (quantity === undefined) {
            return 0
        }

        return quantity
    }

    function addItemToCart(id) {
        const quantity = getProductQuantity(id)

        if (quantity === 0) {
            setCartProduct([...CartProduct, { id: id, quantity: 1 }])
        } else {
            setCartProduct(
                CartProduct.map((item) => 
                    item.id === id ? { ...item, quantity: item.quantity + 1 } : item
                )
            )

        }
    }

    function deleteFromCard(id) {
        setCartProduct((CartProduct) => {
            return CartProduct.filter((item) => item.id !== id)
        })
    }
    function removeItemFromCart(id) {
        const quantity = getProductQuantity(id)

        if (quantity === 1) {
            deleteFromCard(id)
        } else {
            setCartProduct(
                CartProduct.map((item) => item.id === id ? { ...item, quantity: item.quantity - 1 } : item))
        }
    }

    function getTotalAmount() {
        let totalAmount = 0;
        CartProduct.map((item) => {
            const productData = getProductData(item.id)

            totalAmount += productData.price * item.quantity
        })
        return totalAmount
    }


    const ContextValue = {
        items: CartProduct,
        getProductQuantity,
        addItemToCart,
        removeItemFromCart,
        deleteFromCard,
        getTotalAmount,
    }

    return (
        <CartContext.Provider value={ContextValue}>
            {children}
        </CartContext.Provider>
    )
}
