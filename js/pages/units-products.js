// Add Units
$(".content .units-products .units .top_box .options .add").click(function () {
  $(".content .units-products .units .add_units").fadeIn();
});
$(".content .units-products .units .add_units .add_units-content .close").click(
  function () {
    $(".content .units-products .units .add_units").fadeOut();
  }
);
// Inquiry
$(".content .units-products .inquiry .top_box .options .search").click(
  function () {
    $(".content .units-products .inquiry .search_box").toggleClass("open");
  }
);
