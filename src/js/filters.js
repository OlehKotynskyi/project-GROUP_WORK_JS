// filters.js
import SlimSelect from 'slim-select';
import { fetchProductsAll } from './fetch.js';
import { updateProductsList } from './products.js';

new SlimSelect({
    select: '#categories',
   
    data: [
        {'placeholder': true, 'text': 'categories'},
    

        {text: 'Beverages'},
        {text: 'Breads_&_Bakery'},
        {text: 'Dairy'},
        {text: 'Deli'},
        {text: 'Eggs'},
        {text: 'Fresh_Produce'},
        {text: 'Frozen_Foods'},
        {text: 'Meat_&_Seafood'},
        {text: 'Pantry_Items'},
        {text: 'Prepared_Foods'},
        {text: 'Snacks'},
    ],
});

let categorySlimSelect;

document.addEventListener('DOMContentLoaded', function () {
    initializeFilters();
    initializeSlimSelectWithCategories();
    setupEventListeners();
    fetchInitialProducts();
});

function initializeSlimSelectWithCategories() {
    fetch('https://food-boutique.b.goit.study/api/products/categories')
        .then(response => response.json())
        .then(categories => {
            const categoryOptions = categories.map(category => ({
                text: category.replace(/_/g, ' '),
                value: category
            }));
            categoryOptions.unshift({ text: 'Show all', value: '' });

            categorySlimSelect = new SlimSelect({
                select: '#categories',
                data: categoryOptions
            });

            // Тепер встановлюємо збережені фільтри тільки після ініціалізації SlimSelect
            setSavedFilters();
        })
        .catch(error => console.error('Error fetching categories:', error));
}

function setSavedFilters() {
    const savedFilters = JSON.parse(localStorage.getItem('filters'));
    if (savedFilters) {
        if (savedFilters.category && categorySlimSelect) {
            categorySlimSelect.set(savedFilters.category);
        }
        if (savedFilters.keyword) {
            document.getElementById('search-box').value = savedFilters.keyword;
        }
    }
}




function initializeFilters() {
    if (!localStorage.getItem('filters')) {
        localStorage.setItem('filters', JSON.stringify({ keyword: null, category: null, page: 1, limit: 6 }));
    }
}

function updateFilters(key, value) {
    const filters = JSON.parse(localStorage.getItem('filters'));
    filters[key] = value;

    if (key === 'keyword' || key === 'category') {
        filters['page'] = 1;
    }

    localStorage.setItem('filters', JSON.stringify(filters));
}

function setupEventListeners() {
    const searchForm = document.querySelector('.search-form');
    if (searchForm) {
        searchForm.addEventListener('submit', function (e) {
            e.preventDefault();
            updateFilters('keyword', document.getElementById('search-box').value);
            fetchFilteredProducts();
        });
    }

    const categoriesSelect = document.getElementById('categories');
    if (categoriesSelect) {
        categoriesSelect.addEventListener('change', function () {
            updateFilters('category', this.value);
            fetchFilteredProducts();
        });
    }
}

function fetchFilteredProducts() {
    const filters = JSON.parse(localStorage.getItem('filters'));
    fetchProductsAll(filters.category, filters.keyword, filters.page, filters.limit)
        .then(data => {
            updateProductsList(data);
        })
        .catch(error => {
            console.error('Error fetching products:', error);
            updateProductsList([]); // Виклик з порожнім масивом у випадку помилки
        });
}

function fetchInitialProducts() {
    const filters = JSON.parse(localStorage.getItem('filters'));
    if (filters) {
        fetchFilteredProducts();
    }
}
