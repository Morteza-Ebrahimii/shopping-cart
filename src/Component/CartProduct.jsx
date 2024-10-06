// This component displays a single product in the cart, 
// showing its title, quantity, and total price. 
// It also includes a "Delete" button to remove the product from the cart.

import { Button } from 'react-bootstrap'
import { getProductData } from '../data/items'
import { useContext } from 'react'
import { CartContext } from '../context/CartContext'

function CartProduct({ id, Quantity }) {

    const cart = useContext(CartContext)
    const productData = getProductData(id)

    return (
        <>
            <p>{productData.title}</p>
            <p>Amount: {Quantity}</p>
            <p>Price: {Quantity * productData.price}</p>
            <Button
                size='sm'
                className='mb-5 text-white'
                variant='btn btn-outline-secondary'
                onClick={() => cart.deleteFromCard(id)}>Delete</Button>
        </>
    )
}
export default CartProduct;