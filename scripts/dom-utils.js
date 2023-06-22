export const switchView = (currView, nextView) => {
    currView.classList.remove(["curr-view"]);
    currView.classList.add(["not-in-view"]);

    nextView.classList.remove(["not-in-view"]);
    nextView.classList.add(["curr-view"]);
};

export const appendTextEl = (elType, text, parent) => {
    const newEl = document.createElement(elType);
    const newElText = document.createTextNode(text);

    newEl.appendChild(newElText);
    parent.appendChild(newEl);
};