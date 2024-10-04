import { Navbar as NavbarBs, Button, Modal } from 'react-bootstrap'
import { BsCart } from 'react-icons/bs'
import React, { useState, useContext } from 'react';
import { CartContext } from '../context/CartContext';
import CartProduct from './CartProduct';


function Navbar() {

    const cart = useContext(CartContext)

    const productCount = cart.items.reduce((sum, product) => sum + product.quantity, 0)

    const [showModal, setShowModal] = useState(false)

    const handleShow = () => {
        setShowModal(true)
    }
    const handleClose = () => {
        setShowModal(false)

    }

    return (
        <>
            <NavbarBs className='border-button border-secondary'>
                <NavbarBs.Collapse className='justify-content-end'>
                    <Button variant='btn btn-outline-secondary'
                        className='text-white'
                        onClick={handleShow}>
                        {productCount > 0 && `(${productCount})`}
                        <BsCart className='mx-2'></BsCart>
                        Shopping cart
                    </Button>
                </NavbarBs.Collapse>
            </NavbarBs>
            <Modal show={showModal} onHide={handleClose}
                contentClassName='card-bg' dir='rtl'>
                <Modal.Header >
                    <Modal.Body>
                        {
                            productCount > 0 ? (
                                <>
                                    <h3 className='mb-4'>Shopping cart</h3>
                                    {cart.items.map((item) => (
                                        <CartProduct key={item.id} id={item.id} Quantity={item.quantity}></CartProduct>
                                    ))}
                                </>
                            ) : (
                                <h3 className='text-danger'>shopping cart is empty!</h3>

                            )
                        }
                        <Button variant='btn btn-outline-secondary' className='mt-5 mx 3 text-white' onClick={handleClose}>Close</Button>
                    </Modal.Body>
                </Modal.Header>
            </Modal>
        </>
    )
}
export default Navbar