$(function () {
  "use strict";


  //serviceworker registration

  window.addEventListener("load", (e) => {
    registerSW();
  });

  async function registerSW() {
    if ("serviceWorker" in navigator) {
      try {
        await navigator.serviceWorker.register("./sw.js");
      } catch (e) {
        alert("ServiceWorker registration failed. Sorry about that.");
      }
    } else {
      document.querySelector(".alert").removeAttribute("hidden");
    }
  }

});

// mCustomScrollbar initialization
(function ($) {
  $(window)
    .resize(function () {
      $("#map").css("height", $(this).height() - 110);
      if ($(this).width() > 768) {
        $(".map-content-sidebar").mCustomScrollbar({ theme: "minimal-dark" });
        $(".map-content-sidebar").css("height", $(this).height() - 110);
      } else {
        $(".map-content-sidebar").mCustomScrollbar("destroy"); //destroy scrollbar
        $(".map-content-sidebar").css("height", "100%");
      }
    })
    .trigger("resize");
})(jQuery);
