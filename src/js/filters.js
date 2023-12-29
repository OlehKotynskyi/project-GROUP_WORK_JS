// filters.js
import SlimSelect from 'slim-select';
//import '../../node_modules/slim-select/dist/slimselect.css';
import { fetchProductsAll } from './fetch.js';
import { updateProductsList } from './products.js';
import { getProductsLimit } from './products.js';

function debounce(func, wait, immediate) {
    let timeout;
    return function() {
        const context = this, args = arguments;
        const later = function() {
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
    fetchCategories();
    setupEventListeners();
    fetchInitialProducts();

    // Відновлення значень фільтрів
    const savedFilters = getSavedFilters();
   if (savedFilters.keyword) {
       document.getElementById('search-box').value = savedFilters.keyword;
   }

   if (savedFilters.category) {
       document.getElementById('categories').value = savedFilters.category;
   }
});

let wasMobile = window.innerWidth <= 375;
let wasTablet = window.innerWidth > 375 && window.innerWidth <= 768;

function handleResize() {
    const width = window.innerWidth;
    const isMobile = width <= 375;
    const isTablet = width > 375 && width <= 768;

    if (isMobile !== wasMobile || isTablet !== wasTablet) {
        fetchFilteredProducts();
        wasMobile = isMobile;
        wasTablet = isTablet;
    }
}

window.addEventListener('resize', debounce(handleResize, 300));

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
    const selectElement = document.getElementById('categories');
    selectElement.innerHTML = '';

// Додаємо категорію "Show all" в кінець списку
const modifiedCategories = categories.map(category => ({
  text: category.replace(/_/g, ' '),
  value: category
})).concat({text: 'Show all', value: ''});

new SlimSelect({
select: '#categories',
placeholder: 'Categories',
showSearch: false, // Вимкнути пошук, якщо не потрібно
data: modifiedCategories
});
}

fetchCategories();

// async function fetchCategories() {
//     try {
//         const response = await fetch('https://food-boutique.b.goit.study/api/products/categories');
//         const categories = await response.json();
//         populateCategorySelect(categories);
//     } catch (error) {
//         console.error('Error fetching categories:', error);
//     }
// }

// function populateCategorySelect(categories) {
//     new SlimSelect({
//         select: '#categories',
//         placeholder: 'Categories',
//         showSearch: false, // Вимкнути пошук, якщо не потрібно
//         data: [{ text: 'Categories', value: '' }, ...categories.map(category => ({
//             text: category.replace(/_/g, ' '),
//             value: category
//         }))]
//     });
// }
//fetchCategories();

   
    // Ініціалізація Slim Select з плейсхолдером "Categories"
    //const slimSelect = new SlimSelect({
    //  select: '#categories',
     // placeholder: 'Categories',
     // data: [{text: 'Show all', value: ''}].concat(
     //     categories.map(category => ({
     //         text: category.replace(/_/g, ' '),
      //        value: category
      //    }))
      //)
 // });

    // Ініціалізація Slim Select
    //const slimSelect = new SlimSelect({
    //    select: '#categories'
    //});

function setupEventListeners() {
   const searchForm = document.querySelector('.search-form');
   const categoriesSelect = document.getElementById('categories');

   searchForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const keyword = document.getElementById('search-box').value;
      if (keyword == '') {
         updateFilters('keyword', null);
         fetchFilteredProducts();
         updateFilters('page', 1);
      } else {
         updateFilters('keyword', keyword);
         fetchFilteredProducts();
         updateFilters('page', 1);
      }
   });

   categoriesSelect.addEventListener('change', function () {
      if (this.value == 'Show all') {
         updateFilters('category', null);
         updateFilters('page', 1);
         fetchFilteredProducts();
      } else {
         updateFilters('category', this.value);
         updateFilters('page', 1);
         fetchFilteredProducts();
      }
   });
}

// Додаткова функція для скидання сторінки на 1
function resetPage() {
   updateFilters('page', 1);
}

async function fetchFilteredProducts() {
   const filters = getSavedFilters();
   const limit = getProductsLimit();

   try {
      // Відправка запиту з включенням обраних ключового слова і категорії
      const products = await fetchProductsAll(
         filters.category,
         filters.keyword,
         filters.page,
         limit
      );
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
   // paginationReset();
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
//import { fetchProductsAll } from './fetch.js';
//import { updateProductsList } from './products.js';

//document.addEventListener('DOMContentLoaded', function () {
//    initializeFilters();
//    fetchCategories();
//    setupEventListeners();
//    fetchInitialProducts();
//});

//async function fetchCategories() {
//    try {
//        const response = await fetch('https://food-boutique.b.goit.study/api/products/categories');
//        const categories = await response.json();
//        populateCategorySelect(categories);
//    } catch (error) {
//        console.error('Error fetching categories:', error);
//    }
//}

//function populateCategorySelect(categories) {
//    const select = document.getElementById('categories');
//    // Додаємо опцію "Show all"
//    select.appendChild(new Option("Show all", ""));

//    categories.forEach(category => {
//        const option = document.createElement('option');
//        option.value = category;
//        option.textContent = category.replace(/_/g, ' ');
//        select.appendChild(option);
//    });

//    const savedFilters = getSavedFilters();
//    if (savedFilters.category) {
//        select.value = savedFilters.category;
//    }
//}

//function setupEventListeners() {
//    const searchForm = document.querySelector('.search-form');
//    const categoriesSelect = document.getElementById('categories');

//    searchForm.addEventListener('submit', function (e) {
//        e.preventDefault();
//        const keyword = document.getElementById('search-box').value;
//        updateFilters('keyword', keyword);
//        fetchFilteredProducts();
//    });

//    categoriesSelect.addEventListener('change', function () {
//        updateFilters('category', this.value);
//        fetchFilteredProducts();
//    });
//}

//// Додаткова функція для скидання сторінки на 1
//function resetPage() {
//    updateFilters('page', 1);
//}

//async function fetchFilteredProducts() {
//    const filters = getSavedFilters();
//    try {
//        const products = await fetchProductsAll(filters.category, filters.keyword, filters.page, filters.limit);
//        updateProductsList(products);
//    } catch (error) {
//        console.error('Error fetching products:', error);
//        updateProductsList([]);
//    }
//}

//function initializeFilters() {
//    if (!localStorage.getItem('filters')) {
//        resetFilters();
//    }
//}

//function updateFilters(key, value) {
//    const filters = getSavedFilters();
//    filters[key] = value;
//    localStorage.setItem('filters', JSON.stringify(filters));
//}

//function resetFilters() {
//    localStorage.setItem('filters', JSON.stringify({ keyword: null, category: null, page: 1, limit: 6 }));
//}

//function getSavedFilters() {
//    return JSON.parse(localStorage.getItem('filters')) || resetFilters();
//}

//function fetchInitialProducts() {
//    fetchFilteredProducts();
//}