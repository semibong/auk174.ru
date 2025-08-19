$(document).ready(function () {
    var bvi = new isvek.Bvi();

    $('input[type=tel]').inputmask({
        mask: '+7 (*{1}99) 999-99-99',
        placeholder: "+7 (___) ___-__-__",
        definitions: {
            '*': {
                validator: "[0-6,9]"
            }
        }
    });

    let scrollTop = 0;
    window.addEventListener('scroll', function () {
        if (!$('body').hasClass('noscroll')) {
            scrollTop = window.scrollY;
        }
    });

    $('.header__burger-btn').on('click', function () {
        const burger = $('.burger');
        const body = $('body');
        
        burger.toggleClass('burger-opened');

        if (burger.hasClass('burger-opened')) {
            body.addClass('noscroll');
            body.css('top', `-${scrollTop}px`);
        } else {
            body.removeClass('noscroll');
            window.scroll(0, scrollTop);
        }
    });

    $('.burger__close').on('click', function () {
        $('.burger').removeClass('burger-opened');
        $('body').removeClass('noscroll');
        window.scroll(0, scrollTop);
    });

    $(document).on('scroll', function() {
        if ($(window).scrollTop() >= 200) {
            $('.header-fixed').addClass('header-fixed_mob');
        } else {
            $('.header-fixed').removeClass('header-fixed_mob');
        }

        if ($(window).scrollTop() >= 800) {
            $('.up').removeClass('up-invisible');
        } else {
            $('.up').addClass('up-invisible');
        }
    });

    $('.up').on('click', () => {
        const body = $("html, body");
        body.animate({
            scrollTop: 0
        }, 500, 'swing');
    });

    if ($('.banner').length) {
        const bannerSlider = new Swiper('.banner__slider .swiper', {
            speed: 1000,
            loop: true,
            effect: 'fade',
            autoplay: {
                delay: 3000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true
            },
            navigation: {
                prevEl: '.banner .slider-arrow-prev',
                nextEl: '.banner .slider-arrow-next'
            },
            pagination: {
                el: '.banner .slider-progressbar',
                type: 'progressbar',
            }
        });
    }

    if ($('.why').length) {
        const whySlider = new Swiper('.why__slider .swiper', {
            speed: 1000,
            loop: true,
            slidesPerView: 1.3,
            spaceBetween: 10,
            centeredSlides: false,
            effect: 'coverflow',
            coverflowEffect: {
                rotate: 0,
                depth: 100,
                modifier: 1,
                scale: 0.9,
                slideShadows: false
            },
            autoplay: {
                delay: 3000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true
            },
            navigation: {
                prevEl: '.why .slider-arrow-prev',
                nextEl: '.why .slider-arrow-next'
            },
            pagination: {
                el: '.why .slider-progressbar',
                type: 'progressbar',
            },
            breakpoints: {
                320: {
                    effect: 'slide',
                },
                993: {
                    effect: 'coverflow',
                    slidesPerView: 3,
                    spaceBetween: 20,
                    centeredSlides: true,
                },
            }
        });
    }

    if ($('.clients').length) {
        const clientsSlider = new Swiper('.clients__slider .swiper', {
            speed: 1000,
            freeMode: true,
            slidesPerView: 3,
            spaceBetween: 20,
            autoplay: {
                delay: 3000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true
            },
            grid: {
                rows: 3,
                fill: 'row'
            },
            breakpoints: {
                993: {
                    slidesPerView: 9,
                    spaceBetween: 50,
                }
            }
        });
    }
});