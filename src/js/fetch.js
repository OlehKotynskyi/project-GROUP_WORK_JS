import axios from 'axios';
import { addPagination, deletePagination } from './pagination';

export async function fetchProductsAll(
  category,
  keyword,
  page,
  limit,
  sortMethod
) {
  try {
    const params = {
      keyword: keyword || '',
      category: category || '',
      page: page || 1,
      limit: limit || 6,
    };

    // Додаємо спосіб сортування до параметрів запиту, якщо він існує
    if (sortMethod) {
      params.sort = sortMethod;
    }

    const response = await axios({
      method: 'get',
      url: 'https://food-boutique.b.goit.study/api/products',
      params: params,
    });
    if (response.data.totalPages > 1) {
      addPagination(response.data, limit, page);
    } else {
      deletePagination();
    }
    return response.data.results;
  } catch (error) {
    console.error('Error fetching products:', error);
    return []; // повертаємо порожній масив у випадку помилки
  }
}

export async function fetchProducts(select) {
  const response = await axios(
    `https://food-boutique.b.goit.study/api/products/${select}`
  );
  return response.data;
}
