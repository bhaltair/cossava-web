$(document).ready(function () {

  var width = window.innerWidth;

  if (width > 1029) {
    $("nav").css("display", "show");
  }

  // $(window).scroll(function () {
  //   var t = $(document).scrollTop();

  //   if (t > 0) {
  //     $(".outer2").addClass("outer2-active");
  //   } else {
  //     $(".outer2").removeClass("outer2-active");
  //   }
  // });

  $(".outer4").click(function () {
    $(".nav").slideToggle("slow");
  });

  $(".nav li").click(function () {
    if (width < 1029) {
      // $(".nav").css("display", "none");
      $(".nav").slideToggle("slow");
    }

    $(this).siblings("li").removeClass("active");
    $(this).addClass("active"); 

    var tops = $(this).find('a').attr("href"); 
    $("html,body")
      .stop()
      .animate({ scrollTop: $(tops).offset().top }, 800); 
  });


  $(".header-logo").click(function () {
    $("body, html").stop().animate(
      {
        scrollTop: 0,
      },
      500
    );
  });
});
