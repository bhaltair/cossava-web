$(document).ready(function () {
  window.addEventListener("scroll", function () {
    let t = $("body, html").scrollTop(); // 目前监听的是整个body的滚动条距离

    if (t > 0) {
      $(".outer2").addClass("outer2-active");
    } else {
      $(".outer2").removeClass("outer2-active");
    }
  });

  $(".outer4").click(function () {
    $(".nav").toggleClass("show");
  });

  $(".nav li").click(function () {
    $(this).siblings("li").removeClass("active"); // 删除其他兄弟元素的样式

    $(this).addClass("active"); // 添加当前元素的样式

    $(".nav").toggleClass("show");
  });
});
