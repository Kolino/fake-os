import { appendTextEl } from "./dom-utils.js";

const backBtn = document.querySelector("#backArrow");
const form = document.querySelector(".input-section__form");
const toDoList = document.querySelector(".output-section__list");
const removeBtn = document.querySelector("#removeBtn");

backBtn.addEventListener(
    "click", 
    () => window.location.href = "./index.html"
);

form.addEventListener("submit", e => {
    e.preventDefault();

    const fd = new FormData(form);
    const toDoText = fd.get("todo");

    appendTextEl(
        "li", 
        toDoText, 
        toDoList, 
        ["output-section__list__item"]
    );

    // TODO: reset input box's value
    toDoList.value = "";
});

removeBtn.addEventListener("click", e => {
    e.preventDefault();

    const firstListItem = document.querySelector(".output-section__list__item");
    if (firstListItem)
        toDoList.removeChild(firstListItem);
})