// Switch links
$(".settings .settings_content .links_stng li").click(function () {
  $(this).addClass("active").siblings().removeClass("active");
  $(".settings .settings_content .all_sections > div").hide();
  $($(this).data("sec")).fadeIn();
});
