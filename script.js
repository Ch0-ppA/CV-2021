"use strict";

//!Onload
window.onload = function () {
  progressView();
};
// !TABS
let tabsRadio = document.querySelectorAll(".tabs>[type=radio]");
let sections = document.querySelectorAll(".tab-section");

function tabsToggle(tabsRadio, sections) {
  for (let i = 0; i < sections.length; i++) {
    if (tabsRadio[i].checked) {
      sections[i].classList.remove("hide");
    } else {
      sections[i].classList.add("hide");
    }
  }
}

// !Diagram
function progressView() {
  let diagramBox = document.querySelectorAll(".diagram.progress");
  diagramBox.forEach((box) => {
    let deg = (360 * box.dataset.percent) / 100 + 180;
    if (box.dataset.percent >= 50) {
      box.classList.add("over_50");
    } else {
      box.classList.remove("over_50");
    }
    box.querySelector(".piece.right").style.transform =
      "rotate(" + deg + "deg)";
    box.querySelector(".text b").innerHTML = box.dataset.percent;
  });
}
