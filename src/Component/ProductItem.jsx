import { Card, Button } from 'react-bootstrap'
import { productList } from '../data/items';

function ProductItem({ Product }) {

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
                    {Product.price}
                </Card.Text>
            </Card.Body>
            <Button variant='btn btn-outline-secondary'
            className='white m-3'>
            Add to Shopping Cart
            </Button>
        </Card>
    )
}

export default ProductItem