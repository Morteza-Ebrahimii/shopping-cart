// ProductItem component: 
// Represents a single product item in the catalog, 
// displaying its details such as name, price, and description. 
// May include an "Add to Cart" button to add the product to the shopping cart.

import { Card, Button, Form, Row, Col } from 'react-bootstrap'
import { productList } from '../data/items';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext'

function ProductItem({ Product }) {

    const cart = useContext(CartContext)
    const productQuantity = cart.getProductQuantity(Product.id)

    console.log();
    return (
        <Card className='mt-5 card-bg'>
            <Card.Body>
                <Card.Img variant='top' src={Product.image}
                    height='200px'
                    style={{ objectFit: 'cover' }}
                />
                <Card.Title align='right'
                    className='text-right text-light pt-4'>
                    {Product.title}
                </Card.Title>
                <Card.Text align='right' className='text-light'>
                    {Product.price} $
                </Card.Text>
                {productQuantity > 0 ?
                    (<>
                        <Form as={Row}>
                            <Form.Label column={true} sm='6' className='text-white'     >
                                Amount: {productQuantity}
                            </Form.Label>
                            <Col sm='6'>
                                <Button
                                    onClick={() => cart.addItemToCart(Product.id)}
                                    sm='6'
                                    className='mx-2 text-white'
                                    variant='btn btn-outline-secondary'>+</Button>
                                <Button sm='6'
                                    onClick={() => cart.removeItemFromCart(Product.id)}
                                    className='mx-2 text-white'
                                    variant='btn btn-outline-secondary'>-</Button>

                            </Col>

                        </Form>
                        <Button onClick={() => cart.deleteFromCard(Product.id)}
                            className='my-4'
                            variant='btn btn-danger'>Delete from cart</Button>
                    </>
                    ) :
                    (
                        <Button onClick={() => cart.addItemToCart(Product.id)} variant='btn btn-outline-secondary'
                            className='white m-3'>
                            Add to Shopping Cart
                        </Button>
                    )}
            </Card.Body>
        </Card>
    )
}

export default ProductItem