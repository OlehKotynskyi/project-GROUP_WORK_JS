import { createMarkupCart } from './template.js'
const title = document.querySelector('.products-quantity-title')
const totalPrice = document.querySelector('.products-total-price')
const container = document.querySelector('.cart-container')
const KEY = 'products in cart'

const products = JSON.parse(localStorage.getItem(KEY))

container.insertAdjacentHTML('beforeend', createMarkupCart(products))
const productsQuantity = document.querySelectorAll('.products-quantity')
products.forEach((el, index) => {
    productsQuantity[index].textContent = el.quantity
})

title.textContent = `Cart (${products.length})`
const total = products.reduce((acc, {quantity, price}) => {
    return acc += quantity * (price * 10)
}, 0)
totalPrice.textContent = `$${total / 10}`

// const moreBtn = document.querySelectorAll('.more-btn')
// const lessBtn = document.querySelectorAll('.less-btn')

// const removeBtn = document.querySelector('.remove-btn')
// //console.log(removeBtn)
// for (let i = 0; i < removeBtn.length; i = +1) {
//     var delBtn = removeBtn[i];
//     delBtn.addEventListener('click', function (evt){
//         const carItemsRevove = evt.target.dataset.products;
//         //console.log(evt.target.dataset)
//         if (products && products[carItemsRevove]) {
//             delete products[carItemsRevove];
//             localStorage.setItem(KEY, JSON.stringify(products));
//             updataCart();

//         }
//        updataCart
//         localStorage.getItem('products');
//         carItems = JSON.parse(carItems);
//         Object.values(carItems).map(item => {
//             item.id = 0;

//             localStorage.removeItem('products')

//         })
//         location.reload()
// })
// }