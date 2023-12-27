document.addEventListener('DOMContentLoaded', async () => {
  const products = JSON.parse(localStorage.getItem(KEY)) || [];

  products.forEach(async (product) => {
     const selectedItem = document.getElementById(product._id);
     if (selectedItem) {
        const button = selectedItem.querySelector('button');
        if (button) {
           button.disabled = true;
        }
     }
  });
});