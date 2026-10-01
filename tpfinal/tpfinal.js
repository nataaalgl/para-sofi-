let acciones = [];
let accionActual = 0;
let pantalla = 0;
let imagenes = [];
let animacion = [];
let mistextos = [];
let botoncont;
let botoninicio;
let botonreini;
let botonSI;
let noInvestigar;
let siInvestigar;
let paquete;
let abrirpaquete;
let caminoescondido;
let caminoarriba;
let caminopuente;
let fondo;
let x = 0;

const NOMBRES = ["ruedas"];
const FRAMES_POR_ACCION = [3];

function setup() {
  createCanvas(800, 450);
  textAlign(CENTER, CENTER);
  textFont('Arial');
  textSize(24);
  noStroke();

  console.log("Cantidad de lineas:", mistextos.length);
  console.log("Primera linea:", mistextos[0]);
  console.log("Textos cargados:", mistextos);
}

function draw() {
  console.log("x " + mouseX + "  | Y " + mouseY)
  background(25);

  if (pantalla === 0) pantallaInicio();
  else if (pantalla === 1) pantalla1();
  else if (pantalla === 2) pantalla2();
  else if (pantalla === 3) pantalla3();
  else if (pantalla === 4) pantalla4();
  else if (pantalla === 5) pantalla5();
  //IR AÑADIENDO MÁS PANTALLAS A MEDIDA QUE VAYAMOS CONTINUANDO LA HISTORIA!!!
}

// interacción con el mouse para ir pasando de pantalla a pantallas:

function mouseClicked() {
  //LOS DATOS DE CLICKEAR SON (x, y, ancho, alto, pantalladestino)!!
  if (pantalla === 0) {
    clickear(260, 325, 280, 70, 1);
  }
  else if (pantalla === 1) {
    // clickear sobre el misterioso paquete (x, y, ancho, alto, pantalladestino)
    clickear(360, 260, 130, 80, 2);
  }
  else if (pantalla === 2) {
    // paquete se abre (avanzar a ver el diario)
    clickear(180, 230, 320, 150, 3);
  }
  else if (pantalla === 3) {
    // catacumbas
    clickear(410, 120, 214, 187, 4);
    // final malo (cerrar diario)
    clickear(650, 173, 140, 119, 5);
  }
/* else if (pantalla === 4) {
    // camino escondido (izquierda)
    clickear(10, 40, 250, 360, 6); // AUN NO TIENEN PANTALLA DESTINO
    // camino por arriba (centro)
    clickear(330, 25, 280, 375, 7); // AUN NO TIENEN PANTALLA DESTINO
    // puente (derecha -> FINAL MALO INDY MUERE)
    clickear(680, 80, 115, 340, 8); // AUN NO TIENEN PANTALLA DESTINO
  } */
  else if (pantalla === 5) {
    // boton reiniciar
    clickear(260, 325, 260, 70, 0);
  }
}
