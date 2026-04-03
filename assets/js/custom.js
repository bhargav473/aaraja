/*-----------------------------------------------------------------------------------

    Template Name: Elite Cart

    Note: This is Custom Js file

-----------------------------------------------------------------------------------

    [Table of contents]


      01. mobile-nav
      02. countNum
      03. accordion-item
      04. progress_bar
      05. scrollTop
      06. hero-one-slider
      07. mu-our-project-slider
      08. img-slider
      09. customer-reviews-img-slider
      10. customer-reviews-slider
      11. browse-categorie-slider
      12. new-product-slider
      13. healthcare-product-slider
      14. partners-slider
      15. new-arrival-slider
      16. customer-three-slider
      17. weekly-deals-slider
      18. blog-slider
      19. blog-slider-two
      20. carousel-img-slider
      21. Count Down Timer
      22. noUiSlider
      23. WOW
      24. input add count
      25. li-pd-imgs
      26. product-detail-popup
       

-----------------------------------------------------------------------------------*/


jQuery(document).ready(function ($) {

  /* 01. mobile-nav */
  $('.mobile-nav .menu-item-has-children').on('click', function (event) {
    $(this).toggleClass('active');
    event.stopPropagation();
  });

  $('#mobile-menu').click(function () {
    $(this).toggleClass('open');
    $('#mobile-nav').toggleClass('open');
  });

  $('#desktop-menu').click(function () {
    $(this).toggleClass('open');
    $('.desktop-menu').toggleClass('open');
  });

  $('#res-cross').click(function () {
    $('#mobile-nav').removeClass('open');
    $('#mobile-menu').removeClass('open')
  });


  // $('.lookbook-tag').hover(function() {
  //   $(this).find('.product-info').fadeToggle(200);
  // });

  $('.lookbook-tag').hover(function () {
    $('.lookbook-tag').removeClass('active');
    $(this).addClass('active');
  });
});

/* 02. countNum */
function inVisible(element) {
  var WindowTop = $(window).scrollTop();
  var WindowBottom = WindowTop + $(window).height();
  var ElementTop = element.offset().top;
  var ElementBottom = ElementTop + element.height();
  if ((ElementBottom <= WindowBottom) && ElementTop >= WindowTop)
    animate(element);
}

function animate(element) {
  if (!element.hasClass('ms-animated')) {
    var maxval = element.data('max');
    var html = element.html();
    element.addClass("ms-animated");
    $({
      countNum: element.html()
    }).animate({
      countNum: maxval
    }, {
      duration: 5000,
      easing: 'linear',
      step: function () {
        element.html(Math.floor(this.countNum) + html);
      },
      complete: function () {
        element.html(this.countNum + html);
      }
    });
  }
}
$(function () {
  $(window).scroll(function () {
    $("h2[data-max]").each(function () {
      inVisible($(this));
    });
  })
});

function inVisible(element) {
  var WindowTop = $(window).scrollTop();
  var WindowBottom = WindowTop + $(window).height();
  var ElementTop = element.offset().top;
  var ElementBottom = ElementTop + element.height();
  if ((ElementBottom <= WindowBottom) && ElementTop >= WindowTop)
    animate(element);
}

function animate(element) {
  if (!element.hasClass('ms-animated')) {
    var maxval = element.data('max');
    var html = element.html();
    element.addClass("ms-animated");
    $({
      countNum: element.html()
    }).animate({
      countNum: maxval
    }, {
      duration: 5000,
      easing: 'linear',
      step: function () {
        element.html(Math.floor(this.countNum) + html);
      },
      complete: function () {
        element.html(this.countNum + html);
      }
    });
  }

}
$(function () {
  $(window).scroll(function () {
    $("h2[data-max]").each(function () {
      inVisible($(this));
    });
  })
});


// end


/* 03. accordion-item */

$('.accordion-item .heading').on('click', function (e) {
  e.preventDefault();

  if ($(this).closest('.accordion-item').hasClass('active')) {
    $('.accordion-item').removeClass('active');
  } else {
    $('.accordion-item').removeClass('active');

    $(this).closest('.accordion-item').addClass('active');
  }
  var $content = $(this).next();
  $content.slideToggle(100);
  $('.accordion-item .content').not($content).slideUp('fast');
});

// end 

/* 04. progress_bar */

function progress_bar() {
  var speed = 30;
  var items = $('.progress_bar').find('.progress_bar_item');

  items.each(function () {
    var item = $(this).find('.progress');
    var itemValue = item.data('progress');
    var i = 0;
    var value = $(this);

    var count = setInterval(function () {
      if (i <= itemValue) {
        var iStr = i.toString();
        item.css({
          'width': iStr + '%'
        });
        value.find('.item_value').html(iStr + '%');
      }
      else {
        clearInterval(count);
      }
      i++;
    }, speed);
  });
}

/* 05. scrollTop */
function scrollTopPercentage() {
  const scrollPercentage = () => {
    const scrollTopPos = document.documentElement.scrollTop;
    const calcHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollValue = Math.round((scrollTopPos / calcHeight) * 100);
    const scrollElementWrap = $("#scroll-percentage");

    scrollElementWrap.css("background", `conic-gradient( #D9380C ${scrollValue}%, #fff ${scrollValue}%)`);

    // ScrollProgress
    if (scrollTopPos > 100) {
      scrollElementWrap.addClass("active");
    } else {
      scrollElementWrap.removeClass("active");
    }

    if (scrollValue < 99) {
      $("#scroll-percentage-value").text(`${scrollValue}%`);
    } else {
      $("#scroll-percentage-value").html('<i class="fa-solid fa-arrow-up-long"></i>');
    }
  }
  window.onscroll = scrollPercentage;
  window.onload = scrollPercentage;
  // Back to Top
  function scrollToTop() {
    document.documentElement.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }
  $("#scroll-percentage").on("click", scrollToTop);
}
scrollTopPercentage();


if (typeof Swiper !== 'undefined') {
  /* 06. hero-one-slider */

  var swiper = new Swiper(".hero-one-slider", {
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    speed: 1000,
    effect: "fade",
    freeMode: true,
    autoplay: {
      delay: 4000,
    },
    pagination: {
      el: ".swiper-pagination",
    },
    navigation: {
      nextEl: ".hero-next",
      prevEl: ".hero-prev",
    },
  });
  /* 07. mu-our-project-slide */
  var swiper = new Swiper(".product-elevate-slider", {
    spaceBetween: 30,
    loop: true,
    speed: 1000,
    freeMode: true,
    autoplay: {
      delay: 2000,
    },
    breakpoints: {
      10: {
        slidesPerView: 1,
      },
      556: {
        spaceBetween: 2,
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      1200: {
        slidesPerView: 4,
      },
    },
  });
  /* 08. img-slider */
  var swiper = new Swiper(".img-slider", {
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    speed: 1000,
    freeMode: true,
    autoplay: {
      delay: 2000,
    },
    pagination: {
      el: ".swiper-pagination",
    },
  });
  /* 09. customer-reviews-img-slider */ 
  var swiper = new Swiper(".customer-reviews-img-slider", {
    spaceBetween: 10,
    slidesPerView: 6,
    freeMode: true,
    watchSlidesProgress: true,
  });
  /* 10. customer-reviews-slider */ 
  var swiper2 = new Swiper(".customer-reviews-slider", {
    spaceBetween: 0,
    autoplay: {
      delay: 4000,
    },
    thumbs: {
      swiper: swiper,
    },
  });
  /* 11. browse-categorie-slider */ 
  var swiper = new Swiper(".browse-categorie-slider", {
    slidesPerView: 6,
    spaceBetween: 30,
    loop: true,
    speed: 1000,
    freeMode: true,
    autoplay: {
      delay: 2000,
    },
    navigation: {
      nextEl: ".custom-two-next",
      prevEl: ".custom-two-prev",
    },
    breakpoints: {
      10: {
        slidesPerView: 1,
      },
      556: {
        spaceBetween: 2,
      },
      767: {
        spaceBetween: 4,
      },
      992: {
        slidesPerView: 5,
      },
      1200: {
        slidesPerView: 6,
      },
    },
  });
  /* 12. new-product-slider */ 
  var swiper = new Swiper(".new-product-slider", {
    slidesPerView: 5,
    spaceBetween: 20,
    loop: true,
    speed: 1000,
    freeMode: true,
    autoplay: {
      delay: 2000,
    },
    pagination: {
      el: ".swiper-pagination",
    },
    breakpoints: {
      10: {
        slidesPerView: 1,
      },
      556: {
        spaceBetween: 2,
      },
      767: {
        spaceBetween: 3,
      },
      992: {
        slidesPerView: 4,
      },
      1200: {
        slidesPerView: 5,
      },
    },
  });
  /* 13. healthcare-product-slider */ 
  var swiper = new Swiper(".healthcare-product-slider", {
    spaceBetween: 20,
    loop: true,
    speed: 1000,
    freeMode: true,
    autoplay: {
      delay: 2000,
    },
    navigation: {
      nextEl: ".custom-next",
      prevEl: ".custom-prev",
    },
    breakpoints: {
      10: {
        slidesPerView: 1,
      },
      556: {
        spaceBetween: 2,
      },
      767: {
        spaceBetween: 3,
      },
      992: {
        slidesPerView: 2,
      },
      1200: {
        slidesPerView: 3,
      },
    },
  });
  /* 14. partners-slider */ 

  var swiper = new Swiper(".partners-slider", {
    spaceBetween: 20,
    loop: true,
    speed: 1000,
    freeMode: true,
    autoplay: {
      delay: 2000,
    },
    breakpoints: {
      10: {
        slidesPerView: 1,
      },
      556: {
        spaceBetween: 2,
      },
      767: {
        spaceBetween: 3,
      },
      992: {
        slidesPerView: 4,
      },
      1200: {
        slidesPerView: 5,
      },
    },
  });
  /* 15. new-arrival-slider */ 
  var swiper = new Swiper(".new-arrival-slider", {
    spaceBetween: 20,
    loop: true,
    speed: 1000,
    freeMode: true,
    autoplay: {
      delay: 2000,
    },
    navigation: {
      nextEl: ".custom-two-next",
      prevEl: ".custom-two-prev",
    },
    breakpoints: {
      10: {
        slidesPerView: 1,
      },
      556: {
        spaceBetween: 2,
      },
      767: {
        spaceBetween: 2,
      },
      992: {
        slidesPerView: 3,
      },
      1200: {
        slidesPerView: 5,
      },
    },
  });
  /* 16. customer-three-slider */ 
  var swiper = new Swiper(".customer-three-slider", {
    spaceBetween: 20,
    loop: true,
    speed: 1000,
    freeMode: true,
    centeredSlides: true,
    autoplay: {
      delay: 2000,
    },
    navigation: {
      nextEl: ".custom-three-next",
      prevEl: ".custom-three-prev",
    },
    breakpoints: {
      10: {
        slidesPerView: 1,
      },
      767: {
        spaceBetween: 2,
      },
      992: {
        slidesPerView: 2,
      },
    },
  });
  /* 17. weekly-deals-slider */ 
  var swiper = new Swiper(".weekly-deals-slider", {
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    speed: 1000,
    freeMode: true,
    autoplay: {
      delay: 2000,
    },
    navigation: {
      nextEl: ".custom-weekly-next",
      prevEl: ".custom-weekly-prev",
    },
  });
  /* 18. blog-slider */ 
  var swiper = new Swiper(".blog-slider", {
    spaceBetween: 20,
    loop: true,
    speed: 1000,
    freeMode: true,
    autoplay: {
      delay: 2000,
    },
    pagination: {
      el: ".swiper-pagination",
    },
    breakpoints: {
      10: {
        slidesPerView: 1,
      },
      767: {
        spaceBetween: 2,
      },
      992: {
        slidesPerView: 2,
      },
    },
  });
  /* 19. blog-slider-two */ 
  var swiper = new Swiper(".blog-slider-two", {
    spaceBetween: 20,
    loop: true,
    speed: 1000,
    freeMode: true,
    autoplay: {
      delay: 2000,
    },
    pagination: {
      el: ".swiper-pagination",
    },
    breakpoints: {
      10: {
        slidesPerView: 1,
      },
      767: {
        spaceBetween: 2,
      },
      992: {
        slidesPerView: 3,
      },
    },
  });
  /* 20. carousel-img-slider */ 
  var swiper = new Swiper(".carousel-img-slider", {
    slidesPerView: 2,
    spaceBetween: 10,
    loop: true,
    speed: 1000,
    freeMode: true,
    autoplay: {
      delay: 2000,
    },
    navigation: {
      nextEl: ".custom-three-next",
      prevEl: ".custom-three-prev",
    },
    breakpoints: {
      10: {
        slidesPerView: 1,
      }, 
      1200: {
        slidesPerView: 2,
      },
    },
  });
}


/* 21. Count Down Timer */
$(function () {
  $('[data-countdown]').each(function () {
    var $this = $(this), finalDate = $(this).data('countdown');
    $this.countdown(finalDate, function (event) {
      //$this.child.html(('%D'));
      $this.html(event.strftime('<li><span id="days">%D</span>Days</li><li><span id="hours">%H</span>Hours</li><li><span id="minutes">%M</span>Min</li><li><span id="sec">%S</span>Sec</li>'))
    }).on('finish.countdown', function () {
      alert("Finish");
    });
  });
});
$(function () {

  $('[data-timing]').each(function () {
    var today = new Date;
    const day = today.getDate();
    const month = today.getMonth() + 1;
    const year = today.getFullYear();
    var constdatee = day + '/' + month + '/' + year;

    var $this = $(this), finalDate = constdatee + ' ' + $(this).data('timing');
    //var finalDate = constdatee+' '+$(this).data('countdown2');

    $this.countdown(finalDate, function (event) {
      //$this.child.html(('%D'));
      $this.html(event.strftime('%H:%M:%S'))
    })
  });

});

/* 22. noUiSlider */
document.addEventListener('DOMContentLoaded', function () {
  const slider = document.getElementById('price-slider');

  // Check if noUiSlider is loaded properly
  if (typeof noUiSlider !== 'undefined' && $.isFunction(noUiSlider.create)) {

    noUiSlider.create(slider, {
      start: [0, 578],
      connect: true,
      range: {
        min: 0,
        max: 1000
      },
      step: 1,
      tooltips: false
    });

    const minPrice = document.getElementById('min-price');
    const maxPrice = document.getElementById('max-price');

    slider.noUiSlider.on('update', function (values, handle) {
      const value = Math.round(values[handle]);
      if (handle === 0) {
        minPrice.textContent = value;
      } else {
        maxPrice.textContent = value;
      }
    });

  }  
});
 

/* 23. WOW */
        new WOW().init();

  /* 24. input add count */
$('.add').click(function () {
  var th = $(this).closest('.wrap').find('.count');
  th.val(+th.val() + 1);
});
$('.sub').click(function () {
  var th = $(this).closest('.wrap').find('.count');
  if (th.val() > 1) th.val(+th.val() - 1);
});


/* 25. li-pd-imgs */
$('.li-pd-imgs').on('click', function () {

  var img_src = "";

  $('.li-pd-imgs.nav-active').removeClass('nav-active');

  $(this).addClass('nav-active');

  img_src = $(this).find('img').attr('src');

  $('.pd-main-img').children('img').attr('src', img_src);

});

/* 26. product-detail-popup */

$(".woosq-btn").click(function() {
  $(".product-detail-popup").addClass("active").show();
});

$(".woosq-btn-close").click(function() {
  $(".product-detail-popup").removeClass("active").hide();
});