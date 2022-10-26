function saludar() {
    console.log("Hola bienvenido a Ataque mortal!");
}
saludar();

//TRABAJA DE FORMA STRING POR DEFECTO
let nombre = prompt("Ingrese su nombre");

console.log("El usuario a ingresado: " + nombre);

alert("Hola !" + " " + nombre + " Vamos a divertinos un poco!");

let ataque = prompt("Deseas ganar cueste lo que cueste ¿si o no?");

while (ataque != "si" && ataque != "no") {
    alert("Por favor ingresar si o no");
    ataque = prompt("Hola, tienes ganas de ganar ¿si o no?");
}
if (ataque == "si") {
    alert("A continuación combatiremos");
    let ataque = prompt("Escribe 0 para el primer ataque, 1 para segundo ataque, 2 para el tercer ataque y 3 para el cuarto ataque");
    if (ataque == 0) {
        alert("Tiene un valor de " + 80 + " de daño")
    } else if (ataque == 1) {
        alert("Tiene un valor de " + 20 + " de daño")
    } else if (ataque == 2) {
        alert("Tiene un valor de " + 15 + " de daño")
    } else if (ataque == 3) {
        alert("Tiene un valor de " + 10 + " de daño")
    } else {
        alert("No es la opcion correcta")
    }
} else if (ataque == "no") {
    alert("Gracias por visitarnos, hasta pronto!!")
}

let primerAtac = 80;
let segundoAtac = 20;
let tercerAtac = 15;
let cuartoAtac = 100;
let totalAtac = 0;

while (ataque != "no") {
    let producto = prompt("eligue otro ataque");
    let daño = 0;

    if (producto == primerAtac || producto == cuartoAtac) {
        switch (producto) {
            case primerAtac:
                daño = 80;
                alert("ganaste!!!")
                break
            case segundoAtac:
                daño = 20;
                alert("perdiste :(")
                break
            case tercerAtac:
                daño = 15;
                alert ("perdiste :(")
                break
            case cuartoAtac:
                daño = 100;
                alert ("has derrotado por completo")
                break
            default: 
            break;
        }
    }else {
        alert ("Te quedaste sin ataques")
    }
    ataque = prompt ("Desea elegir?")
    while (ataque === "no"){
        alert ("Gracias por jugar con nosotros, Hasta pronto!")
        break;
    }
}
