function preload() {
  for (let i = 0; i <= 5; i++) {
    imagenes.push(loadImage("data/pantalla" + i + ".png"));
  }

  botoncont = loadImage("data/boton1.png");
  botoninicio = loadImage("data/botoniniciar.png");
  botonreini = loadImage("data/botonreini.png");
  botonSI = loadImage("data/botonSI.png");
  noInvestigar =loadImage("data/opcion1.png");
  siInvestigar =loadImage("data/opcion2.png");
  paquete =loadImage("data/paquete.png");
  abrirpaquete=loadImage("data/abrirpaquete.png");
}
