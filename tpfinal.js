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
let correrAN;
let cuerpoAT;
let avion1;
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
  else if (pantalla === 6) pantalla6();
  else if (pantalla === 7) pantalla7();
  else if (pantalla === 8) pantalla8();
  else if (pantalla === 9) pantalla9();
  else if (pantalla === 10) pantalla10();
  else if (pantalla === 11) pantalla11();
  else if (pantalla === 12) pantalla12();
  else if (pantalla === 13) pantalla13();
  else if (pantalla === 14) pantalla14();
  else if (pantalla === 15) pantalla15();
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
else if (pantalla === 4) {
    // camino escondido (izquierda)
    clickear(10, 40, 250, 360, 6); 
    // camino por arriba (centro)
    clickear(330, 25, 280, 375, 7); 
    // puente (derecha -> FINAL MALO INDY MUERE)
    clickear(680, 80, 115, 340, 8); 
  } 
  //final malo
  else if (pantalla === 5) {
    // boton reiniciar  
    clickear(260, 325, 260, 70, 0);
    }
    
else if (pantalla === 6) {
    // botón CORRER 
    clickear(520, 320, 120, 110, 10); //te moris de un disparo
    // botón CUERPO A TIERRA 
    clickear(660, 320, 120, 110, 11); //llegas a el avion
  }
 else if (pantalla === 7) {
    clickear(260, 325, 260, 70, 9);   // continuar  pantalla 9

  } 
 // te moris x el puente
 else if (pantalla === 8) {
  clickear(260, 325, 260, 70, 0);   // reiniciar
}
  //te llevan dormido
 else if (pantalla === 9) {
    clickear(260, 325, 260, 70, 13);  


}
   // te matan de un disparo
 else if (pantalla === 10) {
   clickear(260, 325, 260, 70, 0);   // reiniciar
}
//llegas a el avion
 else if (pantalla === 11) {
  // click en el avión
  clickear(280, 90, 440, 250, 12);  
}
 //llegas a la puerta de la cueva
 else if (pantalla === 12) {
 
}
 // despertas atado junto a tu padre
 else if (pantalla === 13) {

  // Daga
  clickear(75, 290, 75, 120, 15);   // x, y, ancho, alto, pantalla destino

  // Mechero
  clickear(156, 335, 79, 25, 14);   // ajustá el alto si hace falta

   }
 //logras derrotar a los solados
 else if (pantalla === 14) {
 
}
 //los soldados descubren q te queres escapar y te matan
 else if (pantalla === 15) {
  clickear(260, 325, 260, 70, 13); 
}
 
}






 
