let button = document.querySelector(".button__search");
let popup = document.querySelector(".popup");
let adults_decrease = document.querySelector(".button-adults-less");
let adults_increase = document.querySelector(".button-adults-more");
let childs_decrease = document.querySelector(".button-childs-less");
let childs_increase = document.querySelector(".button-childs-more");
let form = document.querySelector(".popup__form");
let arrival = document.querySelector("[name=arrival]");
let departure = document.querySelector("[name=departure]");

button.addEventListener("click", function(evt) {
  evt.preventDefault();
  popup.classList.toggle("popup__hidden");
  popup.classList.remove("form__error");
});

button.addEventListener("click", function(evt) {
  if(popup.classList.contains("popup__hidden")) {
    evt.preventDefault();
  }
  else {
    popup.classList.add("popup__animation");
  }
});

form.addEventListener("submit", function(evt){
  if(!arrival.value || !departure.value) {
    evt.preventDefault();
    popup.classList.add("form__error");
    setTimeout(function(){
      popup.classList.remove("form__error");
    }, 500);
  }
});

adults_increase.addEventListener("click", function(adults) {
  let value = parseInt(document.getElementById("number-of-adults").value, 10);
  value = isNaN(value) ? 0 : value;
  value++;
  document.getElementById("number-of-adults").value = value;
});

adults_decrease.addEventListener("click", function(adults) {
  let value = parseInt(document.getElementById("number-of-adults").value, 10);
  value = isNaN(value) ? 0 : value;
  value < 1 ? value = 1 : '';
  value--;
  document.getElementById("number-of-adults").value = value;
});

childs_increase.addEventListener("click", function(childs) {
  let value = parseInt(document.getElementById("number-of-childs").value, 10);
  value = isNaN(value) ? 0 : value;
  value++;
  document.getElementById("number-of-childs").value = value;
});

childs_decrease.addEventListener("click", function(childs) {
  let value = parseInt(document.getElementById("number-of-childs").value, 10);
  value = isNaN(value) ? 0 : value;
  value < 1 ? value = 1 : '';
  value--;
  document.getElementById("number-of-childs").value = value;
});





