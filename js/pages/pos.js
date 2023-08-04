// Calc
$(".sections .section1 .pads .subpads .numpad .mode-button").click(function () {
  $(".sections .section1 .pads .subpads .numpad .mode-button").each(
    function () {
      $(this).removeClass("selected-mode");
    }
  );
  $(this).addClass("selected-mode");
});
$(
  ".sections .products-widget .products-widget-control .categorys button"
).click(function () {
  $(
    ".sections .products-widget .products-widget-control .breadcrumbs"
  ).addClass("selctt");
  $(
    ".sections .products-widget .products-widget-control .categorys"
  ).removeClass("opn");
});
$(
  ".sections .products-widget .products-widget-control .breadcrumbs .homee-ico"
).click(function () {
  $(
    ".sections .products-widget .products-widget-control .breadcrumbs"
  ).removeClass("selctt");
  $(".sections .products-widget .products-widget-control .categorys").addClass(
    "opn"
  );
});
// Payment Sections Page
$(
  ".sections .section1 .pads .subpads .actionpad .pay, .sections .switchpane a:first-of-type"
).click(function () {
  $(".payment_sections").show();
  $(".navB .search").hide();
});
// Close Payment Section
$(".payment_sections .container-my .section_content .top_section .btn_1").click(
  function () {
    $(".payment_sections").hide();
    $(".navB .search").show();
  }
);
$(
  ".payment_sections .container-fluid .section_content .top_section .btn_1.btn_1"
).click(function () {
  $(".payment_sections").hide();
  $(".navB .search").show();
});
$(
  ".payment_sections .container-my .section_content .center_sections .center_sections-right .payment-buttons-container .payment-buttons .button_5:last-of-type"
).click(function () {
  if ($(this).hasClass("check")) {
    $(this).removeClass("check");
  } else {
    $(this).addClass("check");
  }
});
// Orders Valid Page
$(
  ".orders_valid .container-my .orders_valid-content .top_part .btn_2.btn_2"
).click(function () {
  $(".orders_valid").hide();
  $(".navB .search").show();
});
$(
  ".payment_sections .container-my .section_content .top_section .btn_2.btn_2"
).click(function () {
  $(".orders_valid").show();
  $(".navB .search").hide();
  $(".payment_sections").hide();
});
// Customer
$(
  ".customer .container-my .customer_content .customer_content-bottom table tbody tr"
).click(function () {
  if ($(this).hasClass("select")) {
    $(this).removeClass("select");
    $(
      ".customer .container-my .customer_content .customer_content-top .btns"
    ).removeClass("check");
  } else {
    $(
      ".customer .container-my .customer_content .customer_content-bottom table tbody > tr"
    ).removeClass("select");
    $(this).addClass("select");
    $(
      ".customer .container-my .customer_content .customer_content-top .btns"
    ).addClass("check");
  }
});
$(
  ".customer .container-my .customer_content .customer_content-top .btns a:last-of-type, .customer .container-my .customer_content .customer_content-top .btns2 a:first-of-type"
).click(function () {
  $(".customer").hide();
  $(".navB").removeClass("hideNav");
});
$(".sections .section1 .pads .subpads .actionpad .user").click(function () {
  $(".customer").show();
  $(".navB").addClass("hideNav");
});
// Edit Customer
$(
  ".customer .container-my .customer_content .customer_content-bottom table tbody tr td .editt"
).click(function () {
  $(".customer").hide();
  $(".edit_customer").show();
});
$(
  ".edit_customer .container-my .edit_customer_content .edit_customer_content-top .btns a:last-of-type"
).click(function () {
  $(".customer").show();
  $(".edit_customer").hide();
});
$(
  ".edit_customer .container-my .edit_customer_content .edit_customer_content-top .btns a:first-of-type"
).click(function () {
  $(".edit_customer").hide();
});
// Cash Button
$(".center_sections-left .center_sections-left-btm a").click(function () {
  if ($(this).hasClass("cash_btn")) {
    $(".numpad").addClass("show");
    $(this).addClass("active");
    $(".bank_btn").removeClass("active");
  } else {
    $(".numpad").removeClass("show");
    $(this).addClass("active");
    $(".cash_btn").removeClass("active");
  }
});
$(".cash_btn").click(function () {});
// Language switch
$(
  ".pos .orders_valid .container-my .orders_valid-content .btm_part .actions .btns .email"
).click(function () {
  $(".pos .orders_valid .email_").fadeIn();
});
$(".pos .orders_valid .email_ .email_content .lang .btn_langs button").click(
  function () {
    if ($(this).hasClass("en")) {
      $(this).addClass("active");
      $(".lang .btn_langs .ar").removeClass("active");
    } else {
      $(this).addClass("active");
      $(".lang .btn_langs .en").removeClass("active");
    }
  }
);
$(" .email_ .email_content .close").click(function () {
  $(".pos .orders_valid .email_").fadeOut();
});
// Alert mail send
$(".pos .orders_valid .email_.ar .email_content .send").click(function () {
  $(".pos .orders_valid .email_.ar").hide();
  if ($(".pos .orders_valid .email_.ar input").val().length == 0) {
    Swal.fire({
      title: "يوجد خطأ في الارسال",
      icon: "error",
      showConfirmButton: true,
      showCancelButton: true,
      confirmButtonColor: "#1b7dc0",
      cancelButtonText: `خروج`,
      confirmButtonText: `حاول مرة أخرى`,
      focusConfirm: false,
      customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-danger",
      },
    }).then((result) => {
      if (result.isConfirmed) {
        $(".pos .orders_valid .email_.ar").fadeIn();
      }
    });
  } else {
    Swal.fire({
      title: "تم ارسال الفاتورة بنجاح",
      icon: "success",
      showConfirmButton: false,
      timer: 1200,
    });
  }
});
$(".pos .orders_valid .email_.en .email_content .send").click(function () {
  $(".pos .orders_valid .email_.en").hide();
  if ($(".pos .orders_valid .email_.en input").val().length == 0) {
    Swal.fire({
      title: "There is an error in the transmission",
      icon: "error",
      showConfirmButton: true,
      showCancelButton: true,
      confirmButtonColor: "#1b7dc0",
      cancelButtonText: `Cancel`,
      confirmButtonText: `Try again`,
      focusConfirm: false,
      customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-danger",
      },
    }).then((result) => {
      if (result.isConfirmed) {
        $(".pos .orders_valid .email_.en").fadeIn();
      }
    });
  } else {
    Swal.fire({
      title: "Invoice has been sent successfully",
      icon: "success",
      showConfirmButton: false,
      timer: 1200,
    });
  }
});
