$(document).ready(function() {
  $(".menu-btn").click(function(){
    $(".sidebar").css("transform", "translateX(-75%)");
    $(".main-content").css("width", "calc(100% - 50px)");
    $(".menu-btn").css("display", "none");
  });

  $(".menu-btn-close").click(function(){
    $(".sidebar").css("transform", "translateX(0%)");
    $(".main-content").css("width", "calc(100% - 240px)");
    $(".menu-btn").css("display", "block");
  });
});

console.log("avbiavq");
