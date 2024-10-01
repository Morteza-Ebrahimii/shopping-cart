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

    const [cardProduct, setCardProduct] = useState([])

    const ContextValue = {
        items: cardProduct,
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
