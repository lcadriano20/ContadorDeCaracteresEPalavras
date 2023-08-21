// CAPTURAR ELEMENTOS 
const input        = document.querySelector('#input')
const counter      = document.querySelector('.counter')
const toggleButton = document.querySelector('#toggle')


let mode = "characters"


// Funções 
function changeMode() {
    if (mode === "characters") {
        mode = "words"
        toggleButton.textContent = "Contar caracteres"
    } else {
        mode = "characters"
        toggleButton.textContent = "Contar palavras"
    }
    input.dispatchEvent(new Event("input"))
}




// EVENTOS
input.addEventListener('input',(e)=>{

    let count = 0; 

    if (mode === "characters") {
        count = input.value.length
        counter.textContent = `${count} caractere(s)`
    } else {
        const words = input.value.trim().split(/\s+/)
        count = input.value.trim() === "" ? 0 : words.length
        counter.textContent = `${count} palavra(s)`
    }
})
toggleButton.addEventListener('click',changeMode)













