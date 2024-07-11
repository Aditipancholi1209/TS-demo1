"use strict";
// const btn = document.getElementById('ClickMeButton') as HTMLElement
const btn = document.getElementById('ClickMeButton');
// const btn =  document.getElementById('ClickMeButton')!
// btn.onclick;
// const img = document.getElementById('myImg') as HTMLImageElement
// img.src
// const img = document?.querySelector("img")!
// console.log("🚀 ~ img.src:", img)
const form = document.getElementById('myForm');
const myInput = document.querySelector('form > input');
form.onsubmit = (e) => {
    e.preventDefault();
    const value = Number(myInput.value);
    console.log("🚀 ~ value:", value, "typeof value", typeof myInput.value);
    const h2 = document.createElement("h2");
    h2.textContent = String(value + 20);
    const body = document.querySelector("body");
    body === null || body === void 0 ? void 0 : body.append(h2);
    console.log("🚀 ~  myInput.value:", myInput.value);
};
