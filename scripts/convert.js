import { appendTextEl } from "./dom-utils.js";

const computeConversion = (unitsToConvert, value) => {
    if (typeof unitsToConvert !== "string" || 
        isNaN(value))
        return -1;

    // "celsius"
    if (unitsToConvert === "celsius") {
        return value * (9 / 5) + 32;
    }
    // "fahrenheit"
    if (unitsToConvert === "fahrenheit") {
        return (value - 32) * 5 / 9;
    }
    // "kilograms"
    if (unitsToConvert === "kilograms") {
        return value * 2.205;
    }
    // "pounds"
    if (unitsToConvert === "pounds") {
        return value / 2.205;
    }

    // Invalid units given
    return -1;
}

const backBtn = document.querySelector("#backArrow");
const form = document.querySelector(".input-section__form");

backBtn.addEventListener(
    "click", 
    () => window.location.href = "./index.html"
);

form.addEventListener("submit", e => {
    e.preventDefault();

    const outputSection = document.querySelector(".output-section");

    while (outputSection.firstChild) {
        outputSection.removeChild(outputSection.lastChild);
    }

    const fd = new FormData(form);
    const units = fd.get("units");
    const value = fd.get("value");

    const convertedValue = computeConversion(units, value);

    appendTextEl("p", convertedValue, outputSection);
});