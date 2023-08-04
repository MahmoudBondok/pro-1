// Pay
$(".content .sales .pay_content .pay_box .pay_links li").click(function () {
  $(this).addClass("open").siblings().removeClass("open");
  $(".content .sales .pay_content .pay_box .pash").hide();
  $($(this).data("elm")).fadeIn();
});
// Client Search
$(".sales .sales_content .search_box form .inpt .icon_search").click(
  function () {
    $(".client_search").fadeIn();
  }
);
$(".client_search .box_client .top_title .close").click(function () {
  $(".client_search").fadeOut();
});
// Check Client Search
$(".client_search .box_client .btm_con form .inpts .ipt input").keyup(
  function () {
    if ($(this).hasClass("one")) {
      if ($(this).val().length >= 8) {
        $(".client_search .problems .prblm_one").hide();
        $(this).parent().removeClass("not_valid");
        $(this).parent().addClass("valid");
      } else if ($(this).val().length == 0) {
        $(".client_search .problems .prblm_one").hide();
        $(this).parent().removeClass("not_valid");
        $(this).parent().removeClass("valid");
      } else {
        $(".client_search .problems .prblm_one").show();
        $(this).parent().removeClass("valid");
        $(this).parent().addClass("not_valid");
      }
    }
    if ($(this).hasClass("two")) {
      if ($(this).val().length >= 8) {
        $(".client_search .problems .prblm_two").hide();
        $(this).parent().removeClass("not_valid");
        $(this).parent().addClass("valid");
      } else if ($(this).val().length == 0) {
        $(".client_search .problems .prblm_two").hide();
        $(this).parent().removeClass("not_valid");
        $(this).parent().removeClass("valid");
      } else {
        $(".client_search .problems .prblm_two").show();
        $(this).parent().removeClass("valid");
        $(this).parent().addClass("not_valid");
      }
    }
  }
);
$(".client_search .box_client .btm_con form .link_to").click(function () {
  $(".client_search .box_client .btm_con > form").hide();
  $("." + $(this).data("class")).show();
});
