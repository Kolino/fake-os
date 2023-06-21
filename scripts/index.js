// import { displayTime } from "./utils.js";
import { appendTextEl } from "./dom-utils.js";

const topBar = document.querySelector(".top-bar__time");

const updateClock = parentEl => {
    if (parentEl.hasChildNodes()) {
        parentEl.removeChild(parentEl.lastChild);
    }

    const date = new Date();
    // const hours = date.getHours();
    // const minutes = date.getMinutes();

    appendTextEl(
        "p", 
        date.toLocaleTimeString("en-US"), 
        topBar
    );

    setTimeout(() => updateClock(parentEl), 1000);
};

updateClock(topBar);

const convertImg = document.querySelector("#convertAppImg");
const toDoImg = document.querySelector("#toDoAppImg");
const coinFlipImg = document.querySelector("#coinFlipAppImg");

convertImg.addEventListener(
    "click", 
    () => window.location.href = "./convert.html"
);

toDoImg.addEventListener(
    "click", 
    () => window.location.href = "./to-do.html"
);

coinFlipImg.addEventListener(
    "click", 
    () => window.location.href = "./coin-flip.html"
);