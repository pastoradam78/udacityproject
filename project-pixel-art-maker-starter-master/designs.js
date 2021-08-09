// To Do: -Access Inputs and Form Elements- assigned to variables.
//        -Add Event listeners
//        -Build grid with a loop
//        -Add click listeners for each of the cells to be painted.
// Select color input
// Select size input
// 1. Select elements and assing to variables
const color = document.getElementById('colorPicker')
const height = document.getElementById('inputHeight').value;
const width = document.getElementById('inputWidth').value;
const button = document.getElementById('submitButton')
const canvas = document.getElementById('pixelCanvas')

// When size is submitted by the user, call makeGrid()
//2. Add event listener
button.addEventListener('click', function() {
  event.preventDefault();
  makeGrid(height, width);
})

//3. Build a grid with a for loop, including listeners cell colors.
function makeGrid(height, width) {
for(var i = 0; i < height; i++) {
  let row = canvas.insertRow(i);
  for(var j = 0; j < width; j++) {
    let cell = row.insertCell(j);
    cell.addEventListener('click', function(e) {
      e.target.style.backgroundColor = color.value;
    })
  }
  }
}
