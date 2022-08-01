// Карусель
const owl = $('.owl-carousel');
owl.owlCarousel({
    center: true,
    loop: true,
    margin: 30,
    startPosition: 1,
    items: 3,
});

$('.slider-btn--prev').click(function() {
    owl.trigger('prev.owl.carousel');
});

$('.slider-btn--next').click(function() {
    owl.trigger('next.owl.carousel');
});

// Кнопка навигации
const nav_btn = document.querySelector(".nav_toggle");
const menu_icon = document.querySelector(".menu-icon");
// При клике на объект с классом .nav_toggle
nav_btn.onclick = function(){
    // Запускается функция с тогглом menu-icon-active
    menu_icon.classList.toggle('menu-icon-active');
};
