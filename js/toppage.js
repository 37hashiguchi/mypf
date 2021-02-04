

// スライダー---------------------------------------------
$('.slider-for').slick({
slidesToShow: 1,
slidesToScroll: 1,
arrows: false,
fade: true,
asNavFor: '.slider-nav'
});
$('.slider-nav').slick({
slidesToShow: 3,
slidesToScroll: 1,
asNavFor: '.slider-for',
dots: true,
centerMode: true,
focusOnSelect: true
});
//ファーストビューの文字-------------------------------
$(function() {
var h1 = $('h1');
var txt_array = h1.text().split('');
$('h1').html('');
$.each(txt_array, function(index, element) {
var new_element = $("<span/>").text(element).css({ opacity: 0 });
    h1.append(new_element);
    new_element.delay(index * 50);
    new_element.animate({opacity: 1}, 1000);
  });
});
//トップボタン----------------------------------------
$(function() {
var topBtn = $('#page-top');    
topBtn.hide();
//スクロールが100に達したらボタン表示
$(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
        topBtn.fadeIn();
    } else {
        topBtn.fadeOut();
    }
});
//スクロールしてトップ
topBtn.click(function () {
    $('body,html').animate({
        scrollTop: 0
    }, 500);
    return false;
});
});
//カーソル-------------------------------------------
// CURSOR
var cursor = $(".cursor"),
follower = $(".cursor-follower");

var posX = 0,
    posY = 0;
var mouseX = 0,
    mouseY = 0;

TweenMax.to({}, 0.01, {
  repeat: -1,
  onRepeat: function() {
    posX += (mouseX - posX) / 9;
    posY += (mouseY - posY) / 9;
    TweenMax.set(follower, {
        css: {
        left: posX - 36,
        top: posY - 40
        }
    });
    TweenMax.set(cursor, {
        css: {
        left: mouseX,
        top: mouseY
        }
    });
  }
});

$(document).on("mousemove", function(e) {
    mouseX = e.clientX;
    mouseY = e.clientY;
});
// yellow circle
$(".link").on("mouseenter", function() {
    cursor.addClass("active");
    follower.addClass("active");
});
$(".link").on("mouseleave", function() {
    cursor.removeClass("active");
    follower.removeClass("active");
});