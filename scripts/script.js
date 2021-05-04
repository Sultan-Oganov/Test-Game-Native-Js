let main = document.querySelector('.main')

let dots = []

for (let i = 1; i <= 53; i++) {
    let dot = document.createElement('div')
    if (i != 1 && i % 6 == 0) {
        dot.classList.add('point', 'end-point')
    } else if (i == 1) {
        dot.classList.add('point', 'start')
    } else if (i == 2 || i == 3) {
        dot.classList.add('point', 'black-point')
    } else if (i == 53) {
        dot.classList.add('point', 'finish')
    } else {
        dot.classList.add('point')
    }
    dots.push(dot)
}

let i = 1

dots.forEach(dot => {
    dot.classList.add('p' + i)
    i++
    return main.append(dot)
})
let girl = document.getElementById('girl')
let count = 1

document.addEventListener('keypress', () => {
    count++
    getPos()
    console.log(count)
    count == 53 ? alert('FINISH') : null
})
getPos = () => {
    let elem = document.querySelector('.p' + count);
    let t = window.getComputedStyle(elem, null).getPropertyValue("top")
    let l = window.getComputedStyle(elem, null).getPropertyValue("left");
    girl.style.position = 'absolute'
    girl.style.top = +t.substring(0, t.length - 2) - 50 + 'px'
    girl.style.left = +l.substring(0, l.length - 2) + 5 + 'px'
    girl.style.zIndex = '2'
    girl.style.transition = 'linear 0.5s 0s'
}
getPos()
