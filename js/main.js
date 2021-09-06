let month = 3;
let investment = 500;

function month_prettify(n) {
    return Math.ceil(n);
}

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function investment_prettify(n, coma = true) {
    let r = Math.ceil(n / 250) * 250;
    return coma ? numberWithCommas(r) : r;
}


function calcProfit() {
    const p = numberWithCommas(month * investment * 2 + investment);
    console.log(month, investment)
    $('#profit').html(`${p}$`)
    return
}

$("#input-0").ionRangeSlider({
    skin: "round",
    min: 250,
    max: 10000,
    from: 500,
    step: 1,
    postfix: "$",
    prettify_separator: ",",
    prettify: investment_prettify,
    onStart: function (data) {
        investment = investment_prettify(data.from, false);
        $('#investment').html(`${numberWithCommas(investment)}$`);
        calcProfit();
    },
    onChange: function (data) {

        investment = investment_prettify(data.from, false);
        console.log(investment)
        $('#investment').html(`${numberWithCommas(investment)}$`);
        calcProfit();

    }
});

$("#input-1").ionRangeSlider({
    skin: "round",
    min: 1,
    max: 12,
    from: 3,
    step: 0.01,
    postfix: " month",
    prettify: month_prettify,
    onStart: function (data) {
        month = month_prettify(data.from);
        $('#period').html(`${month} Month`);
        calcProfit();
    },
    onChange: function (data) {
        month = month_prettify(data.from);
        $('#period').html(`${month} Month`);
        calcProfit();
    }
});

const headerHeight = $('.header').height();
$(document).ready(function ($) {
    if ($(window).width() >= '768') {
        $('#main-content').css({'paddingTop': headerHeight + 'px'});
    }
})

$(window).scroll(function () {
    if ($(this).scrollTop() > headerHeight) {
        $('.header').addClass('header--scrolled');
    } else if ($(this).scrollTop() == 0) {
        $('.header').removeClass('header--scrolled');
    }

});

$(function () {
    window.addEventListener("mousemove", function (e) {
        let layers = $(".parallax__mousemove");
        layers.each(function () {
            let _w = window.innerWidth / 2;
            let _h = window.innerHeight / 2;
            let _mouseX = e.clientX;
            let _mouseY = e.clientY;
            let speed = $(this).attr('data-speed');

            let _depth1 = `${50 - (_mouseX - _w) * 0.01}% ${50 - (_mouseY - _h) * 0.01 * speed}%`;
            let _depth2 = `${50 - (_mouseX - _w) * 0.02}% ${50 - (_mouseY - _h) * 0.02 * speed}%`;
            let _depth3 = `${50 - (_mouseX - _w) * 0.06}% ${50 - (_mouseY - _h) * 0.06 * speed}%`;

            let x = `${_depth1}, ${_depth2}, ${_depth3}`;

            $(this).attr("style", `background-position: ${x}`);
        });
    });
});

$(function () {
    window.addEventListener("scroll", function (event) {
        console.log('in')

        let top = this.pageYOffset;

        let layers = $(".parallax__scroll");
        let speed;
        layers.each(function () {
            speed = $(this).attr('data-speed');
            var yPos = -(top * speed / 100);
            $(this).attr('style', 'transform: translate3d(0px, ' + yPos + 'px, 0px)');
        });
    });
});

$(document).ready(function ($) {
    $('.plans__slick__slider').slick({
        // centerMode: true,
        slidesToShow: 3,
        infinite: false,
        // autoplay: true,
        arrows : false,
        initialSlide:0,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 990,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 650,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
})