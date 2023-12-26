// filters.js
import { fetchProductsAll } from './fetch.js';
import { updateProductsList } from './products.js';
import { getProductsLimit } from './products.js';


document.addEventListener('DOMContentLoaded', function () {
    initializeFilters();
    fetchCategories();
    setupEventListeners();
    fetchInitialProducts();
});

window.addEventListener('resize', () => {
    fetchFilteredProducts(); // Перезавантаження продуктів
});

async function fetchCategories() {
    try {
        const response = await fetch('https://food-boutique.b.goit.study/api/products/categories');
        const categories = await response.json();
        populateCategorySelect(categories);
    } catch (error) {
        console.error('Error fetching categories:', error);
    }
}

function populateCategorySelect(categories) {
    const select = document.getElementById('categories');
    // Додаємо опцію "Show all"
    select.appendChild(new Option("Show all", ""));

    categories.forEach(category => {
        const option = document.createElement('option');
        option.value = category;
        option.textContent = category.replace(/_/g, ' ');
        select.appendChild(option);
    });

    const savedFilters = getSavedFilters();
    if (savedFilters.category) {
        select.value = savedFilters.category;
    }
}

function setupEventListeners() {
    const searchForm = document.querySelector('.search-form');
    const categoriesSelect = document.getElementById('categories');

    searchForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const keyword = document.getElementById('search-box').value;
        updateFilters('keyword', keyword);
        fetchFilteredProducts();
    });

    categoriesSelect.addEventListener('change', function () {
        updateFilters('category', this.value);
        fetchFilteredProducts();
    });
}

// Додаткова функція для скидання сторінки на 1
function resetPage() {
    updateFilters('page', 1);
}

async function fetchFilteredProducts() {
    const filters = getSavedFilters();
    const limit = getProductsLimit(); // Отримуємо ліміт відповідно до ширини екрану

    try {
        const products = await fetchProductsAll(filters.category, filters.keyword, filters.page, limit);
        updateProductsList(products);
    } catch (error) {
        console.error('Error fetching products:', error);
        updateProductsList([]);
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
    localStorage.setItem('filters', JSON.stringify({ keyword: null, category: null, page: 1, limit: 6 }));
}

function getSavedFilters() {
    return JSON.parse(localStorage.getItem('filters')) || resetFilters();
}

function fetchInitialProducts() {
    fetchFilteredProducts();
}
