// Edits
$(
  ".content .branches .branches_content-edits .edit_branch .edit_form .edits_links li"
).click(function () {
  $(this).addClass("open").siblings().removeClass("open");
  $(".branch_option, .branch_tax, .branch_bill").hide();
  $($(this).data("elm")).fadeIn();
});
// Remove
$(
  ".content .branches .branches_content .branch_cont table tbody tr td .btns-e a:nth-of-type(2)"
).click(function () {
  $(".content .branches .branches_content .remove_branch").fadeIn();
});
$(
  ".content .branches .branches_content .remove_branch .remove_branch-content .close"
).click(function () {
  $(".content .branches .branches_content .remove_branch").fadeOut();
});
