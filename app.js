//Parent Element
const container = document.getElementById('container');

//Generate the grid
let generateGrid = (rows, cols) => {
    if (rows < 101 && rows > 0) {
    let gridCell;
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
        for (var i = 0; i < (rows * cols); i++){
            gridCell = document.createElement('div');
            gridCell.classList = 'cell';
            gridCell.id = 'cell'
            container.appendChild(gridCell) ;
            gridCell.addEventListener('mouseover', drawSketch);
        };
    } else {
        alert('Pick a number 1-100')
    };
};

//Choose the grid size before generation
let newSketch = () => {
    let gridSize = prompt('Enter Grid Size (ex. 12 = 12 x 12)');
    if (gridSize == null){
        location.reload();
    } else {
    generateGrid(gridSize,gridSize);
    document.getElementById("newGrid").disabled = true
    };
};
    
let clearBtn = () => {
    location.reload();
};

//Add drawing functionality
function drawSketch(e){
    let option = document.getElementById("colors").value;
    if (option === 'Blue'){
        e.target.style.backgroundColor = '#90cdc3';
    } else if (option === 'Green') {
        e.target.style.backgroundColor = '#938f43';
    } else if (option === 'Brown'){
        e.target.style.backgroundColor = '#af8c72';
    } else if (option === 'Pink'){
        e.target.style.backgroundColor = '#f3cbbd'
    } else if (option === 'Tan'){
        e.target.style.backgroundColor = '#fbecdb'
    } else if (option === 'Black'){
        e.target.style.backgroundColor = 'Black'
    } else if (option === 'Random'){
        e.target.style.backgroundColor = `${randColor()}`
    }
};


//Random RGB generator
let randColor = () =>{
    let r = Math.floor(Math.random()*256);
    let g = Math.floor(Math.random()*256)
    let b = Math.floor(Math.random()*256)
    return `rgb(${r}, ${g}, ${b})`
};

console.log(randColor())







