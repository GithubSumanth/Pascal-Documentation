"use strict";

const copyButtons = document.querySelectorAll(".btn-copy");
const topicList = document.querySelectorAll(".sidebar__list");
let previousTopic = document.querySelector(".sidebar__link-1");
// let previousTopic = document.querySelector(".sidebar__link");

// let previousOpenSection = document.querySelector(".section");
let previousOpenSection = document.querySelector(".section-1");

previousTopic.classList.add("topic--active");
previousOpenSection.classList.add("show");

copyButtons.forEach(function (button) {
  button.addEventListener("click", function (event) {
    const target = event.target;
    target.textContent = "Copied";
    setTimeout(function () {
      target.textContent = "Copy";
    }, 3000);
    const codeBlockParent = target.parentNode;
    const codeBlock = codeBlockParent.querySelector(".pre");
    navigator.clipboard.writeText(codeBlock.textContent);
  });
});

// console.log(topicList);

topicList.forEach(function (topic) {
  topic.addEventListener("click", function (event) {
    // previousOpenSection.style.display = "none";
    // previousTopic.style.fontWeight = "500";
    previousTopic.classList.remove("topic--active");
    previousOpenSection.classList.remove("show");
    const target = event.target;
    previousTopic = target;
    // target.style.fontWeight = "600";
    target.classList.add("topic--active");
    const idName = target.dataset.idName;
    const currentSection = document.querySelector(`#${idName}`);
    // currentSection.style.display = "block";
    currentSection.classList.add("show");
    previousOpenSection = currentSection;
  });
});
