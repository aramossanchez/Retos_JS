//Reto 13

/*
Crea una aplicación llamada CalculadoraInversa, nos pedirá 2 operandos (int) y
un signo aritmético (String), según este último se realizará la operación
correspondiente. Al final mostrara el resultado en un cuadro de dialogo.
Los signos aritméticos disponibles son:
+: suma los dos operandos.
-: resta los operandos.
*: multiplica los operandos.
/: divide los operandos, este debe dar un resultado con decimales (double)
^: 1o operando como base y 2o como exponente.
%: módulo, resto de la división entre operando1 y operando2.
*/

/*
Autor: Armando Ramos
Version: 1.0
*/

//Input

var num1 = prompt("Introduce el 1º número.");
var signo = prompt("Introduce un signo aritmético entres los siguientes:\n'+' --> Suma\n'-' --> Resta\n'*' --> Multiplicación\n'/' --> División\n'^' --> Potencia\n'%' --> Módulo");
var num2 = prompt("Introduce el 2º número.");
var resultado = 0;

//Proceso

num1 = parseFloat(num1);
num2 = parseFloat(num2);

switch (signo) {
    case "+":
        resultado = num1 + num2;
        break;
    case "-":
        resultado = num1 - num2;
        break;
    case "*":
        resultado = num1 * num2;
        break;
    case "/":
        resultado = num1 / num2;
        break;
    case "^":
        resultado = num1 ** num2;
        break;
    case "%":
        resultado = num1 % num2;
        break;

    default:
        break;
}

//Output

console.log("El resultado de la operación " + num1 + " " + signo + " " + num2 + " es " + resultado);