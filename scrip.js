function saludar() {
    console.log("Hola bienvenido a Raquetas FIG!");
}
saludar();

//TRABAJA DE FORMA STRING POR DEFECTO
let nombre = prompt("Ingrese su nombre");

console.log("El usuario a ingresado: " + nombre);

alert("Hola !" + " " + nombre + " Somos Fanaticos del tenis y vendemos raquetas para tu gusto");

let productos;
let rafaNadal = 90000;
let rogerFederer = 105000;
let djoko = 85000;
let ropaNadal = 70000;
let ropaFederer = 80000;
let ropaDjoko = 75000;
let acceNadal = 20000;
let acceFederer = 25000;
let acceDjioko = 23000
let totalCompra = 0;


function raquetas(){
        productos = parseInt(prompt("Para comprar raqueta de Rafael Nadal ingrese 1, para comprar de Roger Federer ingrese 2 o para comprar de Djokovik ingrese 3"));
        if(productos==1){
            totalCompra = totalCompra + rafaNadal
            console.log("compro raqueta de Nadal")
        }else if (productos==2){
            totalCompra = totalCompra + rogerFederer
            console.log("compro raqueta de Roger")
        }else if (productos==3){
            totalCompra = totalCompra + djoko
            console.log("compro raqueta de Djoko")
        }else{
            alert("No es la opcion que solicitamos")
        }
    }

    function ropa(){
        productos = parseInt(prompt("Para comprar ropa de Rafael Nadal ingrese 1, para comprar de Roger Federer ingrese 2 o para comprar de Djokovik ingrese 3"));
        if(productos==1){
            totalCompra = totalCompra + ropaNadal
            console.log("compro ropa de Nadal")
        }else if (productos==2){
            totalCompra = totalCompra + ropaFederer
            console.log("compro ropa de Federer")
        }else if (productos==3){
            totalCompra = totalCompra + ropaDjoko
            console.log("compro ropa de Djokovik")
        }else{
            alert("No es la opcion que solicitamos")
        }
    }

    function accesorios(){
        productos = parseInt(prompt("Para comprar accesorios de Rafael Nadal ingrese 1, para comprar de Roger Federer ingrese 2 o para comprar de Djokovik ingrese 3"));
        if(productos==1){
            totalCompra = totalCompra + acceNadal
            console.log("compro accesorios de nadal")
        }else if (productos==2){
            totalCompra = totalCompra + acceFederer
            console.log("compro accesorios de Federer")
        }else if (productos==3){
            totalCompra = totalCompra + acceDjioko
            console.log("compro accesorios de Djokovik")
        }else{
            alert("No es la opcion que solicitamos")
        }
    }

let opcion;

do{
    opcion = parseInt(prompt("¿Que te interesa comprar? Escribe 1 para raquetas, 2 para ropa, 3 para accesorios o 4 para salir"))

    switch(opcion){
        case 1:
            console.log("Comprar Raquetas")
            raquetas();
            break
        case 2:
            console.log("Comprar Ropa")
            ropa()
            break
        case 3:
            console.log("Comprar Accesorios")
            accesorios()
            break
        case 4:
                console.log("salir")
                break
        default:
            console.log("no ha elegido ninguna opcion")
            alert("no ha elegido ninguna opcion")
        break
    }
}while(opcion!=4)

alert("El valor total de su compra es de: $" + totalCompra)