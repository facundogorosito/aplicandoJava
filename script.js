function saludar() {
    console.log("Hola bienvenido a Raquetas FIG!");
}
saludar();

//TRABAJA DE FORMA STRING POR DEFECTO
let nombre = prompt("Ingrese su nombre");

console.log("El usuario a ingresado: " + nombre);

alert("Hola !" + " " + nombre + " Somos Fanaticos del tenis y vendemos raquetas para tu gusto");

class Articulo {
    constructor(codigo, descripcion, precio, imagen) {
        this.codigo = Number(codigo);
        this.descripcion = descripcion;
        this.precio = Number(precio);
        this.imagen = imagen;
    }
}

const articulo1 = new Articulo(1, "RAQUETA HEAD IG CHALLENGE LITE EN VERDE", 75000, "https://www.dexter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dwd4c5a489/products/HE_234751/HE_234751-1.JPG ");
const articulo2 = new Articulo(2, "RAQUETA HEAD MX ATTITUDE TOUR EN ROJO", 45000, "https://www.dexter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dw40738070/products/HE_234301/HE_234301-1.JPG");
const articulo3 = new Articulo(3, "RAQUETA HEAD MX CYBER ELITE EN GRIS UNISEX", 47500, "https://www.dexter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dw454b5bf2/products/HE_234421/HE_234421-1.JPG");
const articulo4 = new Articulo(4, "RAQUETA WILSON PRO STAFF PRECISION GRAFITO", 105004, "https://http2.mlstatic.com/D_NQ_NP_778187-MLA49555701843_042022-O.webp");
const articulo5 = new Articulo(5, "RAQUETA WILSON RIVER PLATE ULTRA 100", 49600, "https://www.dexter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dw0379c5c4/products/WL_WR078111F/WL_WR078111F-1.JPG");
const articulo6 = new Articulo(6, "RAQUETA DUNLOP FX TEAM 285 GRIP 2", 38000, "https://www.dexter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dw43a1ca27/products/DU_UTRVFV071BU/DU_UTRVFV071BU-1.JPG");
const articulo7 = new Articulo(7, "Raqueta Wilson Boca Juniors Ultra 100", 85586, "https://www.dexter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dw50000854/products/WL_WR090511F/WL_WR090511F-1.JPG");
const articulo8 = new Articulo(8, "Raqueta Head Mx Spark Elite", 98673, "https://www.dexter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dwb8263ca2/products/HE_233352/HE_233352-1.JPG");
const articulo9 = new Articulo(9, "Raqueta Dunlop Sx 300 21 Nh Grip 3", 87759, "https://www.dexter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dwf2df869d/products/DU_UTRVFV118BY/DU_UTRVFV118BY-1.JPG");
const articulo10 = new Articulo(10, "Raqueta Dunlop CX 200 Tour 18x20 Grip 3", 92553, "https://www.dexter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dw63277663/products/DU_UTRVFV083BR/DU_UTRVFV083BR-1.JPG");
const articulo11 = new Articulo(11, "Raqueta Dunlop Fx 500 Grip 3", 62370, "https://www.dexter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dw31fac751/products/DU_UTRVFV086BU/DU_UTRVFV086BU-1.JPG");
const articulo12 = new Articulo(12, "Raqueta Dunlop Sx Team 280", 123970, "https://www.dexter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dw8513d385/products/DU_UTRVFV147BY/DU_UTRVFV147BY-1.JPG");


const articulos = [articulo1, articulo2, articulo3, articulo4, articulo5, articulo6, articulo7, articulo8, articulo9, articulo10, articulo11, articulo12];

const solicitarArticulos = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(articulos);
      }, 1000);
    });
  };
  
  let articulos55 = []
  
  solicitarArticulos()
    .then((res) => {
      articulos55 = res;
      mostrarCatalogo(articulos55);
    });

    function mostrarCatalogo(articulos55) {
    articulos55.forEach((art) => {
    let agrupador = document.getElementById("catalogo");
    let agrupador1 = document.createElement("div");
    agrupador1.innerHTML = `
    <div class="card mt-3 mb-3" style="width: 18rem;">
    <img src="${art.imagen}">  class="card-img-top" alt="articulo(${art.codigo})">
                <div class="card-body text-dark bg-secondary bg-opacity-25">                    
                      <p class="card-title text-center fs-5 fw-bold">${art.descripcion}</p>                      
                      <p class="card-text">$${art.precio}</p>
                    <div class="botonesDisplay">
                        <button class="btn btn-primary" onclick="Sacar(${art.codigo})">-</button>
                        <br>
                        <div id="${art.codigo}">                      
                            <input class="display" type="text" min="1" placeholder="1" name="cantidad" disabled></input>
                        </div>
                        <br>                      
                        <button class="btn btn-primary" onclick="Agregar(${art.codigo})">+</button>
                    </div>
                      <br>
                      <a href="#finalPagina"><button class="btn btn-primary" onclick="visualizarCarrito(${art.codigo})">Agregar Carrito</button></a>                        
                </div>                       

                    </div>
               `;
    agrupador.append(agrupador1);
    });
}

setTimeout(() => {
    let tituloFrase = document.getElementById("tituloFrase");
    tituloFrase.innerHTML = `<h2 class="tituloFrase">Te dejamos unas frases para que reflexiones.</h2>`;
    const numeros = [2399, 2206, 1198, 1992, 2039, 2130, 2813, 2843];
    let contador = -1;
    setInterval(() => {
      if (contador < 8) {
        contador++;
      } else {
        contador = -1;
      }
      const options = {
        method: "GET",
        headers: {
          "X-RapidAPI-Key": "ccaefc98fbmsha73882bc11b185cp103be5jsne0776200c6ca",
          "X-RapidAPI-Host": "quotes-villa.p.rapidapi.com",
        },
      };
  
      fetch("https://quotes-villa.p.rapidapi.com/quotes/art", options)
        .then((response) => response.json())
        .then(
          (data) =>
          (contenedorAgregar.innerHTML = `<div class="frase1" id="fetch"><p class="frase">${data[numeros[contador]
          ].text.toUpperCase()}</p> <h6 class="frase">${data[numeros[contador]
          ].author.toUpperCase()}</h6> </div>`
          ));
      let contenedorAgregar = document.getElementById("fetch");
    }, 10000);
  }, 1000);



let subtotal = 0;
function subTotal(precio, cant) {
    subtotal = 0;
    subtotal = precio * cant;
}

let total = 0;
function totalCarrito() {
    verCarrito.innerHTML = ``;
    total = 0;
    if (comprados.length !== 0) {
        agregarArticulos();
        let tenis2 = document.getElementById("totalCarro");
        tenis2.innerHTML = `<h2>Total:  $ ${total}</h2>`;
        let tenis3 = document.getElementById("confirmarCompra");
        tenis3.innerHTML = `<button class="btn btn-primary" onclick="confirmarCarrito()">Confirmar Carro</button>`;
    } else {
        let tenis1 = document.getElementById("verCarrito");
        tenis1.innerHTML = ``;
        verCarrito.innerHTML = ``;
        let tenis2 = document.getElementById("totalCarro");
        tenis2.innerHTML = ``;
    }
}

let tituloChango = 0;
function tablaChango() {
    verCarrito.innerHTML = ``;
    if (tituloChango === 0 && comprados.length > 0) {
        let tenis1 = document.getElementById("tituloCarrito");
        let contenedor1 = document.createElement("div");
        contenedor1.innerHTML = `<h2>Carrito de Compras</h2>
                <table class="table" border="1" cellpading="20" cellspacing="0">
                <tr class="color">
                    <th>CODIGO</th>
                    <th>DESCRIPCION</th>
                    <th>CANTIDAD</th>
                    <th>PRECIO</th>
                    <th>SUBTOTAL</th>
                    <th></th>
                    </tr>                                             
                </table>`
        tenis1.append(contenedor1);
        verCarrito.innerHTML = ``;
        totalCarrito();
        tituloChango = 1;
    } else if (comprados.length > 0) {        
        verCarrito.innerHTML = ``;
        totalCarrito();        
    } else {
        let tenis1 = document.getElementById("tituloCarrito");
        tenis1.innerHTML = ``;
        verCarrito.innerHTML = ``;
        let tenis3 = document.getElementById("confirmarCompra");
        tenis3.innerHTML = ``;
        agregarArticulos();
    }
}



let eliminarIcono = `<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-trash" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
    <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
  </svg>`;

let raquetas = 0;
function agregarArticulos() {
    raquetas = 0;
    localStorage.clear();
    const memoriaLocalStorage = (clave, valor) => { localStorage.setItem(clave, valor) };
    for (const articulo of comprados) {
        total = total + articulo.precio * articulo.cantidad;
        let tenis0 = document.getElementById("verCarrito");
        let contenedorAgregar = document.createElement("div");
        contenedorAgregar.innerHTML = `
    <table class="table1" border="1" cellpading="20" cellspacing="0">                       
                    <tr>
                        <td>${articulo.codigo}</td>                            
                        <td>${articulo.descripcion}</td>
                        <td>${articulo.cantidad}</td>
                        <td> $ ${articulo.precio}</td>
                        <td> $ ${articulo.subtotal}</td>
                        <td><span onclick="eliminar(${raquetas})">${eliminarIcono}</span></td>                            
                    </tr>                            
                </table>      
                `;
        tenis0.append(contenedorAgregar);
        raquetas = raquetas + 1;        
        memoriaLocalStorage("productosComprados", JSON.stringify(comprados));        
    }    
}

let porEliminar;
function eliminar(posicion) {
  porEliminar = comprados[posicion];
  Toastify({
    text:
      "Se elimino del carrito " +
      porEliminar.cantidad +
      " " +
      porEliminar.descripcion,
    duration: 3000,
    gravity: "top",
    position: "right",
  }).showToast();
    comprados.splice(posicion, 1);    
    totalCarrito();
    tablaChango();
    comprados.length > 0 ? (tituloCarro = 1) : (tituloCarro = 0);
    estadoDatos.innerHTML = ``;
}


function confirmarCarrito() {
    comprados.length = 0;
    localStorage.clear();
    let tenis0 = document.getElementById("verCarrito");
    tenis0.innerHTML = ``;
    let tenis1 = document.getElementById("tituloCarrito");
    tenis1.innerHTML = ``;
    verCarrito.innerHTML = `Elimino Local Storage`;
    let tenis2 = document.getElementById("totalCarro");
    tenis2.innerHTML = ``;
}

class Comprado {
    constructor(codigo, descripcion, precio, cantidad, subtotal) {
        this.codigo = Number(codigo);
        this.descripcion = descripcion;
        this.precio = Number(precio);
        this.cantidad = Number(cantidad);
        this.subtotal = Number(subtotal);
    }
}


let comprados = [];
function compra(codigo, descripcion, precio, cantidad, subtotal) {
    const comprado = new Comprado(codigo, descripcion, precio, cantidad, subtotal);
    comprados.push(comprado);
}


class Comprado1 {
    constructor(obj) {
        this.codigo = parseFloat(obj.codigo);
        this.descripcion = obj.descripcion;
        this.precio = parseFloat(obj.precio);
        this.cantidad = parseFloat(obj.cantidad);
        this.subtotal = parseFloat(obj.subtotal);
    }
}

let restablecer = 0
function restablecerCarrito() {
    if (restablecer === 0) {        
        guardados = JSON.parse(localStorage.getItem("productosComprados"));                
        if (localStorage.length > 0) {
            for (const objeto of guardados) {
                comprados.push(new Comprado1(objeto));
            }
        }        
        tablaChango();
        restablecer = 1;
    }
}



let cantidad = 1;
function Agregar(numArt) {
    cantidad = cantidad + 1;
    let stringId = numArt.toString();
    let container = document.getElementById(stringId);
    container.innerHTML = `<input class="display" type="text" min="1" placeholder=  "${cantidad}" name="cantidad" disabled>`;    
}

function Sacar(numArt) {
    if (cantidad > 0) {
        cantidad = cantidad - 1;tablaChango
        let stringId = numArt.toString();
        let container = document.getElementById(stringId);
        container.innerHTML = `<input class="display" type="text" min="1" placeholder=  "${cantidad}" name="cantidad" disabled>`;
    }
}

function visualizarCarrito(numArt) {           
    restablecerCarrito();    
    let stringId = numArt.toString();
    let container = document.getElementById(stringId);
    container.innerHTML = `<input class="display" type="text" min="1" placeholder=  "${cantidad}" name="cantidad" disabled>`;
    artSeleccionado = articulos.find((el) => el.codigo === numArt);
    subTotal(artSeleccionado.precio, cantidad);
    if (cantidad > 0) {
        let existe = comprados.some(comprado => comprado.codigo === numArt);
        if (existe === false) {
            subTotal(artSeleccionado.precio, cantidad);
            compra(artSeleccionado.codigo, artSeleccionado.descripcion, artSeleccionado.precio, cantidad, subtotal);
            let poner = document.getElementById("ponerCantidad");
            poner.innerHTML = `<p> </p>`;
            tablaChango();
        } else {
            artBuscado = comprados.find((el) => el.codigo === numArt);
            for (const objeto of comprados) {
                if (objeto.codigo === artBuscado.codigo) {
                    borrar = comprados.indexOf(objeto);
                }
            }
            comprados.splice(borrar, 1);
            compra(artSeleccionado.codigo, artSeleccionado.descripcion, artSeleccionado.precio, cantidad, subtotal);
            verCarrito.innerHTML = ``;
            totalCarrito();
        }
    } else {
        let poner = document.getElementById("ponerCantidad");
        poner.innerHTML = `<p>Indicar Articulo o Cantidad correctamente.</p>`;
    }
    cantidad = 1;
    subtotal = 0;
}