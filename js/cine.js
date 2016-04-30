/*
function limpiar()
{
   document.getElementById("limpiar").innerHTML="";
}

var ciudad = ["Libertad", "Guayaquil", "Quito"];
var salas = ["5", " 8", "8"];
var direccion = ["Mz. 166-A S/N Vía Libertad, Edif. Paseo Shopping Libertad - Salinas","Sur: Av. 25 de Julio S/N, Edif. Riocentro Sur",
				"Quicentro Sur: Avenida Morán Valverde y Quitumbe"];


for (var i=0;i<3;i+=1)
						 {
		    document.write("<br>")
			document.write("Ciudad: " + ciudad[i])
			document.write("<br>")
			document.write("Numero de Salas: " + salas[i])
			document.write("<br>")
			document.write("Direccion: " + direccion[i])
			document.write("<br>")
 }
*/
function limpiar()
{
   document.getElementById("limpiar").innerHTML="";
}

var pelicula = ["avengers", "civil war", "narnia", "el aro", "los simpson"];
var actor = ["Iron man", "Capitan America", "Leon", "La niña", "Homero"];
var director = ["Juan", "Pedro", "Luis","Jonh", "Cesar"];
var genero = ["Ficcion", " Ficcion", "Aventura","terror","Animados"];


for (var i=0;i<5;i+=1)
						 {
		    document.write("<br>")
			document.write("pelicula: " + pelicula[i])
			document.write("<br>")
			document.write("actor: " + actor[i])
			document.write("<br>")
			document.write("director: " + director[i])
			document.write("<br>")
			document.write("genero: " + genero[i])
			document.write("<br>")
 } 