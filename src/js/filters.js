import SlimSelect from 'slim-select';
import { fetchProductsAll } from './fetch.js';
import { updateProductsList } from './products.js';

let isFetching = false;

function debounce(func, wait, immediate) {
  let timeout;
  return function () {
    const context = this,
      args = arguments;
    const later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

document.addEventListener('DOMContentLoaded', function () {
  initializeFilters();

  setupEventListeners();
  fetchInitialProducts();
  initializeSortSelect();
  fetchCategories();

  const searchBox = document.getElementById('search-box');
  const categoriesSelect = document.getElementById('categories');
  const sortOptionsSelect = document.getElementById('sort-options');
  const savedFilters = getSavedFilters();

  searchBox.value = savedFilters.keyword || '';
  categoriesSelect.value = savedFilters.category || '';
  sortOptionsSelect.value = savedFilters.sort || '';

  fetchFilteredProducts();
});

const searchForm = document.querySelector('.search-form');

searchForm.addEventListener('submit', function (e) {
  e.preventDefault();
  const keyword = document.getElementById('search-box').value.trim();
  updateFilters('keyword', keyword);
  fetchFilteredProducts();
  resetPage();
});

function handleResize() {
  const width = window.innerWidth;
  const isMobile = width < 768;

  const isTablet = width >= 768 && width < 1150;

  let limit = 6; // По умолчанию 6 карточек

  if (isTablet) {
    limit = 8; // Для планшета 8 карточек
  } else if (width >= 1150) {
    limit = 9; // Для 1440 шириной 9 карточек
  }

  const filters = getSavedFilters();
  filters.limit = limit;
  localStorage.setItem('filters', JSON.stringify(filters));

  fetchFilteredProducts();
}

window.addEventListener('resize', debounce(handleResize, 300));

async function fetchCategories() {
  try {
    const response = await fetch(
      'https://food-boutique.b.goit.study/api/products/categories'
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const categories = await response.json();
    if (categories && categories.length > 0) {
      populateCategorySelect(categories);
    } else {
      console.error('No categories found');
    }
  } catch (error) {
    console.error('Error fetching categories:', error);
  }
}

function populateCategorySelect(categories) {
  const selectElement = document.getElementById('categories');
  selectElement.innerHTML = '';

  const modifiedCategories = [
    { text: 'Show all', value: '' },
    ...categories.map(category => ({
      text: category.replace(/_/g, ' '),
      value: category,
    })),
  ];

  new SlimSelect({
    select: '#categories',
    placeholder: 'Categories',
    showSearch: false,
    data: modifiedCategories,
  });
}

function initializeSortSelect() {
  new SlimSelect({
    select: '#sort-options',
    data: [
      { text: 'A to Z', value: 'byABC_Asc' },
      { text: 'Z to A', value: 'byABC_Desc' },
      { text: 'Cheap', value: 'byPrice_Asc' },
      { text: 'Expensive', value: 'byPrice_Desc' },
      { text: 'Popular', value: 'byPopularity_Asc' },
      { text: 'Not popular', value: 'byPopularity_Desc' },
      { text: 'Show all', value: 'showAll' },
    ],
  });
}

function setupEventListeners() {
  const categoriesSelect = document.getElementById('categories');
  const sortOptionsSelect = document.getElementById('sort-options');

  categoriesSelect.addEventListener('change', handleFilterChange);
  sortOptionsSelect.addEventListener('change', handleFilterChange);
}

function handleFilterChange() {
  const selectedCategory = document.getElementById('categories').value;
  const selectedSortOption = document.getElementById('sort-options').value;

  updateFilters('category', selectedCategory);
  updateFilters('sort', selectedSortOption);

  fetchFilteredProducts();
  resetPage();
}

function resetPage() {
  updateFilters('page', 1);
}

async function fetchFilteredProducts() {
  if (isFetching) return;
  isFetching = true;

  const filters = getSavedFilters();
  const { category, keyword, page, limit, sort } = filters;

  try {
    const products = await fetchProductsAll(
      category,
      keyword,
      page,
      limit,
      sort
    );

    if (!Array.isArray(products)) {
      throw new Error('Response is not an array of products');
    }

    switch (sort) {
      case 'byABC_Asc':
        products.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'byABC_Desc':
        products.sort((a, b) => b.name.localeCompare(a.name));
        break;
      case 'byPrice_Asc':
        products.sort((a, b) => a.price - b.price);
        break;
      case 'byPrice_Desc':
        products.sort((a, b) => b.price - a.price);
        break;
      case 'byPopularity_Asc':
        products.sort((a, b) => a.popularity - b.popularity);
        break;
      case 'byPopularity_Desc':
        products.sort((a, b) => b.popularity - a.popularity);
        break;
    }

    updateProductsList(products);
  } catch (error) {
    console.error('Error fetching products:', error);
    updateProductsList([]);
  } finally {
    isFetching = false;
  }
}

function initializeFilters() {
  if (!localStorage.getItem('filters')) {
    resetFilters();
  }
}

function updateFilters(key, value) {
  const filters = getSavedFilters();
  filters[key] = value;
  localStorage.setItem('filters', JSON.stringify(filters));
}

function resetFilters() {
  localStorage.setItem(
    'filters',
    JSON.stringify({ keyword: null, category: null, page: 1, limit: 6 })
  );
}

function getSavedFilters() {
  return JSON.parse(localStorage.getItem('filters')) || resetFilters();
}

function fetchInitialProducts() {
  fetchFilteredProducts();
}
export default fetchFilteredProducts;
