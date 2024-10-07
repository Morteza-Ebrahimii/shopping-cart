// Shop component: 
// Renders the main shopping page, 
// displaying a list of available products in a grid layout. 
// Each product is represented by a ProductItem component, 
// which shows the product details and allows adding to the cart.

import { Row, Col } from 'react-bootstrap';
import {productList } from '../data/items.js'
import ProductItem from '../Component/ProductItem.jsx'


function Shop() {
    return (
        <>
            <div className="hr" />

            <Row xs={1} lg={4} md={2}  className='g-4'>
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