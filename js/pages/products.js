// Search Btn
$(".products .products-items .top_box .options .search").click(function () {
  $(".content .products .products-items .search_box").toggleClass("open");
});
// Add Products
$(".content .products .add_product .edit_form .edits_links li").click(
  function () {
    $(this).addClass("open").siblings().removeClass("open");
    $(".content .products .add_product .edit_form .prod-sec").hide();
    $($(this).data("elm")).fadeIn();
  }
);
// Modify Products
$(".products .modify_product .edit_form .edits_links li").click(function () {
  $(this).addClass("open").siblings().removeClass("open");
  $(".content .products .modify_product .edit_form .prod-sec").hide();
  $($(this).data("elm")).fadeIn();
});
// Remove Product
$(
  ".content .products .products-items .ps table tbody tr td .btns-e a:nth-of-type(2)"
).click(function () {
  $(".content .products .remove_product").fadeIn();
});
$(".content .products .remove_product .remove_product-content .close").click(
  function () {
    $(".content .products .remove_product").fadeOut();
  }
);
// Bar Code
$(".content .products .code_bar button").click(function () {
  $(".content .products .code_bar").hide();
  $(".content .products .add_product").fadeIn();
});
