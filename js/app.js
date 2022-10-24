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

function createButton(text, href, icon) {
  var button1 = document.createElement("button");
  var text1 = document.createTextNode(text);

  let i1 = document.createElement("i");
  let class1 = document.createAttribute("class");
  class1.value = icon;
  i1.setAttributeNode(class1);

  let a1 = document.createElement("a");
  let href1 = document.createAttribute("href");
  href1.value = href;
  a1.setAttributeNode(href1);

  button1.appendChild(i1);
  button1.appendChild(text1);

  a1.appendChild(button1);

  var element = document.getElementById("wrapper");
  element.appendChild(a1);
}

function createButtonWithClick(text, href, icon, onClick) {
  var button1 = document.createElement("button");
  var text1 = document.createTextNode(text);

  let i1 = document.createElement("i");
  let class1 = document.createAttribute("class");
  class1.value = icon;
  i1.setAttributeNode(class1);

  let a1 = document.createElement("a");
  let href1 = document.createAttribute("href");
  href1.value = href;

  a1.addEventListener("click", onClick)
  a1.setAttributeNode(href1);

  button1.appendChild(i1);
  button1.appendChild(text1);

  a1.appendChild(button1);

  var element = document.getElementById("wrapper");
  element.appendChild(a1);
}

function createInstallButton(text) {
  var button1 = document.createElement("button");
  var text1 = document.createTextNode(text);
  button1.appendChild(text1);
  var element = document.getElementById("wrapper");
  element.appendChild(button1);
}



function openSMSMobile(e) {
  console.log("AICIII");
  window.open("sms:0754302599&body=hello", "_self");
  return false;
}