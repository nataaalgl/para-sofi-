function dibujarBoton(x, y, w, h, texto) {
  if (mouseBoton(x, y, w, h)) {
    fill(111, 78, 55);
  } else {
    fill(101, 67, 33);
  }
  rect(x, y, w, h, 8);
  fill(255);
  textSize(22);
  textAlign(CENTER, CENTER);
  text(texto, x + w / 2, y + h / 2);
}

//detecta si el mouse está en el botón, los datos marcan el ancho del área que cubre ese botón!! Cambia según cada pantalla... Prestar atención
function mouseEnBoton(x, y, w, h) {
  return mouseX > x &&
         mouseX < x + w &&
         mouseY > y &&
         mouseY < y + h;
}

function clickear(x, y, w, h, pantalladestino) {
  if (mouseX > x && mouseX < x + w && mouseY > y && mouseY < y + h) {
    pantalla = pantalladestino;
  }
}
