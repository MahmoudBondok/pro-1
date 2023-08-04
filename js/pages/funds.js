// Add Funds
$(".content .addfunds .first-content .top_funds-infos .pay .inpt .opt p").each(
  function (item) {
    $(this).click(function () {
      $(
        ".content .addfunds .first-content .top_funds-infos .pay .inpt input"
      ).val($(this).children("span").text());
    });
  }
);
// Box Pay
$(".content .addfunds .first-content .top_funds-infos .pay .inpt button").click(
  function () {
    if (
      $(
        ".content .addfunds .first-content .top_funds-infos .pay .inpt .select .top_sel p"
      ).text() == "بنك البلاد"
    ) {
      $(".addfunds .first-content").hide();
      $(".content .addfunds .national-bank").fadeIn();
    }
    if (
      $(
        ".content .addfunds .first-content .top_funds-infos .pay .inpt .select .top_sel p"
      ).text() == "Stcpay"
    ) {
      $(".addfunds .first-content").hide();
      $(".content .addfunds .stc_pay").fadeIn();
    }
  }
);
// Close Box Pay
$(
  ".content .addfunds .national-bank .btns button:last-of-type, .content .addfunds .stc_pay .btns button:last-of-type"
).click(function () {
  $(".content .addfunds .national-bank, .content .addfunds .stc_pay").hide();
  $(".addfunds .first-content").fadeIn();
});
