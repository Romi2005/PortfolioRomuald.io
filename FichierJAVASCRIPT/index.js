

$('#header').prepend('<div id="menu-icon"><span class="first"></span><span class="second"></span><span class="third"></span></div>');
  
$("#menu-icon").on("click", function(){
  $("nav").slideToggle();
  $(this).toggleClass("active");
});


// script.js
document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.getElementById("menu-toggle");
  const menu = document.querySelector(".menu");

  menuToggle.addEventListener("click", function () {
      menu.classList.toggle("active");
  });
});
