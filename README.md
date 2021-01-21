# HyperUX

Página web que presenté al concurso "Spaguetti Codefest" organizado por la asociación Core Dumped de la ETSISI. 

******************************************************************************************************

DESCRIPCIÓN: 	Mi proyecto es una página web no desplegada, es decir lo único que hace falta para ejecutarla es
un navegador, recomiendo usar Google Chrome ya que puede haber problemas de compatibilidad que no he testeado.
Para empezar a ejecutarlo basta con hacer click en el fichero "hyperUX.html" y abrirlo en el navegador.

Mi página es una forma paródica del proceso de registro en una página web.
Se avanza en el proceso de registro completando de forma satisfactoria lo que se pide
en cada página. Se ha terminado el proceso cuando se llega a la página final, donde aparece un mensaje de felicitación
al usuario. 

*****************************************************************************************************

OBJETIVO:	El objetivo es que el usuario tenga que pensar lo que tiene que hacer para
avanzar y que se confunda y se pelee un poco con la página. En la sigiente
sección destripo su funcionamiento, por tanto se pierde el factor sorpresa.

****************************************************************************************************

ANTES DE SEGUIR LEYENDO RECOMIENDO EJECUTAR PRIMERO EL PROYECTO.

****************************************************************************************************

FUNCIONAMIENTO, DETALLES TÉCNICOS, USO DE RECURSOS EXTERNOS:






*****SPOILERS A CONTINUACIÓN******















 
0.	En la página inicial, el botón play en realidad no sirve para empezar, sino que hay que hacer click
abajo del todo donde pone "copytroll"



1.	En la primera pagina es obligatorio poner una fecha superior a 1900 usando las flechas.
No se permite escribir una fecha con teclado intencionadamente. Aparece ya escrito en el campo Nombre el string "Nombre",
esto también es a propósito ya que así incomodamos al usuario. 

También hay una serie de validaciones que preguntan si tienes perro y se muestran diferentes mensajes dependiendo
de las opciones seleccionadas.
El mensaje se personaliza en función de si el usuario ha dicho que sí tiene perro en su primer intento, en cuyo caso
se le permite avanzar. 
Si ha dicho que no, en el segundo intento si vuelve a reiterar su respuesta, se le aconseja que adopte un perro
y se le permite avanzar. Si en este segundo intento dice que sí, interpretamos que miente y le hacemos pasar
por un tercer intento donde el mensaje va a ser el mismo independientemente de su elección. 



2.	En esta página no hay validación. Cuando se hace click el borde de cada imagen se resalta en amarillo
simulando el funcionamiento de un captcha real



3.	En esta página no hay validación. El usuario debe intentar dibujar el símbolo.



4.	La página muestra un captcha para confundir al usuario pidiéndole que
escriba "soy un robot". Si escribe esa frase, se le devolverá al principio del proceso de registro,
ya que "ha confesado" que es un robot. Para poder avanzar, deberá escribir algo DIFERENTE de la frase 
mostrada en el captcha. 



5.	En este test no hace falta tener un mínimo de respuestas correctas. Sólo se informa
al usuario de cuál es su puntuación y se le lleva a la página final. 



6.	Página de finalización del proceso de registro. Se muestra un mensaje de enhorabuena. 





*********************************************************************************************************
IMPORTANTE:	EL "draw.js" que se encarga de permitir dibujar con el ratón en la página 3,
ESTÁ SACADO DIRECTAMENTE DE GEEKSFORGEEKS CON MODIFICACIONES PARA
ADECUARLO A MI PROYECTO(tamaño, color). SEGÚN SU COPYRIGHT, MENCIONANDO LOS APARTADOS A CONTINUACIÓN
PUEDO HACER USO DEL CÓDIGO CON FINES NO COMERCIALES.

CÓDIGO: https://www.geeksforgeeks.org/how-to-draw-with-mouse-in-html-5-canvas/
INFORMACION COPYRIGHT: https://www.geeksforgeeks.org/copyright-information/
AUTOR DEL ARTÍCULO: tirtharajsengupta
LINK AL PERFIL DEL AUTOR: https://auth.geeksforgeeks.org/user/tirtharajsengupta/articles


**********************************************************************************************************
