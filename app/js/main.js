$(document).ready(function() {
   
    $('.header__burger-menu').on('click', function() {
        $('.header__mobile-menu').addClass('header__mobile-menu--active');
     });

     $('.header__close-menu').on('click', function() {
        $('.header__mobile-menu').removeClass('header__mobile-menu--active');
     });

});

