document.body.style.background = "#212326";
let board = [
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [1, 1, 1, 1, 1, 1, 1, 1],
  [0, 0, 0, 0, 0, 0, 0, 0],
];
let canvas = document.getElementById("main");
let ctx = canvas.getContext("2d");
var canvasPos = canvas.getBoundingClientRect();

let boardWidth = canvas.clientWidth;
let boardHeight = canvas.clientHeight;
let white = true;
board.forEach((col,colI)=>{
  white ? white= false : white = true
  col.forEach((row,rowI)=>{
    
    white ? ctx.fillStyle = "black" : ctx.fillStyle = "white"
    white ? white= false : white = true
    ctx.fillRect(colI*boardWidth/board.length,rowI*boardHeight/board.length,boardWidth/board.length,boardHeight/board.length)
  })
})

function printMousePos(event) {
  correctedMousePosX = event.clientX - canvasPos.left;
  correctedMousePosY = event.clientY - canvasPos.top;
}



document.addEventListener("click", printMousePos);

setInterval(function () {
  render();
}, 5);

function render() {
  board.forEach((col,colI)=>{
    col.forEach((row,rowI)=>{
      switch (row) {
        case 0:
          
          break;
        case 1:
          base_image = new Image();
          base_image.src = './src/img/white/pawn.png';
          base_image.onload = function(){
            ctx.drawImage(base_image,rowI*boardHeight/board.length, colI*boardWidth/board.length,boardWidth/board.length,boardHeight/board.length);
          }
          break;
        default:
          break;
      }
    })
  })
}

class Pawn{
  constructor(ctx){
    base_image = new Image();
    base_image.src = './src/img/white/pawn.png';
    base_image.onload = function(){
      ctx.drawImage(base_image, 0, 0,boardWidth/board.length,boardHeight/board.length);
    }
  }
}