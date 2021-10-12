// <!-- Minified Footbridge Scripts v2.0 -->
// <!-- Added mobile menu script -->
// <!-- Fade Banner -->
$(document).ready(function() {
$(function(){
	$('.banner img').hide();
	$('.banner img:first-child').show();
	setInterval(function(){$('.banner img:first-child').fadeOut(1000).next('img').fadeIn().end().appendTo('.banner');}, 5000);
});
// <!-- Fade Banner Deluxe -->
$(function(){
	$('.banner-deluxe .deluxe-slide').hide();
	$('.banner-deluxe .deluxe-slide:first-child').show();
	setInterval(function(){$('.banner-deluxe .deluxe-slide:first-child').fadeOut(1000).next('.banner-deluxe .deluxe-slide').fadeIn().end().appendTo('.banner-deluxe');}, 5000);
});
// <!-- Scrolling Banner -->
var scrollBanner_count; var scrollBanner_interval; var old_scrollBanner = 0; var current_scrollBanner = 0; var container_Width = $(window).width();$('.scrollLeftBanner p').css('left',container_Width);$('.scrollLeftBanner p').first().css('left',0); scrollBanner_count = $(".scrollLeftBanner p").size(); $(".scrollLeftBanner p:eq("+current_scrollBanner+")").css('left','0px'); scrollBanner_interval = setInterval(scrollBanner_rotate,5000);function scrollBanner_rotate() { current_scrollBanner = (old_scrollBanner + 1) % scrollBanner_count;$(".scrollLeftBanner p:eq(" + old_scrollBanner + ")").animate({left: -container_Width},"slow", function() { $(this).css('left',container_Width + 'px'); }); $(".scrollLeftBanner p:eq(" + current_scrollBanner + ")").show().animate({left: -10},"slow"); $(".scrollLeftBanner p:eq(" + current_scrollBanner + ")").show().animate({left: 0},300);old_scrollBanner = current_scrollBanner; }
// <!-- Scrolling Testimonials -->
var scrollText_count; var scrollText_interval; var old_scrollText = 0; var current_scrollText = 0; var container_Height = 180;$('.scrollText p').css('top',container_Height);$('.scrollText p').first().css('top',0); scrollText_count = $(".scrollText p").size(); $(".scrollText p:eq("+current_scrollText+")").css('top','0px'); scrollText_interval = setInterval(scrollText_rotate,5000); function scrollText_rotate() { current_scrollText = (old_scrollText + 1) % scrollText_count;$(".scrollText p:eq(" + old_scrollText + ")").animate({top: -container_Height},"slow", function() { $(this).css('top',container_Height + 'px'); }); $(".scrollText p:eq(" + current_scrollText + ")").show().animate({top: -10},"slow"); $(".scrollText p:eq(" + current_scrollText + ")").show().animate({top: 0},300);old_scrollText = current_scrollText; }
// <!-- Sidebar -->
var windowWidth = document.documentElement.clientWidth;if (windowWidth > 600) {$('.sidebar-menu ul li ul').hide();$('.dropdown a').mouseover(function(){if( $(this).next().is(':hidden') ) { $('.dropdown a').removeClass('active').next().slideUp(); $(this).toggleClass('active').next().slideDown(); }return false; });$('.sidebar-menu').mouseleave( function(){$('.dropdown a.active').removeClass('active').next().slideUp();});}
 
// <!-- Mobile Menu -->
$('.menu-top').prepend('<p class="mobile-dropdown">View Menu</p>');$('.menu-top').css('height', 'auto');var trueHeight = $('.menu-top').height();var windowWidth = document.documentElement.clientWidth;if (windowWidth < 899) {$('.menu-top').css('height', 40);}$(".menu-top p").click(function() {var currentHeight = $('.menu-top').height();if (currentHeight > 40) {$('.menu-top').css('height', 40);$('.mobile-dropdown').css('background-image','url(files/mobile/menu-view.png)');} else {$('.menu-top').css('height', trueHeight);$('.mobile-dropdown').css('background-image','url(files/mobile/menu-hide.png)');}});$(window).resize(function() {var windowWidth = document.documentElement.clientWidth;$('.menu-top').css('height', 'auto');var trueHeight = $('.menu-top').height();if (windowWidth < 899) {$('.menu-top').css('height', 40);} else {$('.menu-top').css('height', trueHeight);}});
});
// <!-- Hide url bar - mobile-->
/mobile/i.test(navigator.userAgent) && !location.hash && setTimeout(function () {
  if (!pageYOffset) window.scrollTo(0, 1);
}, 250);