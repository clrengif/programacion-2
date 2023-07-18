let stimeB,timeB;
let imagenB1,imagenB2, imagenB3, imagenB4;
let caja;
let stimeC,timeC;
let posXc;
let stop;

let estado;
let velocidad;


function preload(){
  
  imagenB1 = loadImage('banda000.png');
  imagenB2 = loadImage('banda001.png');
  imagenB3 = loadImage('banda002.png');
  imagenB4 = loadImage('banda003.png');
}
function setup() {
  createCanvas(800, 600);
  //Cargando imagenes de la animación 
  //de la banda transportadora
  
  
  caja = loadImage('caja.png');
  //arranca cronómetro reloj banda transportadora
  stimeB = millis();
  stimeC = millis();
  posXc = 100;
  stop = 0;
  estado = 0;
  velocidad = 1;
  frameRate(60);
}

function draw() {
  background(220);
  timeB = millis()-stimeB;

 /////////////////////////////////////////////
 // Animación banda
 ////////////////////////////////////////////
 if(stop == 0){
   if (timeB >0 && timeB < 500){
     image(imagenB1,0,0);
   }
   if(timeB >500 && timeB <  1000){
     image(imagenB2,0,0);
   }
   if (timeB >1000 && timeB < 1500){
     image(imagenB3,0,0);
   }
     if (timeB >1500 && timeB < 2000){
     image(imagenB3,0,0);
   }
   if(timeB >2000){
     stimeB = millis();
   }
 }
 else{
  stimeB = millis();
  image(imagenB1,0,0);
 } 
 /////////////////////////////////////////////  


 /////////////////////////////////////////////
 //Animación caja
  
 timeC = millis()-stimeC;

 image(caja,posXc,198);


 if(posXc > 0 && posXc < 300){
   estado=0;
 }
 if(posXc >= 300 && estado == 0){
   estado = 1;
   stop =1;
   stimeC = millis();
 }

 if(posXc > 300 && posXc <600){
   estado = 2;   
 }
  if(posXc > 600){
     posXc=100;
     estado = 0;
  }
  
 //Lógica de estados
  
 if(estado == 0){
   posXc+=velocidad;
 }
 if(estado == 1){
   timeC= millis()-stimeC;
   if(timeC > 2000){
    stop = 0;
    estado = 2;
   }
 }

  if (estado == 2){
   posXc+=velocidad;
  }


  
}