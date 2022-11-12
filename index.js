let selectedColor = 'blue'
let painting = document.querySelector('.painting')
let palette = document.querySelector('.palette')
let pixels = document.querySelectorAll('.pixel')

let purpleChoice = document.createElement('div')
purpleChoice.className = 'color-choice'
purpleChoice.id = 'purple'
purpleChoice.append('■')
palette.append(purpleChoice)

let clearButton = document.createElement('button')
clearButton.textContent ='Clear All'
palette.append(clearButton)

painting.addEventListener('click', (e) => {
    e.target.style.backgroundColor = selectedColor
})

painting.addEventListener('dblclick', (e) => {
    e.target.style.backgroundColor = 'white'
})

palette.addEventListener('click', (e) => {
    selectedColor = e.target.id
})

clearButton.addEventListener('click', () => {
    for(i = 0; i < pixels.length; i++) {
        pixels[i].style.backgroundColor = 'white'
    }
})