import axios from 'axios'

//export async function fetchProductsAll(category) {
//    const response = await axios(`https://food-boutique.b.goit.study/api/products?keyword=Ac&category=${category}&page=1&limit=10`)
//    return response.data.results
//}

//export async function fetchProducts(select) {
 //   const response = await axios(`https://food-boutique.b.goit.study/api/products/${select}`)
 //   return response.data
//}



// Оновлена функція для отримання всіх продуктів з підтримкою фільтрів
export async function fetchProductsAll(category, keyword, sort, page, limit) {
    const params = {
        category: category || '', // Передаємо обрану категорію або пустий рядок
        keyword: keyword || '',   // Передаємо обране ключове слово або пустий рядок
        page: page || 1,          // Передаємо обрану сторінку пагінації або 1 по замовчуванню
        limit: limit || 6,        // Передаємо обраний ліміт або 6 по замовчуванню
        sort: sort || ''          // Передаємо обраний спосіб сортування або порожній рядок
    };

    const response = await axios.get('https://food-boutique.b.goit.study/api/products', { params });
    return response.data.results;
}

// Оновлена функція для отримання продукту за ідентифікатором
export async function fetchProducts(select) {
    const response = await axios.get(`https://food-boutique.b.goit.study/api/products/${select}`);
    return response.data;
}