$(document).ready(function(){

    $('.spiker').slick({
        dots: true,
        infinite: false,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 700,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1
            }
          }
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ]
      });

      const burger = document.querySelector('.burger');
      const navbar = document.querySelector('.mt-mobile');
      const body = document.querySelector('body');
      
      burger.addEventListener('click', () => {
          navbar.classList.toggle('nav-open');
          body.classList.toggle('body-open');
          burger.classList.toggle('burger-open');
          
      });
});