// const btn = document.getElementById('ClickMeButton') as HTMLElement
const btn = <HTMLElement>document.getElementById('ClickMeButton')
// const btn =  document.getElementById('ClickMeButton')!

// btn.onclick;

// const img = document.getElementById('myImg') as HTMLImageElement
// img.src

// const img = document?.querySelector("img")!

// console.log("🚀 ~ img.src:", img)

const form = document.getElementById('myForm') as HTMLFormElement
const myInput = document.querySelector('form > input') as HTMLInputElement
form.onsubmit = (e: SubmitEvent) => {
    e.preventDefault();
    const value = Number(myInput.value)
    console.log("🚀 ~ value:", value, "typeof value", typeof myInput.value)
    const h2 = document.createElement("h2")
    h2.textContent = String(value + 20);

    const body = document.querySelector("body")
    body?.append(h2)

    console.log("🚀 ~  myInput.value:", myInput.value)

}
