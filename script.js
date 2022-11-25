function saludar() {
    console.log("Hola bienvenido a Raquetas FIG!");
}
saludar();

//TRABAJA DE FORMA STRING POR DEFECTO
let nombre = prompt("Ingrese su nombre");

console.log("El usuario a ingresado: " + nombre);

alert("Hola !" + " " + nombre + " Somos Fanaticos del tenis y vendemos raquetas para tu gusto");

const raquetas = [
    {nombre:"wilsonBorn", variedad: "negra", precio: 71599},
    {nombre:"headGraphene", variedad: "negra", precio: 72990},
    {nombre:"wilsonProOpen", variedad: "amarilla", precio: 47500},
    {nombre:"wilsonUltraPower", variedad: "naranja", precio: 41999},
    {nombre:"headMxCyber", variedad: "negra", precio: 31700},
    {nombre:"headMxSpark", variedad: "azul", precio: 20800},
    {nombre:"babolatJunior", variedad: "blanca", precio: 12300},
    {nombre:"headSpeed", variedad: "negra", precio: 76180},
];

let carrito = []

let seleccion = prompt("Bievenidos! Deseas comprar alguna raqueta?");

while(seleccion != "si" && seleccion != "no"){
    alert("Por favor ingrese Si o No.")
    seleccion = prompt("Hola, desear comprar alguna raqueta?")
}

if(seleccion == "si"){
    alert("A continuacion nuestra lista de raquetas disponibles")
    let raquetasDisponibles = raquetas.map((raqueta) => raqueta.nombre + " " + "$" + raqueta.precio);
         alert(raquetasDisponibles.join(" - "));
    }else if(seleccion == "no"){
        alert("Gracias por su visita, lamentamos no poder ayudarte 😢")
}

while(seleccion != "no"){
    let raqueta = prompt("Agrega una raqueta a tu carrito")
    let precio = 0;

    if (raqueta == "wilsonBorn" || raqueta == "headGraphene" || raqueta == "wilsonProOpen" || raqueta == "wilsonUltraPower" || raqueta == "headMxCyber" || raqueta == "headMxSpark" || raqueta == "babolatJunior" || raqueta == "headSpeed"){
        switch(raqueta){
            case "wilsonBorn":
                precio = 71599
                break;
             case "headGraphene":
                precio = 72990
                break;
             case "wilsonProOpen":
                precio = 47500
                break;
             case "wilsonUltraPower":
                precio = 41999
                break;
             case "headMxCyber":
                precio = 31700
                break; case "headMxSpark":
                precio = 20800
                break;
             case "babolatJunior":
                precio = 12300
                break;
             case "headSpeed":
                precio = 76180
                break;
        
        }
    let unidades = parseInt(prompt("Cuantas unidades vas a llevar?"))

    carrito.push({raqueta, unidades, precio})
    console.log(carrito)
    } else {
        alert("No tenemos este producto en stock")
    }

    seleccion = prompt("Queres seguir comprando?")
    while (seleccion === "no") {
        alert("Gracias por la compra")
        carrito.forEach((carritoFinal) => {
            console.log(`producto: ${carritoFinal.raqueta}, unidades: ${carritoFinal.unidades}, Total a pagar por producto: ${carritoFinal.unidades * carritoFinal.precio}`)
        })

    break;
    }
}

const total = carrito.reduce((acumulador, elem) => acumulador + elem.precio * elem.unidades,0)
alert(`El total a pagar es de: ${total}`);