// This file contains a function to retrieve product data by ID.
// It's used by the CartProduct component to fetch product information.

import airpads from '/images/airpods.jpg'
import hadphone from '/images/hadphone.jpg'
import iphone16 from '/images/iphone16.jpg'
import keyMouse from '/images/key&mouse.jpg'
import mackBook from '/images/mackBook.jpg'

const productList = [
    {
        id: 1,
        title: 'Airpads',
        price: 89,
        image: airpads,
    },
    {
        id: 2,
        title: 'iphone 16 max',
        price: 399,
        image: iphone16,
    },
    {
        id: 3,
        title: 'hadphone',
        price: 199,
        image: hadphone,
    },
    {
        id: 4,
        title: 'key and mouse',
        price: 499,
        image: keyMouse,
    },
    {
        id: 5,
        title: 'airpads',
        price: 89,
        image: airpads,
    },
    {
        id: 6,
        title: 'hadphone',
        price: 159,
        image: hadphone,
    },
    {
        id: 7,
        title: 'iphone 16 plus',
        price: 499,
        image: iphone16,
    },
    {
        id: 8,
        title: 'mackbook',
        price: 699,
        image: mackBook,
    },
]

function getProductData(id) {
    const productData = productList.find((item) => item.id === id)
    return productData
}

export {getProductData,productList};
