//Reto 4

/*
Haz una aplicación que calcule el área de un círculo (pi*R2). El radio se pedirá
por teclado (recuerda pasar de String a double con parseDouble). Usa la
constante PI.
*/

/*
Autor: Armando Ramos
Version: 1.0
*/

//Input

let radio = prompt("Introduce el radio de la circunferencia");
const PI = 3.1416;
let resultado;

//Proceso

radio = parseFloat(radio);
resultado = PI * radio**2;

//Output

console.log("El área del circulo es " + resultado);