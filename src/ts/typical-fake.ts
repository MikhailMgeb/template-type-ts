// Типичные фейки
// Возьмите апи https://dummyjson.com/products. Смотрите в возвращаемые ручкой данные и напишите их тип.

type TypeProducts = {
    brand: String;
    category: String;
    description: String;
    discountPercentage: Number;
    id: Number;
    images: String[];
    price: Number;
    title: String;
    rating: String;
    stock: String
    thumbnail: String;
}

type TypeResponse = {
    limit: Number;
    products: TypeProducts;
    skip: Number;
    total: Number;
}

function getApiData(): Promise<TypeResponse> {
    return fetch('https://dummyjson.com/products')
    .then((response) => response.json())
}

getApiData().then((data) => console.log(data.products.images))

