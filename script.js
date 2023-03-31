"use strict";
const clickbutton = document.querySelector(".button");
const closepopup = document.querySelector(".close-modal");
const form = document.querySelector(".form");
const completed = document.querySelector(".successful");
const submit = document.querySelector(".submit");

const password = document.querySelector("#pass");

const showpassword = document.querySelector(".eye");

const toggle = document.querySelector(".checkbox");

const logoreload = document.querySelector(".homereload");

clickbutton.addEventListener("click", function () {
  form.classList.remove("hidden");
});

closepopup.addEventListener("click", function () {
  form.classList.add("hidden");
});

submit.addEventListener("click", function () {
  completed.classList.remove("hidden");
  form.classList.add("hidden");
});

completed.addEventListener("click", function () {
  completed.classList.add("hidden");
  location.reload();
});

//if else
toggle.addEventListener("click", function () {
  if (password.type === "password") {
    password.type = "text";
  } else {
    password.type = "password";
  }
});

//tenary operator
// toggle.addEventListener("click", function () {
//   password.type === "password"
//     ? (password.type = "text")
//     : (password.type = "password");
// });

logoreload.addEventListener("click", function () {
  location.reload();
});
