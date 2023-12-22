
import SlimSelect from 'slim-select';
import { fetchProductsAll, fetchProducts } from './fetch.js';

document.addEventListener('DOMContentLoaded', function () {
  initializeSlimSelectWithCategories();
  initializeFilters();
  setupEventListeners();
});

function initializeSlimSelectWithCategories() {
  fetch('https://food-boutique.b.goit.study/api/categories')
    .then(response => response.json())
    .then(categories => {
      const categoryOptions = categories.map(category => ({
        text: category.replace(/_/g, ' '),
        value: category
      }));
      categoryOptions.unshift({ text: 'Show all', value: '' });

      new SlimSelect({
        select: '#categories',
        data: categoryOptions
      });
    })
    .catch(error => console.error('Error fetching categories:', error));
}

function initializeFilters() {
  if (!localStorage.getItem('filters')) {
    localStorage.setItem('filters', JSON.stringify({ keyword: null, category: null, page: 1, limit: 6, sort: null }));
  }
}

function updateFilters(key, value) {
  const filters = JSON.parse(localStorage.getItem('filters'));
  filters[key] = value;

  if (key === 'keyword' || key === 'category' || key === 'sort') {
    filters['page'] = 1;
  }

  localStorage.setItem('filters', JSON.stringify(filters));
}

function setupEventListeners() {
    const searchForm = document.querySelector('.search-form');
    searchForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const searchBox = document.getElementById('search-box');
      updateFilters('keyword', searchBox.value);
      fetchFilteredProducts();
    });
  

  categoriesSelect.addEventListener('change', function () {
    updateFilters('category', this.value);
    fetchFilteredProducts();
  });

  sortSelect.addEventListener('change', function () {
    updateFilters('sort', this.value);
    fetchFilteredProducts();
  });
}

function fetchFilteredProducts() {
  const filters = JSON.parse(localStorage.getItem('filters'));
  const category = filters.category;
  const keyword = filters.keyword;
  const sort = filters.sort;
  const page = filters.page;
  const limit = filters.limit;

  fetchProductsAll(category, keyword, sort, page, limit)
    .then(data => {
      // Виклик функції для оновлення списку продуктів
      updateProductsList(data);
    })
    .catch(error => console.error('Error fetching products:', error));
}

// updateProductsList() визначена в іншій частині  коду
function updateProductsList(products) {
  // Логіка для оновлення списку продуктів
}