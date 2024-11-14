"use strict";

export default () => {
  const burgerButton = document.querySelector("#burger-btn");
  const elementsToHide = document.querySelectorAll("[data-hide]");
  const navSection = document.querySelector(".nav-section");

  burgerButton.addEventListener("click", () => {
    elementsToHide.forEach((element) => {
      element.style.display =
        element.style.display === "none" ? "block" : "none";
    });

    navSection.style.paddingRight =
      elementsToHide[0].style.display === "block" ? "30px" : "0";
  });
};
