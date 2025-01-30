const gridContainer = document.querySelector('#grid-container')
const blackButton = document.querySelector('#black-button')
const rainbowButton = document.querySelector('#rainbow-button')
const eraseButton = document.querySelector('#erase-button')
const clearButton = document.querySelector('#clear-button')
const changeSizeButton = document.querySelector('#change-size-button')
let gridSize = 16
let currentColor = 'black'   
let gridBorder = '1px solid rgb(211, 217, 222)'

newGrid(gridSize)

function newGrid(gridSize) {
    gridContainer.innerHTML = ''
    gridContainer.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`
    gridContainer.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`
 
    let i = 0

    while (i < gridSize * gridSize) {
        let gridDiv = document.createElement('div')
        gridDiv.style.border = gridBorder
        gridDiv.style.backgroundColor = 'white'
        gridContainer.appendChild(gridDiv)
        i++
    } 
    setGridEvents()
}

function setGridEvents() {
    const gridDivs = document.querySelectorAll('#grid-container div')
    const gridArray = [...gridDivs]
    gridArray.forEach(gridDiv => {
          gridDiv.addEventListener('mouseenter', () => {
            colorChange(gridDiv)
            let gridOpacity = Number(gridDiv.style.opacity)
            // console.log(typeof gridDiv.style.opacity, gridDiv.style.opacity)
            // console.log(typeof gridOpacity, gridOpacity)
            if (gridOpacity < 1) {
                gridDiv.style.opacity = gridOpacity + 0.1;
            }  
        });
    })      
}

function colorChange(gridDiv) {
    if (currentColor === 'black') {
        gridDiv.style.backgroundColor = 'black'
        gridDiv.style.border = 'none'
        }
    else if (currentColor === 'rainbow') {
        let rainbowColor = `rgb(${Math.floor(Math.random() * 256)}, 
        ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`

        gridDiv.style.backgroundColor = rainbowColor
        gridDiv.style.border = 'none'       
        } 
    else if (currentColor === 'erase') {
        gridDiv.style.backgroundColor = 'white'
        gridDiv.style.border = gridBorder
        gridDiv.style.opacity = 1
        }
    }

blackButton.addEventListener('click', () => {
    newGrid(gridSize)
    currentColor = 'black'
})

rainbowButton.addEventListener('click', () => {
    newGrid(gridSize)
    currentColor = 'rainbow'
})

eraseButton.addEventListener('click', () => {
    currentColor = 'erase'
})

clearButton.addEventListener('click', () => {
    newGrid(gridSize)
})

changeSizeButton.addEventListener('click', () => {
    gridSize = parseInt(prompt('Введите размер сетки: '))
    console.log(gridSize)
    if (gridSize > 100)
        alert('Введите значение меньше 100!')
    else if (gridSize <= 0)
        alert('Некорректное значение! Введите число больше 0')
    else if (isNaN(gridSize))
        alert('Введите числовое значение')
    else
        newGrid(gridSize)  
})
