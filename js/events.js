var square = document.getElementById('events');
square.addEventListener('click', clickEd)
square.addEventListener('mouseenter', mouseEnter)
square.addEventListener('mouseout', mouseOut)

function clickEd() {
    square.innerText = "Você clicou!"
    square.style.background = "coral"
}
function mouseEnter() {
    square.innerText = "Você entrou no quadro!"
    square.style.background = "blueviolet"
}
function mouseOut() {
    square.innerText = "Você saiu do quadro!"
    square.style.background = "chartreuse"
}