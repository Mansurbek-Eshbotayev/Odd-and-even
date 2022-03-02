let elForm = document.querySelector(".form");
let elInput = document.querySelector(".form__input");
let elBtn = document.querySelector(".form__button");
let elResult = document.querySelector(".result");


let even = [2,4,8,16,32,];
let odd = [1,3,5,7,];


elForm.addEventListener("submit", function(elr){
  elr.preventDefault();
  
  let elInputVal = Number(elInput.value.trim());
  
  if(elInputVal == "" || elInputVal < 0 || isNaN(elInputVal)){
    elResult.textContent = "Iltimos 0 dan katta raqam kiriting !"
  }
  else if (elInputVal % 2 == 0) {
    elResult.textContent = "Bu Juft son"
    elResult.classList.add("padding");
    even.push(elInputVal);
    console.log(even);
  }
  else {
    elResult.textContent = "Bu Toq son"
    elResult.classList.add("padding");
    odd.push(elInputVal);
    console.log(odd);
  };

  
  elInput.value = "";
});