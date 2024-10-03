import { useState } from 'react';
import { createContext } from 'react'

export const CardContext = createContext({
    items: [],
    getProductQuantity: () => { },
    addItemToCard: () => { },
    removeItemFromCard: () => { },
    deleteFromCard: () => { },
    getTotalAmount: () => { },
});

export function CardProvider({ children }) {

    const [CartProduct, setCartProduct] = useState([])

    function getProductQuantity(id) {
        const quantity = CartProduct.find((item) => (item.id === id)?.quantity)

        if (quantity === undefined) {
            return 0
        }

        return quantity
    }

    function addItemToCard(id) {
        const quantity = getProductQuantity(id)

        if (quantity === 0) {
            setCartProduct([...CartProduct, { id: id, quantity: 1 }])
        } else {
            CartProduct.map((item) => (
                item.id === id ? { ...item, quantity: quantity + 1 } : item
            ))
        }
    }

    function deleteFromCard(id) {
        setCartProduct((CartProduct) => {
            return CartProduct.filter((item) => item.id !== id)
        })
    }
    function removeItemFromCard(id) {
        if (quantity === 1) {
            deleteFromCard(id)
        } else {
            setCartProduct(
                CartProduct.map((item) => item.id === id ? { ...item, quantity: item.quantity - 1 } : item))
        }
    }


    const ContextValue = {
        items: CartProduct,
        getProductQuantity,
        addItemToCard,
        removeItemFromCard,
        deleteFromCard,
        getTotalAmount,
    }

    return (
        <CardContext.Provider value={ContextValue}>
            {children}
        </CardContext.Provider>
    )
}
