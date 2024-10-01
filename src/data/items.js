import images from '/images/photo.jpg'

const productList = [
    {
        id: 1,
        title: 'product',
        price: 99,
        image: images,
    },
    {
        id: 2,
        title: 'product',
        price: 99,
        image: images,
    },
    {
        id: 3,
        title: 'product',
        price: 99,
        image: images,
    },
    {
        id: 4,
        title: 'product',
        price: 99,
        image: images,
    },
]

function getProductData(id) {
    const productData = productList.find((item) => item.id === id)
    return productData
}

export {getProductData,productList};
