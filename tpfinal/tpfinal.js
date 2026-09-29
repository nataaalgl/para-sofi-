let pantalla = 0;
let imagenes = [];
let botoncont;
let botoninicio;
let botonreini;
let botonSI;
let noInvestigar;
let siInvestigar;
let paquete;
let abrirpaquete;

function setup() {
  createCanvas(800, 450);
  textAlign(CENTER, CENTER);
  textFont('Arial');
  textSize(24);
  noStroke();
}

function draw() {
  background(25);

  if (pantalla === 0) pantallaInicio();
  else if (pantalla === 1) pantalla1();
  else if (pantalla === 2) pantalla2();
  else if (pantalla === 3) pantalla3();
  else if (pantalla === 4) pantalla4();
  else if (pantalla === 5) pantalla5();
}

function pantallaInicio() {
  image(imagenes[0], 0, 0, width, height);
  if (dentroBoton(260, 325, 280, 70)) {
    tint(255, 255);
  } else {
    tint(255, 170);
  }
  image(botoninicio, 250, 280, 300, 160);
  noTint();
}
function pantalla1() {
  image(imagenes[1], 0, 0, width, height);
  fill(0, 175);
  rect(55, 25, 690, 60, 6);
  fill(255);
  textSize(17);
  textAlign(CENTER, TOP);
  text("Indiana Jones recibe un paquete misterioso de parte de Donovan.", width / 2, 45);
  // si el mousse está sobre el paquete
  if (mouseX > 360 && mouseX < 490 && mouseY > 260 && mouseY < 340) {
    image(paquete, 0, 0, width, height);
  }
}

function pantalla2() {
  image(imagenes[2], 0, 0, width, height);
  fill(0, 175);
  rect(55, 25, 690, 60, 6);
  fill(255);
  textSize(17);
  textAlign(CENTER, TOP);
  text("Decides abrir el paquete para saber de qué trata.", width / 2, 45);

  // paquete
  if (mouseX > 180 && mouseX < 500 && mouseY > 230 && mouseY < 380) {
    image(abrirpaquete, 0, 0, width, height);
  fill(0, 175);
  rect(55, 25, 690, 60, 6);
  fill(255);
  textSize(17);
  textAlign(CENTER, TOP);
  text("Decides abrir el paquete para saber de qué trata.", width / 2, 45);
  }
}

function pantalla3() {
  image(imagenes[3], 0, 0, width, height);
  fill(0, 175);
  rect(55, 25, 690, 85, 6);
  fill(255);
  textSize(16);
  textAlign(CENTER, TOP);
  text("Dentro del paquete se encuentra un diario.\nDescubrís que el autor es tu padre y que ha estado\ninvestigando sobre un amuleto llamado el Santo Grial.\nHace años que no sabés nada de él.", width / 2, 30);
  textSize(18);
  text("¿Querés investigar?", width / 2, 300);
  if (mouseX > 410 && mouseX < 624 && mouseY > 120 && mouseY < 307) {
    image(siInvestigar, 0, 0, width, height);
  } else if (mouseX > 650 && mouseX < 790 && mouseY > 173 && mouseY < 292) {
    image(noInvestigar, 0, 0, width, height);
  }
}

function pantalla4() {
  image(imagenes[4], 0, 0, width, height);
  fill(255);
  textSize(17);
  textAlign(CENTER, TOP);
  text("LA INFORMACION DEL DIARIO TE LLEVA A UNAS CATACUMBAS", width / 2, 30);
}

function pantalla5() {
  image(imagenes[5], 0, 0, width, height);
  if (dentroBoton(250, 280, 280, 160)) {
    tint(255, 255);
  } else {
    tint(255, 170);
  }
  image(botonreini, 250, 280, 280, 160);
  noTint();
}
function dibujarBoton(x, y, w, h, texto) {
  if (dentroBoton(x, y, w, h)) {
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

// interacción con el mouse para llegar a las pantallas:
function mouseClicked() {
if (pantalla === 0 && dentroBoton(260, 325, 280, 70)) {
    pantalla = 1;
  }
  else if (pantalla === 1) {
    // clickear sobre el misterioso paquete
    if (mouseX > 360 && mouseX < 490 && mouseY > 260 && mouseY < 340) {
      pantalla = 2;
    }
  }
  else if (pantalla === 2) {
    // paquete se abre (avanzar a ver el diario)
    if (mouseX > 180 && mouseX < 500 && mouseY > 230 && mouseY < 380) {
      pantalla = 3;
    }
  }
  else if (pantalla === 3) {
    // catacumbas 
    if (mouseX > 410 && mouseX < 624 && mouseY > 120 && mouseY < 307) {
      pantalla = 4;
    }
    // final malo (primer final)
    else if (mouseX > 650 && mouseX < 790 && mouseY > 173 && mouseY < 292) {
      pantalla = 5;
    }
  }
else if (pantalla === 5 && dentroBoton(260, 325, 260, 70)) {
    pantalla = 0;
  }
}

function dentroBoton(x, y, w, h) {
  return mouseX > x &&
         mouseX < x + w &&
         mouseY > y &&
         mouseY < y + h;
}
