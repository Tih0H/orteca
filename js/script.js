var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
  },
  mousewheel: true,
  keyboard: true,
});


// const element = document.getElementsByClassName('product_buy');

// element.addEventListener('click', function () {
//   document.getElementById('modal-order').classList.add('modal_active');
// });



document.getElementById("button-order1").onclick = function() {
  document.getElementById('modal-order').classList.add('modal_active');
}
document.getElementById("button-order2").onclick = function() {
  document.getElementById('modal-order').classList.add('modal_active');
}
document.getElementById("button-order3").onclick = function() {
  document.getElementById('modal-order').classList.add('modal_active');
}
document.getElementById("button-order4").onclick = function() {
  document.getElementById('modal-order').classList.add('modal_active');
}
document.getElementById('close-order_x').onclick = function() {
  document.getElementById('modal-order').classList.remove('modal_active');
}
document.getElementById('close-order').onclick = function() {
  document.getElementById('modal-order').classList.remove('modal_active');
}
// document.getElementById('check').onkeydown = function (e) {
//   return !(/^[А-Яа-яA-Za-z ]$/.test(e.key));  // IE > 9
// }

const form = document.getElementById("order-button");
const inputs = form.elements;

const registeredUsers = [
  ["admin", "123456"],
  ["comrade", "123456"],
];

function isValid(username, password) {   
  for(var i = 0; i < registeredUsers.length; i++) {
      var temp = registeredUsers[i];
      if (temp[0] == username) {
        var currentPair = temp;
        break;        
      }        
  }     
  if (currentPair && currentPair[1] == password) {
    return true;           
  } else {
    return false;
  }
}

form.addEventListener('submit', function(e){
  e.preventDefault();
  var username = inputs["login"].value;
  var password = inputs["password"].value;  
    if (!isValid(username, password)){ 
      document.getElementById('submitButton').disabled = true;       
      alert('Неверный логин или пароль');
    } else {      
      document.getElementById('submitButton').disabled = false;
      alert('Верные данные');
    }
});