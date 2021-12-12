btn1 = document.querySelector('#mybutton');
btn1.addEventListener("click", () => {
    alert("button clicked")
})



btn2 = document.querySelector('#backgroundButton');

let toggleColor = function () {
    document.body.classList.toggle("red-background")
}

btn2.addEventListener("click", toggleColor)