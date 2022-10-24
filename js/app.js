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


function createButton(text, href, icon) {
  var button1 = document.createElement("button");
  let style1 = document.createAttribute("style");
  style1.value = "display: flex; align-items: center; border : none; border-radius:5px;"
  button1.setAttributeNode(style1);

  var text1 = document.createTextNode(text);

  let i1 = document.createElement("i");
  let class1 = document.createAttribute("class");
  let style2 = document.createAttribute("style");

  class1.value = icon;
  style2.value = "font-size:30px;color:lightblue; margin-right: 10px" ;
  i1.setAttributeNode(class1);
  i1.setAttributeNode(style2);


  let a1 = document.createElement("a");
  let style3 = document.createAttribute("style");
  style3.value = "text-decoration: none;"
  a1.setAttributeNode(style3);
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
  let style1 = document.createAttribute("style");
  style1.value = "display: flex; align-items: center; border : none; border-radius:5px;"
  button1.setAttributeNode(style1);
  var text1 = document.createTextNode(text);

  let i1 = document.createElement("i");
  let style2 = document.createAttribute("style");
  style2.value = "font-size:30px;color:lightblue; margin-right: 10px" ;
  i1.setAttributeNode(style2);

  let class1 = document.createAttribute("class");
  class1.value = icon;
  i1.setAttributeNode(class1);

  let a1 = document.createElement("a");
  let style3 = document.createAttribute("style");
  style3.value = "text-decoration: none;"
  a1.setAttributeNode(style3);
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
  let id1 = document.createAttribute("id");
  id1.value = "installApp";
  button1.setAttributeNode(id1);
  button1.appendChild(text1);
  var element = document.getElementById("wrapper");
  element.appendChild(button1);
}

function openSMSMobile(e) {
  console.log("AICIII");
  window.open("sms:0754302599&body=Hello Dani!", "_self");
  return false;
}