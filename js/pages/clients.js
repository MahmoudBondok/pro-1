// Modify Client
$(".content .clients .modify_client .modify_form .edits_links li").click(
  function () {
    $(this).addClass("open").siblings().removeClass("open");
    $(".content .clients .modify_client .modify_form .mod-f").hide();
    $($(this).data("elm")).fadeIn();
  }
);
// Remove Client
$(
  ".content .clients .clients_content .ps table tbody tr td .btns-e a:last-of-type"
).click(function () {
  $(".content .clients .remove_client").fadeIn();
});
$(".content .clients .remove_client .close").click(function () {
  $(".content .clients .remove_client").fadeOut();
});
