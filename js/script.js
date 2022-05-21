const body = document.body;
const input = document.querySelector('.input__item');
const mainBtn = document.querySelector('.main__btn');
const validMsg = document.querySelector('.valid__msg');
const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;





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