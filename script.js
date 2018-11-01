const square = document.createElement("div");
document.body.appendChild(square);

let size = 100;
square.style.width = size + "px";
square.style.height = size + "px";

let grow = true;

window.addEventListener("scroll", function () {
    if (size >= window.innerWidth / 4) {
        grow = !grow;
    } else if (size <= 0) {
        grow = !grow;
    }

    if (grow) {
        size += 5;
        square.style.width = size + "px";
        square.style.height = size + "px";
    } else {
        size -= 5;
        square.style.width = size + "px";
        square.style.height = size + "px";
    }
})