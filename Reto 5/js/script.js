//Reto 5

/*
Lee un número por teclado e indica si es divisible entre 2 (resto = 0). Si no lo es,
también debemos indicarlo.
*/

/*
Autor: Armando Ramos
Version: 1.0
*/

//Input

var numero = prompt("Introduce un número, y te diré si es par o no.");

//Proceso

numero = parseInt(numero);

//Output

if (numero%2 == 0) {
    console.log("El número " + numero + " es par.");
} else{
    console.log("El número " + numero + " es impar.");
}