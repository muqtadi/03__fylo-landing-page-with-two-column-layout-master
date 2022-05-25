const body = document.body;
const input = document.querySelector('.input__item');
const mainBtn = document.querySelector('.main__btn');
const validMsg = document.querySelector('.valid__msg');
const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const emailInput = document.querySelector('.email__input');
const emailBtn = document.querySelector('.email__btn ');
const emailError = document.querySelector('.email__error');





mainBtn.addEventListener('click', () =>{
  if(input.value === ''){
    input.style.border = '1px solid rgb(219, 101, 136)';
  }
  if(input.value.match(validRegex)){
    console.log(input.value);
    validMsg.style.display = 'none';
    input.value = '';
  }
  else{
    validMsg.style.display = 'block';
    input.value = '';
  }
})



emailBtn.addEventListener('click', () =>{
  if(emailInput.value === ''){
    emailError.style.display = 'none';
    emailInput.style = 'border: 2px solid rgb(166,107,135)';

  }
  if(emailInput.value.match(validRegex)){
    console.log(emailInput.value);
    emailInput.style = 'border: 1px solid )';
    emailInput.value = '';
    emailError.style.display = 'none';
  }
  else{
    emailInput.style = 'border: 2px solid rgb(166,107,135)';
    emailError.style.display = 'block';
  }
})