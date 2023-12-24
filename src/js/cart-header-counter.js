
function addCounter() {
    const counter = document.querySelector('.header-basket-counter');
    const productsCounter = JSON.parse(localStorage.getItem(KEY));
    if (productsCounter.length == null) {
      counter.textContent = `0`;
    } else {
      counter.textContent = `${productsCounter.length}`;
    }
  }

const KEY = 'products in cart';
function addCounter() {
  const counter = document.querySelector('.header-basket-counter');
  const productsCounter = JSON.parse(localStorage.getItem(KEY));
  if (productsCounter.length == null) {
    counter.textContent = `0`;
  } else {
    counter.textContent = `${productsCounter.length}`;
  }
}
export default addCounter;

