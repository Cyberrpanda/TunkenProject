const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },



});


document.getElementById('hamburger-toggle').addEventListener('click', function () {
  this.parentNode.classList.toggle('open');
  this.parentNode.style.height = this.parentNode.classList.contains('open') ? '100vh' : '0';
  document.body.classList.toggle('no-scroll');
})