$(document).ready(function () {
  var width = window.innerWidth;

  if (width > 1029) {
    $("nav").css("display", "show");
  }

  window.addEventListener("scroll", function () {
    let t = $("body, html").scrollTop(); // 目前监听的是整个body的滚动条距离

    if (t > 0) {
      $(".outer2").addClass("outer2-active");
    } else {
      $(".outer2").removeClass("outer2-active");
    }
  });

  $(".outer4").click(function () {
    $(".nav").slideToggle("slow");
  });

  $(".nav li").click(function () {
    if (width < 1029) {
      $(".nav").css("display", "none");
    }

    $(this).siblings("li").removeClass("active"); // 删除其他兄弟元素的样式

    $(this).addClass("active"); // 添加当前元素的样式
  });

  $(".scroll").on("click", function () {
    //绑定点击事件
    var tops = $(this).attr("href"); //获取对象
    $("html,body")
      .stop()
      .animate({ scrollTop: $(tops).offset().top }, 800); //动画出炉
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
