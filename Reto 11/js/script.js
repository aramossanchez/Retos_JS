//Reto 11

/*
Crea una aplicación que nos pida un día de la semana y que nos diga si es un día
laboral o no. Usa un switch para ello.
*/

/*
Autor: Armando Ramos
Version: 1.0
*/

//Input

var dia = prompt("Dime un día de la semana (todo en minúsculas y sin tildes)");

//Proceso

//Output

switch (dia) {
    case "lunes":
        console.log("El " + dia + " es un día laborable.");
        break;
    case "martes":
        console.log("El " + dia + " es un día laborable.");
        break;
    case "miercoles":
        console.log("El " + dia + " es un día laborable.");
        break;
    case "jueves":
        console.log("El " + dia + " es un día laborable.");
        break;
    case "viernes":
        console.log("El " + dia + " es un día laborable.");
        break;
    case "sabado":
        console.log("El " + dia + " es un día no laborable.");
        break;
    case "domingo":
        console.log("El " + dia + " es un día no laborable.");
        break;
    default:
        alert("Has introducido mal el nombre. RECUERDA: todo en minúsculas y sin tildes.");
        break;
}