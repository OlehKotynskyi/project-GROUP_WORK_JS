document
  .getElementById('subscribeForm')
  .addEventListener('submit', function (event) {
    event.preventDefault();

    var emailInput = document.getElementById('form-input-footer');
    var email = emailInput.value;

    if (!validateEmail(email)) {
      alert('Please enter a valid email address');
      return;
    }

    // Відправляємо дані на сервер за допомогою fetch
    fetch('', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email: email }),
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        console.log('Data sent successfully');
        // Очищаємо поле введення після успішної відправки
        emailInput.value = '';
      })
      .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
      });
  });

// Функція для перевірки коректності введеної електронної пошти
function validateEmail(email) {
  var emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email);
}
