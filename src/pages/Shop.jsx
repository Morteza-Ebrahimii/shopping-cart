import { Row, Col } from 'react-bootstrap';
import {productList } from '../data/items.js'
import ProductItem from '../Component/ProductItem.jsx'


function Shop() {
    return (
        <>
            <div className="hr" />

            <Row xs={1} md={4} className='g-4'>
                {productList.map((item) => (
                    <Col align='center' key={item.id}>
                    <ProductItem Product={item} />
                    </Col>
                ))}
            </Row>
        </>
    )
}

export default Shop