/*-------- Navbar ------*/
// Notification
$(".nav_dash .notification .icon").click(function (e) {
  e.stopPropagation();
  $(".nav_dash .notification .down_notif").fadeToggle(300);
  $(".nav_dash .notification").toggleClass("active");
  $(".nav_dash .profile").removeClass("active");
  $(".nav_dash .profile .down_profile").fadeOut();
});
// Profile
$(".nav_dash .profile .img").click(function (e) {
  e.stopPropagation();
  $(".nav_dash .profile .down_profile").fadeToggle(300);
  $(".nav_dash .profile").toggleClass("active");
  $(".nav_dash .notification").removeClass("active");
  $(".nav_dash .notification .down_notif").fadeOut();
});
$("body").click(function () {
  $(
    ".nav_dash .notification .down_notif, .nav_dash .profile .down_profile"
  ).fadeOut();
  $(".nav_dash .notification,.nav_dash .profile").removeClass("active");
});
$(".nav_dash .notification .down_notif,.nav_dash .profile .down_profile").click(
  function (e) {
    e.stopPropagation();
  }
);
/*------------ Menu ---------*/
// Toggle Sub Link
$(".menu .links .link_down p").click(function () {
  if ($(".menu").hasClass("al")) {
    if ($($(this).parent()).hasClass("active")) {
      $($(this).parent().children()[1]).slideUp();
      $(this).parent().removeClass("active");
    } else {
      $(".al .links > .link_down .down_link-list").slideUp(300);
      $(".al .links > .link_down").removeClass("active");
      /*--*/
      $(".al .links .link_down .down_link-list li > .sub .list_sub").hide();
      $(".al .links .link_down .down_link-list li > .sub").removeClass(
        "active"
      );
      /*--*/
      $($(this).parent().children()[1]).slideDown();
      $(this).parent().addClass("active");
    }
  }
});
$(".menu .links .link_down p, .menu .links .show_min a").mouseenter(
  function () {
    if ($(".menu").hasClass("min")) {
      $($(this).parent().children()[1]).fadeIn();
      $(this).parent().addClass("active");
    }
  }
);
$(".menu .links .link_down, .menu .links .show_min").mouseleave(function () {
  if ($(".menu").hasClass("min")) {
    $($(this).children()[1]).hide();
    $(this).removeClass("active");
  }
});
// Toggle Small & Large Menu
$(".nav_dash .menu_opt .desk").click(function () {
  $(".nav_dash, .menu, .content").toggleClass("min");
  $(".menu").toggleClass("al");
});
// Toggle Menu Mobile
$(".nav_dash .menu_opt .mob").click(function () {
  $(".menu").toggleClass("mobile_screen");
});
$(".menu .close").click(function () {
  $(".menu").removeClass("mobile_screen");
});
/*-------------- Select -------------*/
$("body").click(function () {
  $($(".select").children()[1]).slideUp();
});
$(".select").click(function (e) {
  e.stopPropagation();
  $($(this).children()[1]).slideToggle(300);
});
let allSelc = document.querySelectorAll(".select .down_sel p");
allSelc.forEach((item) => {
  item.onclick = function () {
    let sel_t =
      this.parentElement.parentElement.firstElementChild.firstElementChild;
    sel_t.textContent = this.textContent;
  };
});
/*------------------- Loading ------------------*/
$(".loading").fadeIn().delay(1200).fadeOut();
