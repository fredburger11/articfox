// JavaScript for product carousel

$(document).ready(function () {
    $('.product-images').slick({
      arrows: true, // Show navigation arrows
      prevArrow: '<button class="slick-prev" aria-label="Previous"></button>',
      nextArrow: '<button class="slick-next" aria-label="Next"></button>',
      adaptiveHeight: true, // Adjust carousel height based on image height
      autoplay: true, // Autoplay the carousel
      autoplaySpeed: 3000, // Autoplay interval in milliseconds
    });
  });
  