import { Navbar as NavbarBs, Button, Modal } from 'react-bootstrap'
import { BsCart } from 'react-icons/bs'
import React, { useState } from 'react';


function Navbar() {

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
                        <BsCart className='mx-2'></BsCart>
                        Shopping cart
                    </Button>
                </NavbarBs.Collapse>
            </NavbarBs>
            <Modal show={showModal} onHide={handleClose}
                contentClassName='card-bg' dir='rtl'>
                <Modal.Header closeButton closeVariant='white'> 
                    <Modal.Title>Shopping Cart</Modal.Title>
                    <Modal.Body>Product</Modal.Body>
                </Modal.Header>
            </Modal>
        </>
    )
}
export default Navbar