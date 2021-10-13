//Reto 6

/*
Lee un número por teclado que pida el precio de un producto (puede tener
decimales) y calcule el precio final con IVA. El IVA sera una constante que sera
del 21%
*/

/*
Autor: Armando Ramos
Version: 1.0
*/

//Input

let precio = prompt("Introduce el precio del producto.");
const IVA = 21;
let precioTotal;

//Proceso

precio = parseFloat(precio);
precioTotal = precio*IVA/100 + precio;


//Output

console.log("El precio sin IVA es " + precio + ", y el precio total con IVA es " + precioTotal);