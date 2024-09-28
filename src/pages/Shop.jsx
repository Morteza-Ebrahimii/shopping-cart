import { Row, Col } from 'react-bootstrap'
import data from './src/data/items.js'

function Shop() {
    return (
        <>
            <div className="hr" />

            <Row xs={1} md={4} className='g-4'>
                <Col align='center'>
                    <h3>Product</h3>
                </Col>
                <Col align='center'>
                    <h3>Product</h3>
                </Col>
                <Col align='center'>
                    <h3>Product</h3>
                </Col>
                <Col align='center'>
                    <h3>Product</h3>
                </Col>
            </Row>
        </>
    )
}

export default Shop