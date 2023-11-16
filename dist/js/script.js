$('.navi li').mouseenter(function () {
    var changeImage = $(this).attr('data-image')
    $('.photo').css({
        'background-image': 'url(' + changeImage + ')'
    })
})
$('.navi li').mouseleave(function () {
    $('.photo').css({
        'background-image': ''
    })
})

$(document).ready(function () {
    $('#click').click(function () {
        $('#menu-list').toggleClass('active');
    });

    $(document).click(function (event) {
        var menu = $('#menu-list');
        var menuToggle = $('#click');
        if (!menu.is(event.target) && !menuToggle.is(event.target) && menu.has(event.target).length === 0) {
            menu.removeClass('active');
        }
    });

    $('.has-sub').click(function (event) {
        event.stopPropagation();
        $(this).children('ul').toggleClass('active');
        $(this).siblings().find('ul').removeClass('active');

        // Check if the clicked element is a leaf node with the class "smooth-scroll"
        if ($(this).children('ul').children('#smooth-scroll').length) {
            console.log('Smooth scroll link clicked');
            $('#menu-list').removeClass('active');
        }
        else if ($(this).children('ul').children('.smooth-scroll').length) {
            $('#menu-list').removeClass('active');
        }

        // Expand the submenu of a submenu
        $(this).siblings().find('.has-sub ul').removeClass('active');
        $(this).siblings().find('.has-sub').removeClass('active');
        $(this).find('.has-sub ul').removeClass('active');
        $(this).find('.has-sub').toggleClass('active');
    });

    $('#menu-list li.has-sub ul li a').click(function () {
        $('#menu-list').removeClass('active');
    });
});


$(document).ready(function () {
    $('.grid').imagesLoaded(function () {
        $('.grid').masonry({
            itemSelector: '.grid-item',
            columnWidth: 200,
            gutter: 20
        });
    });
});

const smoothScrollLinks = document.querySelectorAll('.smooth-scroll');

// Добавляем обработчик кликов на каждую ссылку
smoothScrollLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        // Отменяем стандартное поведение ссылки
        event.preventDefault();

        const targetId = link.getAttribute('href');
        console.log(targetId); // убедитесь, что получаете правильный идентификатор элемента

        // Находим элемент, к которому нужно скроллить
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            // Прокручиваем страницу к элементу с плавной анимацией
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

document.addEventListener('DOMContentLoaded', function () {
    let element = document.querySelector('.loader');
    if (element) {
        element.classList.add('hide');
    }
});
