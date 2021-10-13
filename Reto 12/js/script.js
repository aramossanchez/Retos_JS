//Reto 12

/*
Escribe una aplicación con un String que contenga una contraseña cualquiera.
Después se te pedirá que introduzcas la contraseña, con 3 intentos. Cuando
aciertes ya no pedirá más la contraseña y mostrará un mensaje diciendo
“Enhorabuena”. Piensa bien en la condición de salida (3 intentos y si acierta sale,
aunque le queden intentos).
*/

/*
Autor: Armando Ramos
Version: 1.0
*/

//Input

let contraseñaGuardada = "qwer";
let intentos = 0;
let contraseñaCorrecta = false;
let mensajeMostrado = false;

//Proceso

//Output

do {
    intentos++;
    if (!contraseñaCorrecta) {
        var contraseñaUsuario = prompt("Introduce la contraseña");
    }
    if(contraseñaGuardada === contraseñaUsuario && mensajeMostrado == false){
        console.log("¡Enhorabuena!");
        contraseñaCorrecta = true;
        mensajeMostrado = true;
    }
    if(contraseñaGuardada != contraseñaUsuario){
        console.log("Contraseña incorrecta");
    }
} while (intentos < 3);