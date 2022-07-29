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
document.querySelector('.menu-icon-wrapper').onclick = function(){
    document.querySelector('.menu-icon').classList.toggle('menu-icon-active');
}