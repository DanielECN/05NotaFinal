// Datos personales
var nombre = prompt("Ingresa un nombre y apellido: ")
var carrera = prompt("Ingresa carrera: ")

//Ingresa el ramo
var ramo1 = prompt("Ingresa tu primer ramo")
var ramo2 = prompt("Ingresa tu segundo ramo")
var ramo3 = prompt("Ingresa tu tercer ramo") 

//Notas
var notaPrimerRamo1 = parseFloat( prompt(`Ingresa nota 1 ${ramo1}`))
var notaPrimerRamo2 = parseFloat( prompt(`Ingresa nota 2 ${ramo1} `))
var notaPrimerRamo3 = parseFloat( prompt(`Ingresa nota 3 ${ramo1} `))


var notaSegundoRamo1 = parseFloat( prompt(`Ingresa nota 1 ${ramo2}`))
var notaSegundoRamo2 = parseFloat( prompt(`Ingresa nota 2 ${ramo2}`))
var notaSegundoRamo3 = parseFloat( prompt(`Ingresa nota 3 ${ramo2}`))

var notaTercerRamo1 = parseFloat( prompt(`Ingresa nota 1 ${ramo3}`))
var notaTercerRamo2 = parseFloat( prompt(`Ingresa nota 2 ${ramo3}`))


var promedioPrimerRamo = (notaPrimerRamo1 + notaPrimerRamo2 + notaPrimerRamo3)/3 
var promedioSegundoRamo = (notaSegundoRamo1 + notaSegundoRamo2 + notaSegundoRamo3)/3 
var promedioTercerRamo = (notaTercerRamo1 + notaTercerRamo2)/3
var promedioPrimerRamo = promedioPrimerRamo.toFixed(2)
var promedioSegundoRamo = promedioSegundoRamo.toFixed(2)

var need1 = (notaTercerRamo1 + notaTercerRamo2)

document.write("<div class='container'>");
document.write("<h1>Notas finales</h1>")
document.write("<p>Promedio para aprobar ramo : 4.0</p>")






document.write("Nombre: " + nombre, "<br>");

document.write("Carrera:  " + carrera);



document.write("<table class='table'>");

document.write("<thead class='bg-dark text-white'>");

document.write("<tr>");

document.write("<th scope='col'>Ramo</th>");
document.write("<th scope='col'>Nota 1 </th>");
document.write("<th scope='col'>Nota 2</th>");
document.write("<th scope='col'>Nota 3</th>");
document.write("<th scope='col'>Promedio</th>");

document.write("</tr");
document.write("</thead>");



document.write("<tbody>");
document.write("<tr>");
document.write(`<th >${ramo1}</th>`);
document.write("<td > "+ notaPrimerRamo1, "</th>");
document.write("<td >"+ notaPrimerRamo2,"</th>");
document.write("<td >"+ notaPrimerRamo3,"</th>");
document.write("<td >"+ promedioPrimerRamo,"</td>");
document.write("<tr/>");


document.write("<tr>");
document.write(`<th >${ramo2}</th>`);
document.write("<td > "+ notaSegundoRamo1, "</td>");
document.write("<td >"+ notaSegundoRamo2,"</td>");
document.write("<td >"+ notaSegundoRamo3,"</td>");
document.write("<td >"+ promedioSegundoRamo,"</td>");
document.write("<tr/>");


document.write("<tr>");
document.write(`<th >${ramo3}</th>`);
document.write("<td > "+ notaTercerRamo1, "</td>");
document.write("<td >"+ notaTercerRamo2,"</td>");
document.write("<td >"+ "-","</td>");
document.write("<td >"+ "PROMEDIO POR RESOLVER","</td>");


document.write("<tr/>");

document.write("<tr>");
if (need1 >=12) {
    document.write("<th> ya pasaste sigue mejorando</th>");
} else {
    var need2=12-need1
    document.write(`<th class="text-center"> Para pasar el ramo ${ramo3} con nota 4, necesitas un ${need2} en la nota 3</th>`);
}

document.write("<tr/>");
document.write("</tbody>");
document.write("</table");
document.write("</div>");


// 
// 



