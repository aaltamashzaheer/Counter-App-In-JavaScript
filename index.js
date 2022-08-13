
const buttons = document.querySelectorAll(".btn")
const counter = document.querySelector("#counter")
console.log(buttons)

let ali = 0
buttons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        const altamash = e.currentTarget.classList

        if (altamash.contains("increase")) {
            ali++
        } else if (altamash.contains("decrease")) {
            ali--
        } else {
            ali = 0
        }

        if (ali > 0) {
            counter.style.color = 'green'
        }
        if (ali < 0) {
            counter.style.color = "red"
        } if (ali === 0) {
            counter.style.color = "gray"
        }

        counter.textContent = ali
    })
})