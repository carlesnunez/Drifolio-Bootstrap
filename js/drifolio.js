//==========================================================
//Replace srizon with your dribbble username
//==========================================================
$.jribbble.getShotsByPlayerId('srizon', function (playerShots) {
    var html = [];


//========================
//PORTFOLIO SETUP
//========================
    $.each(playerShots.shots, function (i, shot) {
        html.push('<li><a href="' + shot.url + '">');
        html.push('<img src="' + shot.image_teaser_url + '" ');
        html.push('alt="' + shot.title + '"></a>');
        html.push('<h3><a href="' + shot.url + '">' + shot.title + '</h3>');
        html.push('<div class="likecount"><span class="icon-heart"></span> ' + shot.likes_count + '</div>');
        html.push('<div class="commentcount"><span class="icon-bubbles"></span> ' + shot.comments_count + '</a></li></div>');
    });

    $('#shotsByPlayerId').html(html.join(''));
}, {page: 1, per_page: 9});

//========================
//PRELOADER
//========================
$(window).load(function() { // makes sure the whole site is loaded
	$('#status').fadeOut(); // will first fade out the loading animation
	$('#preloader').delay(350).fadeOut('slow');
    // will fade out the white DIV that covers the website.
	$('body').delay(350).css({'overflow':'visible'});
})
//========================
//CUSTOM SCROLLBAR
//========================
$("html").niceScroll({
    mousescrollstep: 70,
    cursorcolor: "#ea9312",
    cursorwidth: "5px",
    cursorborderradius: "10px",
    cursorborder: "none",
});


//========================
//SMOOTHSCROLL
//========================
$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});


//========================
//NAVBAR
//========================
(function ($) {
  $(document).ready(function(){

    // hide .navbar first
    $(".navbar").hide();

    // fade in .navbar
    $(function () {
        $(window).scroll(function () {

                 // set distance user needs to scroll before we start fadeIn
            if ($(this).scrollTop() > 40) {
                $('.navbar')
                .removeClass('animated fadeOutUp')
                .addClass('animated fadeInDown')
                .fadeIn();
                
            } else {
                $('.navbar')
                .removeClass('animated fadeInDown')
                .addClass('animated fadeOutUp')
                .fadeOut();
            }
        });
    });

});
  }(jQuery));

//========================
//icon hover effect
//========================
$('#services img').hover(
       function(){ $(this).addClass('animated pulse') },
       function(){ $(this).removeClass('animated pulse') })
       
$(document).ready(function(){
  let width, height;
let pixels = [];
let coloredPixels = [];
let colors = ['#540045', '#C60052', '#FF714B', '#EAFF87', '#ACFFE9'];
let currentPixel = 0;
const mousePosition = { x: window.innerWidth/2, y: window.innerHeight/2 };

const canvas = $('#hero-canvas')[0];
const ctx = canvas.getContext('2d');
width = $("#hero").width();
height = $("#hero").height();
canvas.width = width;
canvas.height = height;
const drawGrid = () => {
  ctx.clearRect(0, 0, width, height);
  
  for (var i = 0, l = pixels.length; i < l; i++) {
    pixels[i][4] = 0;
  }
  
  for (var i = 0, l = coloredPixels.length; i < l; i++) {
    var pix = Math.floor(coloredPixels[i].y/10)*(Math.floor(width/10)+1) + Math.floor(coloredPixels[i].x/10);
    if (pixels[pix]) {
      pixels[pix][4] = coloredPixels[i].color;
      pixels[pix][5] = coloredPixels[i].alpha;
    }
    
    if (coloredPixels[i].alpha > 0) coloredPixels[i].alpha -= 0.008;
    if (coloredPixels[i].alpha < 0) coloredPixels[i].alpha = 0;
    coloredPixels[i].x += coloredPixels[i].vx;
    coloredPixels[i].y += coloredPixels[i].vy;
  }
  
  for (var i = 0, l = pixels.length; i < l; i++) {
    ctx.globalAlpha = 1;
    ctx.fillStyle = '#222';
    ctx.fillRect(pixels[i][0], pixels[i][1], pixels[i][2], pixels[i][3]);
    ctx.globalAlpha = pixels[i][5];
    ctx.fillStyle = pixels[i][4];
    ctx.fillRect(pixels[i][0], pixels[i][1], pixels[i][2], pixels[i][3]);
  }
}

const resize = () => {
  width = $("#hero").width();
  height = $("#hero").height();
  canvas.width = width;
  canvas.height = height;
  pixels = [];
  for (var y = 0; y < height/10; y++) {
    for (var x = 0; x < width/10; x++) {
      pixels.push([x*10, y*10, 8, 8, '#222', 1]);
    }
  }
}

const draw = () => {
  launchPixel();
  launchPixel();
  drawGrid();
  requestAnimationFrame(draw);
}

const initColoredPixels = () => {
  for (var i = 0; i < 300; i++) {
    coloredPixels.push({
      x: width/2,
      y: height/2,
      alpha: 0,
      color: colors[i%5],
      vx: -1 + Math.random()*2,
      vy: -1 + Math.random()*2
    })
  }
}

const launchPixel = () => {
  coloredPixels[currentPixel].x = mousePosition.x;
  coloredPixels[currentPixel].y = mousePosition.y;
  coloredPixels[currentPixel].alpha = 1;
  
  currentPixel++;
  if (currentPixel > 299) currentPixel = 0;
}

resize();
initColoredPixels();
draw();

window.addEventListener('resize', resize);
window.addEventListener('mousemove', function(e) {
  mousePosition.x = e.pageX;
  mousePosition.y = e.pageY;
})

const touchMove = (e) => {
  //e.preventDefault();
  mousePosition.x = e.touches[0].pageX;
  mousePosition.y = e.touches[0].pageY;
}

$("#hero-canvas").on('touchstart', touchMove);
$("#hero-canvas").on('touchmove', touchMove);
});