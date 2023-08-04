// Datepicker
$("#rangestart, #rangestart1").calendar({
  type: "date",
  endCalendar: $("#rangeend, #rangeend1"),
});
$("#rangeend, #rangeend1").calendar({
  type: "date",
  startCalendar: $("#rangestart, #rangestart1"),
});
// Search Box
$(".content .home .sre .top_box .search_box select").change(function () {
  if ($(this).val() == "custom") {
    $($(this).parent().parent().parent().children()[1]).slideDown(300);
  } else {
    $($(this).parent().parent().parent().children()[1]).slideUp(300);
  }
});
