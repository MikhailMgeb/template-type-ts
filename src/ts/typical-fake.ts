// Типичные фейки
// Возьмите апи https://dummyjson.com/products. Смотрите в возвращаемые ручкой данные и напишите их тип.

type TypeProducts = {
    brand: string;
    category: string;
    description: string;
    discountPercentage: number;
    id: number;
    images: string[];
    price: number;
    title: string;
    rating: string;
    stock: string
    thumbnail: string;
}

type TypeResponse = {
    limit: number;
    products: TypeProducts;
    skip: number;
    total: number;
}

function getApiData(): Promise<TypeResponse> {
    return fetch('https://dummyjson.com/products')
    .then((response) => response.json())
}

getApiData().then((data) => console.log(data.products.price))

