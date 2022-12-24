// Datos de entrada
var seleccion = prompt("Seleccione uno de nuestros hoteles: Hotel1 , Hotel2 , Hotel3");
var puntuacion = prompt("Indique el número de estrellas de su puntuación: una , dos , tres , cuatro , cinco");
var privacidad = confirm("¿Desea que su reseña sea anónima?");

// Contenido
var hoteles = {
  Hotel1: {
    nombre: "HOTEL MARAVILLAS",
    ubicacion: "Alicante",
    imagen: "/assets/images/opcion1.jpg",
  },
  Hotel2: {
    nombre: "HOTEL DON MANUEL",
    ubicacion: "Almería",
    imagen: "/assets/images/opcion2.jpg",
  },
  Hotel3: {
    nombre: "HOTEL DON antonio",
    ubicacion: "Granada",
    imagen: "/assets/images/opcion3.jpg",
  },
};

var valoracion = {
  una: "&#9733;&#9734;&#9734;&#9734;&#9734",
  dos: "&#9733;&#9733;&#9734;&#9734;&#9734",
  tres: "&#9733;&#9733;&#9733;&#9734;&#9734",
  cuatro: "&#9733;&#9733;&#9733;&#9733;&#9734",
  cinco: "&#9733;&#9733;&#9733;&#9733;&#9733",
};

// Datos de salida
var nombre = hoteles[seleccion].nombre;
var ubicacion = hoteles[seleccion].ubicacion;
var foto = hoteles[seleccion].imagen;
var estrellas = valoracion[puntuacion];

document.getElementById("nombre").innerHTML = nombre;
document.getElementById("ubicacion").innerHTML = ubicacion;
document.getElementById("foto").src = foto;
document.getElementById("estrellas").innerHTML = estrellas;
document.getElementById("verificacion").checked = privacidad;
