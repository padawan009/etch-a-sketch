const gridContainer = document.querySelector('#grid-container')
const blackButton = document.querySelector('#black-button')
const rainbowButton = document.querySelector('#rainbow-button')
const eraseButton = document.querySelector('#erase-button')
const clearButton = document.querySelector('#clear-button')
const changeSizeButton = document.querySelector('#change-size-button')
let newSize = 16
let gridColor = 'black'   


document.addEventListener("DOMContentLoaded", () => {
    gridContainer.innerHTML = ''
    newGrid(newSize)
});


let gridDiv = 'white'

function newGrid(newSize) {
    gridContainer.innerHTML = ''
    gridContainer.style.gridTemplateColumns = `repeat(${newSize}, 1fr)`
    gridContainer.style.gridTemplateRows = `repeat(${newSize}, 1fr)`
 
    let i = 0

    while (i < newSize * newSize) {
        let gridDiv = document.createElement('gridDiv')
        gridDiv.style.border = '1px solid grey'
        gridDiv.style.backgroundColor = 'white'
        gridContainer.appendChild(gridDiv)
         gridDiv.addEventListener('mouseenter', () => {
            if (gridColor === 'black') {
                gridDiv.style.backgroundColor = 'black'
            }
            else if (gridColor === 'rainbow') {
                let rainbowColor = `rgb(${Math.floor(Math.random() * 256)}, 
                ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`
                gridDiv.style.backgroundColor = rainbowColor
                
                gridDiv.style.opacity = 0.1
                opacity += 0.1
                // while (gridDiv.style.opacity <= 1) {
                    
                //     gridDiv.style.opacity += 0.1
                // }
                
            } 
            else if (gridColor === 'erase') {
                gridDiv.style.backgroundColor = 'white'
            }

        })
        i++
    }
    
    
}


blackButton.addEventListener('click', () => {
    newGrid(newSize)
    gridColor = 'black'
})

rainbowButton.addEventListener('click', () => {
    newGrid(newSize)
    gridColor = 'rainbow'
})

eraseButton.addEventListener('click', () => {
    gridColor = 'erase'
})


clearButton.addEventListener('click', () => {
    newGrid(newSize)
})

changeSizeButton.addEventListener('click', () => {
    newSize = parseInt(prompt('Введите размер сетки: '))
    if (newSize > 100)
        alert('Введите значение меньше 100!')
    else
        newGrid(newSize)
})
