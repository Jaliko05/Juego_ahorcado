let palabras_escoger = new Arreglo();
palabras_escoger.optener_locaStorage();
let palabras_secretas = palabras_escoger.palabras;
console.log(palabras_secretas);
let palabra_adivinar = "";
let tecla_ingresada = "";
let tecla_codigo = "";
let esletra = false;
let contador = 0;
let parar = false;
let contador_letra_acertadas = 0;
let letra_ingresada_antes = "";
let letra_ingresada_ahora = "";
let escribir = true;

escoger_palabra();

let lienzo_horca = document.getElementById("contenedor_juego_canvas_horca");
let lienzo_lineas = document.getElementById("contenedor_juego_canvas");
let lienzo_letra = document.getElementById("contenedor_juego_canvas_letras");
let lienzo_incorecta = document.getElementById(
  "contenedor_juego_canvas_letras_erradas"
);

function nuevo_juego() {
  palabra_adivinar = "";
  tecla_ingresada = "";
  tecla_codigo = "";
  esletra = false;
  contador = 0;
  parar = false;
  contador_letra_acertadas = 0;
  cor_x = 20;
  letra_ingresada_antes = "";
  esletra = true;
  lienzo_horca.width = lienzo_horca.width;
  lienzo_lineas.width = lienzo_lineas.width;
  lienzo_letra.width = lienzo_letra.width;
  lienzo_incorecta.width = lienzo_incorecta.width;
  escoger_palabra();
}

function escoger_palabra() {
  let numero = Math.floor(Math.random() * palabras_secretas.length);
  palabra_adivinar = palabras_secretas[numero];
  console.log(palabra_adivinar);
  dibujar_lineas(palabra_adivinar);
}

function inicio_lineas(palabra) {
  let espacio = 0;
  if (palabra.length == 7) {
    espacio = 20;
  } else if (palabra.length == 6) {
    espacio = 40;
  } else if (palabra.length == 5) {
    espacio = 60;
  } else if (palabra.length == 4) {
    espacio = 80;
  } else if (palabra.length == 3) {
    espacio = 100;
  } else if (palabra.length == 2) {
    espacio = 120;
  } else if (palabra.length == 1) {
    espacio = 140;
  }
  return espacio;
}

function dibujar_lineas(palabra) {
  let x = inicio_lineas(palabra);
  console.log(x);
  let ancho_linea = 20;
  for (let i = 0; i < palabra.length; i++) {
    let lienzo_lineas = document.getElementById("contenedor_juego_canvas");
    let context = lienzo_lineas.getContext("2d");
    context.fillStyle = "#042940";
    context.fillRect(x, 0, ancho_linea, 30);
    x += ancho_linea * 2;
  }
}

document.addEventListener("keydown", optenerTecla);
function optenerTecla(event) {
  tecla_ingresada = event.key;
  tecla_codigo = event.keyCode;
  if (parar == false) {
    comprobar_tecla(tecla_codigo);
    if (esletra == true) {
      if (tecla_ingresada == tecla_ingresada.toUpperCase()) {
        if (letra_ingresada_antes.length > 0) {
          for (let i = 0; i < letra_ingresada_antes.length; i++) {
            if (letra_ingresada_antes.charAt(i) == tecla_ingresada) {
              escribir = false;
              break;
            } else {
              escribir = true;
            }
          }
        }
        if (escribir == true) {
          dibujarLetraCorrecta(palabra_adivinar, tecla_ingresada);
          letra_ingresada_antes += tecla_ingresada;
        } else {
          alert("Ya ingreso esa letra");
          escribir = true;
        }
      } else {
        alert("Solo se permiten letras MAYUCULAS!");
        esletra = false;
      }
    }
  }
}

function comprobar_tecla(tecla_code) {
  if (tecla_code >= 65 && tecla_code <= 90) {
    esletra = true;
  } else {
    esletra = false;
  }
}

function dibujarLetraCorrecta(palabra, tecla) {
  let ancho_linea = 20;
  let letra_incorrecta = true;
  for (let i = 0; i < palabra.length; i++) {
    let x = inicio_lineas(palabra);
    if (tecla == palabra.charAt(i)) {
      contador_letra_acertadas += 1;
      letra_incorrecta = false;
      x = x + ancho_linea * 2 * i;
      let lienzo_letra = document.getElementById(
        "contenedor_juego_canvas_letras"
      );
      let context = lienzo_letra.getContext("2d");
      context.font = "lighter 27px Tahoma ";
      context.fillStyle = "#9FC131";
      context.fillText(tecla, x, 135);
    }
  }
  if (letra_incorrecta == true) {
    contador++;
    dibujarLetraIncorecta(tecla);
    dibujar_ahorcado();
  }
  if (contador_letra_acertadas == palabra_adivinar.length) {
    dibujar_ganar_juego();
    parar = true;
  }
}
let cor_x = 20;
function dibujarLetraIncorecta(tecla) {
  let ancho_linea = 20;
  let lienzo_incorecta = document.getElementById(
    "contenedor_juego_canvas_letras_erradas"
  );
  let context = lienzo_incorecta.getContext("2d");
  context.textAlign = "start";
  context.font = "lighter 32px Tahoma ";
  context.fillStyle = "#D6D58E";
  context.fillText(tecla, cor_x, 50);
  cor_x = cor_x + ancho_linea * 2;
}

function dibujar_ahorcado() {
  if (contador == 1) {
    dibujar_horca();
  } else if (contador == 2) {
    dibujar_cabeza();
  } else if (contador == 3) {
    dibujar_tronco();
  } else if (contador == 4) {
    dibujar_mano_izquierda();
  } else if (contador == 5) {
    dibujar_mano_derecha();
  } else if (contador == 6) {
    dibujar_pierna_izquierda();
  } else if (contador == 7) {
    dibujar_pierna_derecha();
    dibujar_fin_juego();
    parar = true;
  }
}

function dibujar_horca() {
  let lienzo_horca = document.getElementById("contenedor_juego_canvas_horca");
  let context = lienzo_horca.getContext("2d");
  context.fillStyle = "#DBF227";
  context.fillRect(40, 140, 220, 1);

  context.fillStyle = "#DBF227";
  context.fillRect(80, 30, 2, 110);

  context.fillStyle = "#DBF227";
  context.fillRect(80, 30, 90, 1);

  context.fillStyle = "#DBF227";
  context.fillRect(170, 30, 2, 20);
}

function dibujar_cabeza() {
  let lienzo_horca = document.getElementById("contenedor_juego_canvas_horca");
  let context = lienzo_horca.getContext("2d");
  context.strokeStyle = "#DBF227";
  context.lineWidth = 1.5;
  context.beginPath();
  context.arc(171, 61, 12, 0, 2 * 3.14);
  context.stroke();
}

function dibujar_tronco() {
  let lienzo_horca = document.getElementById("contenedor_juego_canvas_horca");
  let context = lienzo_horca.getContext("2d");
  context.fillStyle = "#DBF227";
  context.fillRect(170, 72, 2, 40);
}

function dibujar_mano_izquierda() {
  let lienzo_horca = document.getElementById("contenedor_juego_canvas_horca");
  let context = lienzo_horca.getContext("2d");
  context.lineWidth = 1.5;
  context.strokeStyle = "#DBF227";
  context.beginPath();
  context.moveTo(171, 75);
  context.lineTo(140, 90);
  context.stroke();
}
function dibujar_mano_derecha() {
  let lienzo_horca = document.getElementById("contenedor_juego_canvas_horca");
  let context = lienzo_horca.getContext("2d");
  context.lineWidth = 1.5;
  context.strokeStyle = "#DBF227";
  context.beginPath();
  context.moveTo(171, 75);
  context.lineTo(200, 90);
  context.stroke();
}
function dibujar_pierna_izquierda() {
  let lienzo_horca = document.getElementById("contenedor_juego_canvas_horca");
  let context = lienzo_horca.getContext("2d");
  context.lineWidth = 1.5;
  context.strokeStyle = "#DBF227";
  context.beginPath();
  context.moveTo(171, 112);
  context.lineTo(140, 127);
  context.stroke();
}
function dibujar_pierna_derecha() {
  let lienzo_horca = document.getElementById("contenedor_juego_canvas_horca");
  let context = lienzo_horca.getContext("2d");
  context.lineWidth = 1.5;
  context.strokeStyle = "#DBF227";
  context.beginPath();
  context.moveTo(171, 112);
  context.lineTo(200, 127);
  context.stroke();
}
function dibujar_fin_juego() {
  let lienzo_horca = document.getElementById("contenedor_juego_canvas_horca");
  let context = lienzo_horca.getContext("2d");
  context.font = "lighter 20px Tahoma ";
  context.fillStyle = "#D92525";
  context.fillText("Fin del Juego", 91, 20);
}

function dibujar_ganar_juego() {
  let lienzo_horca = document.getElementById("contenedor_juego_canvas_horca");
  let context = lienzo_horca.getContext("2d");
  context.font = "lighter 20px Tahoma ";
  context.fillStyle = "#DBF227";
  context.fillText("Ganaste, Fellicidades!", 55, 20);
}
