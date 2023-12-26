const KEY = 'products in cart';
function addCounter() {
  const counter = document.querySelector('.header-basket-counter');
  const productsCounter = JSON.parse(localStorage.getItem(KEY));
  if (productsCounter === null || productsCounter.length === 0) {
    counter.textContent = `0`;
  } else {
    counter.textContent = `${productsCounter.length}`;
  }
}
export default addCounter;

