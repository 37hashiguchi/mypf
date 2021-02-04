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
var
cursor = $(".cursor"),
follower = $(".follower"),
cWidth = 8, //カーソルの大きさ
fWidth = 40, //フォロワーの大きさ
delay = 10, //数字を大きくするとフォロワーがより遅れて来る
mouseX = 0, //マウスのX座標
mouseY = 0, //マウスのY座標
posX = 0, //フォロワーのX座標
posY = 0; //フォロワーのX座標

//カーソルの遅延アニメーション
//ほんの少ーーーしだけ遅延させる 0.001秒
TweenMax.to({}, .001, {
  repeat: -1,
  onRepeat: function() {
    posX += (mouseX - posX) / delay;
    posY += (mouseY - posY) / delay;
    
    TweenMax.set(follower, {
        css: {    
          left: posX - (fWidth / 2),
          top: posY - (fWidth / 2)
        }
    });
    
    TweenMax.set(cursor, {
        css: {    
          left: mouseX - (cWidth / 2),
          top: mouseY - (cWidth / 2)
        }
    });
  }
});

//マウス座標を取得
$(document).on("mousemove", function(e) {
    mouseX = e.pageX;
    mouseY = e.pageY;
});

$("a").on({
  "mouseenter": function() {
    cursor.addClass("is-active");
    follower.addClass("is-active");
  },
  "mouseleave": function() {
    cursor.removeClass("is-active");
    follower.removeClass("is-active");
  }
});