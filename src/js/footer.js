const form = document.querySelector('#formEmail');
const emailInput = document.querySelector('#formInput');

form.addEventListener('submit', handleFormSubmit);
emailInput.addEventListener('keyup', handleKeyPress);

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
      })
      .catch(error => {
         console.error('There was a problem with the fetch operation:', error);
      });
}

function handleKeyPress(event) {
   if (event.key === 'Enter') {
      handleFormSubmit(event);
   }
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