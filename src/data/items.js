
export const productList = [
    {
        id: 1,
        title: 'product',
        price: 99,
        image: '/photo.jpg',
    },
    {
        id: 2,
        title: 'product',
        price: 99,
        image: '/photo.jpg',
    },
    {
        id: 3,
        title: 'product',
        price: 99,
        image: '/photo.jpg',
    },
    {
        id: 4,
        title: 'product',
        price: 99,
        image: '/photo.jpg',
    },
]

export function getProductData(id) {
    const productData = productList.find((item) => item.id === id)
    return productData
}
