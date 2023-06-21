export const appendTextEl = (elType, text, parent, classes = []) => {
    const textEl = document.createElement(elType);
    textEl.classList.add(...classes);
    
    const textNode = document.createTextNode(text);

    textEl.appendChild(textNode);
    parent.appendChild(textEl);
}

export const appendImgEl = (imgSrc, parent, classes = []) => {
    const imgEl = document.createElement("img");
    imgEl.classList.add(...classes);

    imgEl.src = imgSrc;

    parent.appendChild(imgEl);
}