
/*
ESTE CODIGO ESTÁ SACADO DIRECTAMENTE DE GEEKSFORGEEKS CON ALGUNA MODIFICACION PARA
ADECUARLO A MI PROYECTO.SEGUN SU COPYRIGHT MENCIONANDO LOS APARTADOS A CONTINUACION
PUEDO HACER USO DEL CODIGO CON FINES NO COMERCIALES.

CODIGO: https://www.geeksforgeeks.org/how-to-draw-with-mouse-in-html-5-canvas/
INFORMACION COPYRIGHT: https://www.geeksforgeeks.org/copyright-information/
AUTOR DEL ARTICULO: tirtharajsengupta
LINK AL PERFIL DEL AUTOR: https://auth.geeksforgeeks.org/user/tirtharajsengupta/articles



*/



// wait for the content of the window element
// to load, then performs the operations.
// This is considered best practice.
window.addEventListener('load', () => {

  resize(); // Resizes the canvas once the window loads
  document.addEventListener('mousedown', startPainting);
  document.addEventListener('mouseup', stopPainting);
  document.addEventListener('mousemove', sketch);
  window.addEventListener('resize', resize);
});

const canvas = document.querySelector('#canvas');

// Context for the canvas for 2 dimensional operations
const ctx = canvas.getContext('2d');

// Resizes the canvas to the available size of the window.
function resize() {
  ctx.canvas.width = 300;
  ctx.canvas.height = 300;
}

// Stores the initial position of the cursor
let coord = {
  x: 0,
  y: 0
};

// This is the flag that we are going to use to
// trigger drawing
let paint = false;

// Updates the coordianates of the cursor when
// an event e is triggered to the coordinates where
// the said event is triggered.
function getPosition(event) {
  coord.x = event.clientX - canvas.offsetLeft;
  coord.y = event.clientY - canvas.offsetTop;
}

// The following functions toggle the flag to start
// and stop drawing
function startPainting(event) {
  paint = true;
  getPosition(event);
}

function stopPainting() {
  paint = false;
}

function sketch(event) {
  if (!paint) return;
  ctx.beginPath();

  ctx.lineWidth = 5;

  // Sets the end of the lines drawn
  // to a round shape.
  ctx.lineCap = 'round';

  ctx.strokeStyle = '#fd3a69';

  // The cursor to start drawing
  // moves to this coordinate
  ctx.moveTo(coord.x, coord.y);

  // The position of the cursor
  // gets updated as we move the
  // mouse around.
  getPosition(event);

  // A line is traced from start
  // coordinate to this coordinate
  ctx.lineTo(coord.x, coord.y);

  // Draws the line.
  ctx.stroke();
}