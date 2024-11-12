"use strict";

export default () => {
  const burgerButton = document.querySelector("#burger-btn");
  const elementsToHide = document.querySelectorAll("[data-hide]");

  burgerButton.addEventListener("click", (e) => {
    elementsToHide.forEach((element) => {
      if (element.style.display === "none") {
        element.style.display = "block";
      } else {
        element.style.display = "none";
      }
    });
  });
};
