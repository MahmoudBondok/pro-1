// Search
$(".content .invoices .invoices_content .top_box .options .search").click(
  function () {
    $(".content .invoices .invoices_content .search_box").slideToggle();
  }
);
//  View
var dropdownElementList = [].slice.call(
  document.querySelectorAll(".dropdown-toggle")
);
var dropdownList = dropdownElementList.map(function (dropdownToggleEl) {
  return new bootstrap.Dropdown(dropdownToggleEl);
});
$(".content .invoices .container-z .nav-item").click(function () {
  $(this).addClass("active").siblings().removeClass("active");
  $(".invoice-tab, .activities-tab, .returned-tab").hide();
  $($(this).data("tab")).fadeIn();
});
// View 2
$(".content .invoices .invoices_content .cnt_1 .next_btn button").click(
  function () {
    $(".content .invoices .invoices_content .cnt_1").hide();
    $(".content .invoices .invoices_content .cnt_2").fadeIn();
  }
);
$(".content .invoices .invoices_content .cnt_2 .next_btn .prv").click(
  function () {
    $(".content .invoices .invoices_content .cnt_1").fadeIn();
    $(".content .invoices .invoices_content .cnt_2").hide();
  }
);
// Email Popup
$(".content .invoices .container-z .email_pop").click(function () {
  $(".invoices .email_").fadeIn();
});
// Language switch
$(".invoices .email_ .email_content .lang .btn_langs button").click(
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
$(".invoices .email_ .email_content .close").click(function () {
  $(".invoices .email_").fadeOut();
});
// Alert Mail Send
$(".content .invoices .email_.ar .email_content .send").click(function () {
  $(".content .invoices .email_").hide();
  if ($(".content .invoices .email_.ar input").val().length == 0) {
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
        $(".content .invoices .email_.ar").fadeIn();
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
  $(".content .invoices .email_").hide();
});
$(".content .invoices .email_.en .email_content .send").click(function () {
  $(".content .invoices .email_").hide();
  if ($(".content .invoices .email_ input").val().length == 0) {
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
        $(".content .invoices .email_.en").fadeIn();
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
