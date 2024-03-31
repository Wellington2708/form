const email = document.querySelector('.email');
const button = document.getElementById('button');
const container = document.querySelector('.container');

button.addEventListener('click', (e) => {
    e.preventDefault();
    const emailValue = email.value;
    container.innerHTML = `

    <div class="alert-success">
    <img src="./assets/images/icon-success.svg" alt="">
    <h1 class="title__success"> Thanks for subscribing! </h1>
    <p class="email__confirmation">
      A confirmation email has been sent to <strong>${emailValue}</strong>. 
      Please open it and click the button inside to confirm your 
      subscription.
    </p>
    <button class="button">Dismiss message</button>
    </div>
    <style>
    .container {
       magin: 0 auto;
    }
    body {

    }
    </style>
`

})
