import { createMarkupCart } from './template.js'
const title = document.querySelector('.products-quantity-title')
const totalPrice = document.querySelector('.products-total-price')
const containerCart = document.querySelector('.cart-container')
const cartWrapper = document.querySelector('.cart-desktop-wrapper')
const emptyCart = document.querySelector('.cart-empty')
const deleteAllBtn = document.querySelector('.del-all-btn')
const KEY = 'products in cart'

renderCart();

// очистка всієї корзини (localStorage)
deleteAllBtn.addEventListener('click', clearCart)
function clearCart() {
    localStorage.removeItem(KEY)
    renderCart();
}

// якщо localStorage пустий, показувати розмітку пустої корзини
// і приховувати розмітку товарів.
// Викликається в cart.page.js
export function renderCart() {
    const products = JSON.parse(localStorage.getItem(KEY))
    
    if (products === null || products === undefined || products.length === 0) {
        cartWrapper.style.display = 'none';
        emptyCart.style.display = 'block';
        containerCart.innerHTML = '';
        title.textContent = 'Cart (0)'
        totalPrice.textContent = '$0';
    } else {
        containerCart.innerHTML = '';
        cartWrapper.style.display = 'flex';
        emptyCart.style.display = 'none';

        containerCart.insertAdjacentHTML('beforeend', createMarkupCart(products))
        const productsQuantity = document.querySelectorAll('.products-quantity')
    
        products.forEach((el, index) => {
            productsQuantity[index].textContent = el.quantity
        })

        countTotal(products);
    }
}

// додавання, віднімання продуктів
// const moreBtn = document.querySelectorAll('.more-btn')
// const lessBtn = document.querySelectorAll('.less-btn')

// видалення конкретного продукту
// можна оптимізувати
containerCart.addEventListener('click', removeProduct)
function removeProduct(event) {
    if (event.target.className !== 'remove-btn') {
        return;
    }

    const selectedItem = event.target.closest('.cart-list-item');
    const selectedItemId = selectedItem.id;
    const products = JSON.parse(localStorage.getItem(KEY));
    const index = products.findIndex(item => item._id === selectedItemId);
    
    products.splice(index, 1);
    localStorage.setItem(KEY, JSON.stringify(products));
    selectedItem.remove();
    
    countTotal(products);

    if (products === null || products === undefined || products.length === 0) {
        renderCart();
        return;
    }
}

// обрахунок суми кошика
function countTotal(obj) {
    title.textContent = `Cart (${obj.length})`
    const total = obj.reduce((acc, {quantity, price}) => {
        return acc += quantity * price
    }, 0)
    totalPrice.textContent = `$${total.toFixed(2)}`
}