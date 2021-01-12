$(document).ready(function(){
$(".M_button .fa-times-circle,.submenuicon .fa-chevron-down").hide();

$(".M_button .fa-bars").click(function(){
$(".M_button .fa-times-circle").show();
$(".M_button .fa-bars,.navbar-brand,.searchb i").hide();
$(".navbar-expand-lg").css("background","#1B1740 ");
$(".M_button").addClass("M_button1");
});
$(".M_button .fa-times-circle").click(function(){
$(".M_button .fa-times-circle").hide();
$(".M_button .fa-bars,.navbar-brand,.searchb i").show();
$(".navbar-expand-lg").css("background","#fff");
$(".M_button").removeClass("M_button1");
});

$(".submenuicon .fa-chevron-up").click(function(){
 $(".submenuicon .fa-chevron-up").hide();
 $(".submenuicon .fa-chevron-down").show();
   $(".subli,#submenu").css("background","#28235d");
})
$(".submenuicon .fa-chevron-down").click(function(){
  $(".submenuicon .fa-chevron-up").show();
  $(".submenuicon .fa-chevron-down").hide();
  $(".subli,#submenu").css("background","#1B1740");
})





















$(".slider").slick({
   dots: !0,
   autoplay: !0,
   autoplaySpeed: 150000,
   slidesToShow: 3,
   slidesToScroll: 1,
   responsive: [{
       breakpoint: 1024,
       settings: {
           slidesToShow: 2,
           slidesToScroll: 1,
           infinite: !0,
           dots: !0
       }
   }, {
       breakpoint: 800,
       settings: {
           slidesToShow: 1,
           slidesToScroll: 1
       }
   }
 ]
});
});
