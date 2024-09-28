import { Card, Button } from 'react-bootstrap'

function ProductItem({ ProductItem }) {
    return (
        <Card className='mt-5 card-bg'>
            <Card.Body>
                <Card.Img variant='top' src={ProductItem.image}
                    height='200px'
                    style={{ objectFit: 'cover' }}
                />
                <Card.Title align='right'
                    className='text-right pt-4'>
                    {ProductItem.title}
                </Card.Title>
                <Card.Text align='right' className='text-light'>
                    {ProductItem.price}
                </Card.Text>
            </Card.Body>
            <Button variant='btn                       btn-outline-secondary'
            className='white'>
            Shopping Cart
            </Button>
        </Card>
    )
}

export default ProductItem