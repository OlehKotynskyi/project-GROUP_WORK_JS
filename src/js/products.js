import { createMarkupProductsAll, createMarkupPopularProducts, createMarkupProductsDiscount } from './template.js';
import { fetchProductsAll, fetchProducts } from './fetch.js';

const containerAll = document.querySelector('.products-container');
const containerPopular = document.querySelector('.popular-container');
const containerDiscount = document.querySelector('.discount-container');
const KEY = 'products in cart';

async function renderAll() {
    try {
        const data = await fetchProductsAll('Fresh_Produce');
        containerAll.innerHTML = createMarkupProductsAll(data);

        // Оновлюємо список продуктів з використанням нової функції updateProductsList()
        updateProductsList(data);
    } catch (error) {
        console.log(error.message);
    }
}
renderAll();

async function renderPopular() {
    try {
        const data = await fetchProducts('popular');
        containerPopular.innerHTML = createMarkupPopularProducts(data);
    } catch (error) {
        console.log(error.message);
    }
}
renderPopular();

async function renderDiscount() {
    const data = await fetchProducts('discount');
    containerDiscount.innerHTML = createMarkupProductsDiscount(data);
}
renderDiscount();

containerAll.addEventListener('click', addBtnClick);

async function addBtnClick(event) {
    if (event.target.nodeName !== 'BUTTON') {
        return;
    }
    const selectedItem = event.target.closest('.list-item');
    const selectedItemId = selectedItem.id;
    console.log(selectedItemId);
    try {
        const currentProduct = await fetchProducts(selectedItemId);
        const products = JSON.parse(localStorage.getItem(KEY)) || [];
        console.log(products);
        const index = products.findIndex(item => item._id === selectedItemId);
        console.log(index);

        if (index !== -1) {
            products[index].quantity += 1;
        } else {
            currentProduct.quantity = 1;
            products.push(currentProduct);
        }
        localStorage.setItem(KEY, JSON.stringify(products));
    } catch (error) {
        console.log(error.message);
    }
}

export function updateProductsList(products) {
    const productsContainer = document.querySelector('.products-container');
    
    if (products.length === 0) {
        // Якщо результати не були знайдені, відображаємо повідомлення
        productsContainer.innerHTML = `
            <p>Nothing was found for the selected filters...</p>
            <p>Try adjusting your search parameters or browse our range by other criteria to find the perfect product for you.</p>
        `;
    } else {
        // Якщо результати були знайдені, відображаємо їх
        const markup = createMarkupProductsAll(products);
        productsContainer.innerHTML = markup;
    }
}