import * as basicLightBox from 'basiclightbox';
import closed from '../img/svg/closed.svg';
import frutX1 from '../img/basket-s-popap/frut-popap-x1.png';
import frutX2 from '../img/basket-s-popap/frut-popap-x2.png';
const form = document.querySelector('#formEmail');
const emailInput = document.querySelector('#formInput');

form.addEventListener('submit', handleFormSubmit);
// emailInput.addEventListener('keyup', handleKeyPress);

function handleFormSubmit(event) {
  event.preventDefault();
  const email = emailInput.value.trim();

  if (!validateEmail(email)) {
    alert('Please enter a valid email address');
    return;
  }

  if (email === '') {
    alert('Please enter an email address');
    return;
  }

  sendDataToServer({ email })
    .then(() => {
      console.log('Data sent successfully');
      emailInput.value = '';
      subModal();
    })
    .catch(error => {
      console.error('There was a problem with the fetch operation:', error);
    });
}

function sendDataToServer(data) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Imitating sending data to server:', data);
      resolve();
    }, 2000);
  });
}

function validateEmail(email) {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email);
}

function subModal() {
  const instance = basicLightBox.create(
    `
   <div class="sub-modal">
      <button class="remove-btn">
         <img class="remove-btn-img" src="${closed}" alt="icon bascket" width="18" height="18">
      </button>
      <div class="sub-modal-content">
         <h2 class="products-titel">Thanks for subscribing for <span>new</span> products</h2>
         <p>We promise you organic and high-quality products that will meet your expectations. Please stay with us and we promise you many pleasant surprises.</p>
      </div>
      <img
      class="sub-modal-pic"
         src="${frutX1}"
         alt="Empty basket"
         srcset="${frutX2}"
      />
   </div>
   `,
    {
      onClose: instance => subModal.removeEventListener('click', modalClose),
    }
  );
  instance.show();
  const subModal = document.querySelector('.sub-modal');
  subModal.addEventListener('click', modalClose);

  function modalClose(evt) {
    if (
      evt.target.className === 'remove-btn' ||
      evt.target.className === 'remove-btn-img'
    ) {
      instance.close();
    }
    return;
  }
}
