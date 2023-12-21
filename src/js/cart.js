// import{createMarkupCart} from './template.js'
// const title = document.querySelector('.products-quantity-title')
// const totalPrice = document.querySelector('.products-total-price')
// const container = document.querySelector('.cart-container')
// const KEY = 'products in cart'

// const products = JSON.parse(localStorage.getItem(KEY))

// container.insertAdjacentHTML('beforeend', createMarkupCart(products))
// const productsQuantity = document.querySelectorAll('.products-quantity')
// products.forEach((el, index) => {
//     productsQuantity[index].textContent = el.quantity
// })

// title.textContent = `Cart (${products.length})`
// const total = products.reduce((acc, {quantity, price}) => {
//     return acc += quantity * price
// }, 0)
// totalPrice.textContent = `$${total}`

// const moreBtn = document.querySelectorAll('.more-btn')
// const lessBtn = document.querySelectorAll('.less-btn')

