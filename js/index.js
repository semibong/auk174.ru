$(document).ready(function () {
    Fancybox.bind('[data-fancybox]');

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

    if ($('.drop-down').length) {
        let isDropDownBtnHover = false;
        let isDropDownMenuHover = false;

        $('.drop-down-open').on('mouseenter', function () {
            isDropDownBtnHover = true;
            $('.drop-down').addClass('active');
        }).on('mouseleave', function () {
            isDropDownBtnHover = false;
            setTimeout(() => {
                if (!isDropDownMenuHover) {
                    $('.drop-down').removeClass('active');
                }
            }, 10);
        });

        $('.drop-down').on('mouseenter', function () {
            isDropDownMenuHover = true;
        }).on('mouseleave', function () {
            isDropDownMenuHover = false;
            setTimeout(() => {
                if (!isDropDownBtnHover) {
                    $('.drop-down').removeClass('active');
                }
            }, 10);
        });

        $(document).on('scroll', function() {
            if ($(window).scrollTop() >= 200) {
                $('.drop-down').addClass('drop-down_mob');
            } else {
                $('.drop-down').removeClass('drop-down_mob');
            }
        });

        $('.drop-down__list>li>a').on('mouseenter', function () {
            const id = $(this).data('id');
            
            $('.drop-down__list>li>a').removeClass('active');
            $(this).addClass('active');
            $('.drop-down__item').removeClass('active');
            $(`.drop-down__item[data-id="${id}"]`).addClass('active');
        });
    }

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

    if ($('.reviews').length) {
        $('.reviews__header__sources__item').on('click', function () {
            $('.reviews__header__sources__item').removeClass('active');
            $(this).addClass('active');
        });
    }

    if ($('.intelligence__item').length) {
        $('.intelligence__item').each((_, el) => {
            if (!$(el).hasClass('active')) {
                const content = $(el.children[1]);
                content.slideUp(0);
            }
        });

        $('.intelligence__item__header').on('click', function () {
            const parent = $(this.offsetParent);
            const content = $(this).next();

            parent.toggleClass('active');

            if (parent.hasClass('active')) {
                content.slideDown(300);
            } else {
                content.slideUp(300);
            }
        });
    }

    if ($('.form').length) {
        $('.form__input>input').on('input', function () {
            if ($(this).val()) {
                $(this).next().addClass('invisible');
            } else {
                $(this).next().removeClass('invisible');
            }
        });

        let fileText = $('.form__input>input[type=file] + label').text();
        $('.form__input>input[type=file]').on('change', function () {
            if ($(this).val()) {
                $(this).next().text($(this).val());
            } else {
                $(this).next().text(fileText);
            }
        });

        $('.form select').select2({
            width: 'element'
        });
    }

    if ($('.pay').length) {
        $('.pay__form select').select2({
            placeholder: 'Выбрать услугу'
        });
    }
});