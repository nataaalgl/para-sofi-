let pantalla = 0;
let imgInicio, img1, img2, img3, img4, img5;
let botoncont;
let botoninicio;
let botonreini;



function preload() {
  imgInicio = loadImage("data/pantalla0.png");
  botoncont = loadImage("data/boton1.png");
  botoninicio = loadImage("data/botoniniciar.png");
   botonreini = loadImage("data/botonreini.png");
   
  img1 = loadImage("data/pantalla1.png");
  img2 = loadImage("data/pantalla2.png");
  img3 = loadImage("data/pantalla3.png");
  img4 = loadImage("data/pantalla4.png");
  img5 = loadImage("data/pantalla5.png");
}

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
  else if (pantalla === 6) pantalla6();
  else if (pantalla === 7) pantalla7();
}

// pantallas
function pantallaInicio() {
  image(imgInicio, 0, 0, width, height);
  image(botoninicio, 250, 280, 300, 160);
}

function pantalla1() {
  image(img1, 0, 0, width, height);

  fill(255);
  textSize(17);
  textAlign(CENTER, TOP);
  text("Indiana Jones recibe un paquete misterioso de parte de Donovan.", width/2, 30);
 image(botoncont, 250, 280, 300, 160);
}

function pantalla2() {
  image(img2, 0, 0, width, height);

  fill(255);
  textSize(17);
  textAlign(CENTER, TOP);
  text("Decides abrir el paquete para saber de qué trata.", width/2, 30);
  image(botoncont, 250, 280, 300, 160);
}

function pantalla3() {
  image(img3, 0, 0, width, height);

  fill(255);
  textSize(16);
  textAlign(CENTER, TOP);

  text("Dentro del paquete se encuentra un diario.\nDescubrís que el autor es tu padre y que ha estado\ninvestigando sobre un amuleto llamado el Santo Grial.\nHace años que no sabés nada de él.", width/2, 30);

  textSize(18);
  text("¿Querés investigar?", width/2, 300);

  dibujarBoton(150, 370, 200, 50, "SÍ", 4);
  dibujarBoton(450, 370, 200, 50, "NO", 5);
}

function pantalla4() {
  image(img4, 0, 0, width, height);

  fill(255);
  textSize(17);
  textAlign(CENTER, TOP);
  text("LA INFORMACION DEL DIARIO TE LLEVA A UNAS CATACUMBAS", width/2, 30);
}

function pantalla5() {
  image(img5, 0, 0, width, height);
  image(botonreini, 250, 280, 280, 160);;  
}

// botones
function dibujarBoton(x, y, w, h, texto, destino) {

  if (mouseX > x && mouseX < x + w && mouseY > y && mouseY < y + h) {
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

// clics
function mousePressed() {

  if (pantalla === 0 && dentroBoton(250, 280, 300, 90)) {
    pantalla = 1;
  }
  else if (pantalla === 1 && dentroBoton(250, 280, 300, 90)) {
    pantalla = 2;
  }
 
  else if (pantalla === 2 && dentroBoton(250, 280, 300, 90)) {
    pantalla = 3;
  }
  
  else if (pantalla === 3) {
    if (dentroBoton(150, 370, 200, 50)) pantalla = 4;
    if (dentroBoton(450, 370, 200, 50)) pantalla = 5;
  }

 else if (pantalla === 5 && dentroBoton(250, 280, 300, 90)) {
  pantalla = 0;   // vuelve al inicio
}
}

function dentroBoton(x, y, w, h) {
  return mouseX > x &&
         mouseX < x + w &&
         mouseY > y &&
         mouseY < y + h;
}
