import axios from 'axios';
import { renderPopularCard } from './render-popular'

const BASE_URL = 'https://food-boutique.b.goit.study/api';

export async function fetchPopularCard() {
  try {
    const popularProductsUrl = `${BASE_URL}/products/popular`;
    const response = await axios.get(popularProductsUrl);
    console.log('data', response.data);
    return response.data;
  } catch (error) {
    console.error('error', error);
  }
}

