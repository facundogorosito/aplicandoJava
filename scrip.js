console.log("Bienvenidos a JavaScrip");

//TRABAJA DE FORMA STRING POR DEFECTO
let nombre = prompt("Ingrese su nombre");

console.log("El usuario a ingresado: " + nombre);

alert("Hola !" + " " + nombre + "Que comience el juego :S !!");


//TRABAJA DE FORMA NUMBER CAMBIANDOLO

let numero1 = Number (prompt("Ingrese un numero"));

console.log(numero1);

//CONS.LOG SUMANDOSE

let numero2 = Number (prompt("Ingrese otro numero"));

console.log(numero1 + numero2 + (numero2 + numero2));

 // CONDICIONES Y OPERADORES //

/*    ==  ES IGUAL  
      === ESTRICTAMENTE IGUAL 
      != ES DISTINTO
      !== ESTRICTAMENTE DISTINTO
    < <= > >= MENOR, MENOR O IGUAL, MAYOR, MAYOR O IGUAL
      && OPERADOR AND (Y)
      || OPERADOR OR (O)
      ! OPERADOR NOT (NO)
*/


let edad = prompt ("Ingrese su edad");
if (edad >= 18) {
    alert ("Eres mayor de edad. Puedes Ingresar.");
} else {
    alert ("Sos menor de edad. No puedes ingresar.");
}

let hora = prompt ("Ingrese la hora");

if (hora >= 6 && hora <=12) {
    alert ("Buenos dias !");
} else if (hora >= 12 && hora <=19){
    alert ("Buenas tardes!");
} else {
    alert ("Buenas noches!");
}

let usuario1 = "facuz";
let usuario2 = "coder";


let nombreUsuario = prompt ("Ingrese su usuario")

if (nombreUsuario == usuario1 || nombreUsuario == usuario2) {
    alert ("Bienvenido " + nombreUsuario);
} else {
    alert ("Nombre de usuario incorrecto")
}

// CICLOS E INTERACCIONES //

//- WHILE
let 