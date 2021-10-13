//Reto 10

/*
Realiza una aplicación que nos pida un número de ventas a introducir, después
nos pedirá tantas ventas por teclado como número de ventas se hayan indicado.
Al final mostrara la suma de todas las ventas. Piensa que es lo que se repite y lo
que no.
*/

/*
Autor: Armando Ramos
Version: 1.0
*/

//Input

let cantidadVentas = prompt("Número de ventas.");
let precios = [];
let precioTotal = 0;

//Proceso

cantidadVentas = parseInt(cantidadVentas);

for (let i = 1; i <= cantidadVentas; i++) {
    let precio = prompt("Introduce el precio del artículo " + i);
    precio = parseFloat(precio);
    precios.push(precio);
};

precios.forEach(precio => {
    precioTotal += precio;
});

//Output

console.log("El precio total es " + precioTotal);