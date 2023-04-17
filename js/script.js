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


document.getElementById('button-order').onclick = function() {
  document.getElementById('modal-order').classList.add('modal_active');
}
document.getElementById('close-order_x').onclick = function() {
  document.getElementById('modal-order').classList.remove('modal_active');
}
document.getElementById('close-order').onclick = function() {
  document.getElementById('modal-order').classList.remove('modal_active');
}