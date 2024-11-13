"use strict";

export default () => {
  const burgerButton = document.querySelector("#burger-btn");
  const elementsToHide = document.querySelectorAll("[data-hide]");
  const notAsideWrapper = document.querySelector(".main__not-aside-wrapper");

  burgerButton.addEventListener("click", (e) => {
    elementsToHide.forEach((element) => {
      if (element.style.display === "none") {
        element.style.display = "block";
        notAsideWrapper.style.width = "calc(100vw - 220px)";
        notAsideWrapper.style.paddingLeft = "30px";
      } else {
        element.style.display = "none";
        notAsideWrapper.style.width = "calc(100vw - 90px)";
        notAsideWrapper.style.paddingLeft = "0px";
      }
    });
  });
};
