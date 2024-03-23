"use strict";
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnShow = document.querySelectorAll(".show-modal");
const btnClose = document.querySelector(".close-modal");

const showModal = () => {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};
const hideModal = () => {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};
for (let i = 0; i < btnShow.length; i++) {
  btnShow[i].addEventListener("click", showModal);
}
overlay.addEventListener("click", hideModal);
btnClose.addEventListener("click", hideModal);
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    hideModal();
  }
});
