// Типичные фейки
// Возьмите апи https://dummyjson.com/products. Смотрите в возвращаемые ручкой данные и напишите их тип.

type Category = 'smartphones' | 'laptops' | 'fragrances' | 'skincare' | 'groceries' | 'home-decoration';

type TypeProducts = {
    brand: string;
    category: Category;
    description: string;
    discountPercentage: number;
    id: number;
    images: string[];
    price: number;
    title: string;
    rating: string;
    stock: string
    thumbnail: string;
};

type TypeResponse = {
    limit: number;
    products: TypeProducts;
    skip: number;
    total: number;
};

function getApiData(): Promise<TypeResponse> {
    return fetch('https://dummyjson.com/products')
        .then((response) => response.json())
}

getApiData().then((data) => console.log(data.products.price));

