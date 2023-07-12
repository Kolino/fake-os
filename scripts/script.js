import { switchView, appendTextEl } from "./dom-utils.js";
import { computeConversion } from "./utils.js";

// Displaying the home screen first
const homeSctn = document.querySelector(".home-sctn");
homeSctn.classList.add(["curr-view"]);
const convertSctn = document.querySelector(".convert-sctn");
convertSctn.classList.add(["not-in-view"]);
const toDoSctn = document.querySelector(".to-do-sctn");
toDoSctn.classList.add(["not-in-view"]);
const coinFlipSctn = document.querySelector(".coin-flip-sctn");
coinFlipSctn.classList.add(["not-in-view"]);

// Moving from home to convert app and back
const convertAppImg = document.querySelector("#convertAppImg");
convertAppImg.addEventListener("click", () => {
    switchView(homeSctn, convertSctn);
});

const convertBack = document.querySelector("#convertBack");
convertBack.addEventListener("click", () => {
    switchView(convertSctn, homeSctn);
});


// Moving from home to to do app and back
const toDoAppImg = document.querySelector("#toDoAppImg");
toDoAppImg.addEventListener("click", () => {
    switchView(homeSctn, toDoSctn);
});

const toDoBack = document.querySelector("#toDoBack");
toDoBack.addEventListener("click", () => {
    switchView(toDoSctn, homeSctn);
});


// Moving from home to coin flip app and back
const coinFlipAppImg = document.querySelector("#coinFlipAppImg");
coinFlipAppImg.addEventListener("click", () => {
    switchView(homeSctn, coinFlipSctn);
});

const coinFlipBack = document.querySelector("#coinFlipBack");
coinFlipBack.addEventListener("click", () => {
    switchView(coinFlipSctn, homeSctn);
});


// Setting and displaying time on home screen
const topBarTimeDiv = document.querySelector(".home-sctn__top-bar__time");
setInterval(() => {
    if (topBarTimeDiv.hasChildNodes())
        topBarTimeDiv.removeChild(topBarTimeDiv.lastChild);

    const date = new Date();

    appendTextEl("p", date.toLocaleTimeString("en-US"), topBarTimeDiv);
}, 1000);


// Conversion app
const convertForm = document.querySelector(".convert-sctn__input__form");
convertForm.addEventListener("submit", e => {
    e.preventDefault();

    // Remove previous output
    const convertOutputSctn = document.querySelector(".convert-sctn__output");
    console.log(convertOutputSctn.children);
    if (convertOutputSctn.hasChildNodes())
        convertOutputSctn.removeChild(convertOutputSctn.lastChild);

    const fd = new FormData(convertForm);
    const units = fd.get("units");
    const val = fd.get("convertVal");

    // Display current output
    const result = computeConversion(units, val);
    appendTextEl("p", result, convertOutputSctn);
   
    // Reset the input field
    document.querySelector("#convertVal").value = "";
});


// To do app
const toDoForm = document.querySelector(".to-do-sctn__input__form");
const toDoOutputList = document.querySelector(".to-do-sctn__output__list");

// TODO: fix the OL having multiple child initially
while (toDoOutputList.hasChildNodes())
    toDoOutputList.removeChild(toDoOutputList.lastChild);

toDoForm.addEventListener("submit", e => {
    e.preventDefault();

    const toDoInput = document.querySelector("#addToDo");
    
    appendTextEl("li", toDoInput.value, toDoOutputList);

    toDoInput.value = "";
});

document.querySelector("#removeToDoBtn").addEventListener("click", () => {
    if (toDoOutputList.hasChildNodes())
        toDoOutputList.removeChild(toDoOutputList.firstChild);
});


// Coin flip app
document.querySelector("#flipBtn").addEventListener("click", () => {
    const coinflipOutputDiv = document.querySelector(".coin-flip-sctn__output");

    if (coinflipOutputDiv.hasChildNodes())
        coinflipOutputDiv.removeChild(coinflipOutputDiv.lastChild);

    const newImgEl = document.createElement("img");
    newImgEl.classList.add(["coin-flip-sctn__output__img"]);
    coinflipOutputDiv.appendChild(newImgEl);

    const heads = Math.floor(Math.random() * 2);
    if (heads) 
        newImgEl.src = "./images/coin-heads";
    else
        newImgEl.src = "./images/coin-tails";
});

