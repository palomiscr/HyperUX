/*pagina 0*/
/*funcionamiento del botón play de la pagina de inicio*/

var mouseX;
var mouseY;
var contadorPerro = 0;

var ajustedX = 0;
var ajustedY = 0;

/*almacenamos continuamente la posición del ratón*/
$(document).mousemove(function(e) {
  mouseX = e.pageX;
  mouseY = e.pageY;
});


/*Para poder desplazar el boton play en el sentido opuesto pero en la misma direccion en la que nos acercamos
con el raton, calculamos la posicion del boton play en el momento en el que entra en contacto con el ratón y calculamos la diferencia
con la posicion del ratón. La diferencia va a ser mínima, por tanto la escalamos multiplicándola para que el desplazamiento del
boton play sea razonable. Debemos ir incrementando las variables ajustedX y ajustedY respecto a sus valores previos para conseguir el efecto
deseado, sino, estariamos reiniciando el valor. Por ultimo, asignamos las nuevas coordenadas al elemento cuya clase es "play".
 */
$(".play").on("mouseenter", function(e) {
  ajustedX = ajustedX + (e.pageX - mouseX) * 45;
  ajustedY = ajustedY + (e.pageY - mouseY) * 45;

  $(".play").animate({
    left: ajustedX,
    top: ajustedY
  });
});


/*pagina 1*/

/*en los campos de formulario tipo numericos desactivo el teclado para que solo se pueda
elegir el año de nacimiento mediante flechas*/
$("[type='number']").keypress(function(evt) {
  evt.preventDefault();
});




/*
IMPORTANTE
ESTE FORMULARIO ESTA HECHO CON FINES HUMORISTICOS. NO PRETENDE INVALIDAR NINGUNA
TEORIA DE GÉNERO. ME DISCULPO SI ALGUIEN SE HA PODIDO SENTIR OFENDIDO. EL GENERO
CON EL QUE SE IDENTIFICA CADA PERSONA DEBE SER RESPETADO.*/

/*calculo dinámico de los valores que se muestran el selector rango de género*/
function calculargenero() {
  var igenero = document.getElementById("genero").value;
  var generos = ["helicóptero de combate", "mujer", "agénero", "género fluido", "bigénero", "trigénero", "pangénero", "andrógino", "intergénero", "non-conforming", "intergénero", "hombre", "camello táctico"];
  var generoresul = generos[igenero];
  document.getElementById("generoresul").innerHTML = generoresul;
}

/*validacion del formulario CUANDO SE ENVÍA. Se comprueba que el año tiene un valor mínimo y que se tiene perro.
Si se selecciona que no se tiene perro, la pagina enviara un mensaje teniendo en cuenta la seleccion previa de si
se tenia perro o no
*/
function validateForm() {
  var tieneperro = document.forms["form1"]["perro"].value;
  var year = document.forms["form1"]["año"].value;
  if (year < 1900) {
    alert("no sabía que los dinosaurios pudieran usar internet");

  }
  else if (contadorPerro == 0) { //s selecciona "no tengo perro" por primera vez
    if (tieneperro == "no") {
      contadorPerro++;
      alert("Como que no tienes perro");

    } else {
      window.location = "pag2.html";

    }
  } else if (contadorPerro == 1) {
    /*el usuario ha seleccionado previamente que no tenia perro*/
    if (tieneperro == "yes") {
      /*ahora dice que sí tiene perro, es un mentiroso*/
      contadorPerro++;
      alert("Me estas diciendo la verdad?");

    } else {
      /*sigue diciendo que no tiene perro*/
      alert("Pues deberías, pon un fiel compañero en tu solitaria senda de informático");
      window.location = "pag2.html";
    }
  } else if (contadorPerro == 2) {
    /*solo si ha dicho "1.No 2.Sí"" se le muestra esto independientemente de la opcion que seleccione ahora*/

    alert("Esta te la paso, para el resto del cuestionario necesitarás estar mas avispado");
    window.location = "pag2.html";

  }
  return false;

}

/*pagina 4*/

/*asigno las imagenes a los cuadrados creados. Cada cuadradi tiene un id del 0 al 8.
El nombre de las imagenes sigue el patron spook<i>,jpeg
*/
for (var i = 0; i < 9; i++) {
  $(".cuadrado[id=" + i + "]").css("background-image", "url(images/spook" + i + ".jpeg)");
}
/*cuando se selecciona un cuadrado se colorea el borde de amarillo*/
$(".cuadrado").on("click", function(e) {
  $(this).css("border-color", "#fecd1a");
  $(this).css("border-style", "solid");

});


/*solo se avanza a la siguiente pagina si escribes algo distinto a "soy un robot", si no, vas al principio*/
function validateForm4() {
  var resul = document.forms["form4"]["captcha"].value;
  console.log(resul);
  if(resul == "soy un robot"){
    alert("ALERTA: EL SISTEMA HA DETECTADO UN ROBOT. REINICIANDO FORMULARIO");
    window.location = "pag1.html";
  }else{
    alert("Todo correcto. Has demostrado que no eres un robot");
    window.location = "pag5.html";
  }
return false;

}

/*pagina 5*/

function validateForm5() {
  var puntuacion = 0;
  //array de soluciones ejemplo: primera posicion es la primera pregunta cuya respuesta correcta es la de valor 4
  /*hay 11 preguntas, cada una con un valor del 1 al 4*/
  var respuestas = [4, 1, 2, 2, 3, 4, 3, 3, 1, 4, 2];

  /*los 11 nombres de las 11 preguntas que voy a usar para comprpbar rapidamente cuantos campos hay correctos*/
  /*OJO: hay mas imagenes de memes en la carpeta, ya que al final decidi no ponerlos todos. No los he borrado porque tendria que
   reordenar mucho código
  */
  var nombres = ["memeorden", "perro", "cyber", "man", "shaq", "sinji", "ibai", "game", "tok", "word", "girl"];
  for (var i = 0; i < respuestas.length; i++) {
    if (document.forms["form5"][nombres[i]].value == respuestas[i]) {
      puntuacion++;
    }

  }
  alert("Tienes " + puntuacion + " puntos de 11 totales");
  window.location = "pag6.html";

  return false;
}
