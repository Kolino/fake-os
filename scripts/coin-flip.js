import { appendImgEl } from "./dom-utils.js";

const backBtn = document.querySelector("#backArrow");
const flipBtn = document.querySelector("#flipBtn");

backBtn.addEventListener(
    "click", 
    () => window.location.href = "./index.html"
);

flipBtn.addEventListener("click", e => {
    e.preventDefault();

    const resultSctn = document.querySelector(".result-section");

    if (resultSctn.hasChildNodes()) {
        resultSctn.removeChild(resultSctn.lastChild);
    }

    const flipResult = Math.floor(Math.random() * 2);
    if (!flipResult) {
        appendImgEl(
            "../images/coin-tails", 
            resultSctn, 
            ["result-section__img"]
        );
    }
    else {
        appendImgEl(
            "../images/coin-heads",
            resultSctn,
            ["result-section__img"]
        );
    }

})