let arreglo_producto = new Array();
let gen_id = 1;

let nombre = document.getElementById("name").value
let apellido = document.getElementById("lastName").value 
let dni = document.getElementById("dni").value
let datos = nombre +" "+apellido+" "+dni
let formulario = document.getElementById("formulario")
formulario.onsubmit = () =>( 
    alert("Bienvenido al carrito de compras "+ datos))

    const listaProductos = [
        {
            id : 1,
            nombre : "remera",
            precioCompra : "500",
            precioVenta : "1500",
            cantidadTalleS : "5",
            cantidadTalleM : "3",
            cantidadTalleL : "2",
            descripcion : "remera mc",
        },
        {
            id : 2,
            nombre : "musculosa",
            precioCompra : "400",
            precioVenta : "2000",
            cantidadTalleS : "3",
            cantidadTalleM : "5",
            cantidadTalleL : "2",
            descripcion : "musculosa transparente",
        },
        {
            id : 3,
            nombre : "maya",
            precioCompra : "1000",
            precioVenta : "3000",
            cantidadTalleS : "2",
            cantidadTalleM : "2",
            cantidadTalleL : "1",
            descripcion: "sunga hombre ",
        },
        {
            id : 4,
            nombre : "jean",
            precioCompra : "1500",
            precioVenta : "5000",
            cantidadTalleS : "2",
            cantidadTalleM : "2",
            cantidadTalleL : "2",
            descripcion : "jean roto",
        },
];

let contenedorProductos = document.getElementById("contenedor-productos")

for (const producto of listaProductos){
    let columnaNueva = document.createElement("div")
    columnaNueva.className = "col-md-6 mt-3 mr-0"
    columnaNueva.id = `columnaNueva-${producto.id}`
    columnaNueva.innerHTML = `
    <div class="card">
        <div class="card-body">
            <p class="card-text"> Nombre: <b>${producto.nombre} </b></p>
            <p class="card-text"> Precio Compra: <b>${producto.precioCompra} </b></p>
            <p class="card-text"> Precio Venta: <b>${producto.precioVenta} </b></p>
            <p class="card-text"> Cant Talle S: <b>${producto.cantidadTalleS} </b></p>
            <p class="card-text"> Cant Talle M: <b>${producto.cantidadTalleM} </b></p>
            <p class="card-text"> Cant Talle L: <b>${producto.cantidadTalleL} </b></p>
            <p class="card-text"> Descripcion: <b>${producto.descripcion} </b></p>
        </div>
    </div>
    `
    contenedorProductos.append(columnaNueva)
}

// let check = true;
// while (check) {

//     let mensaje = "Indique lo que deser realizar: ";
//     mensaje += "\n1) Agregar producto";
//     mensaje += "\n2) Eliminar producto";
//     mensaje += "\n3) Mostrar productos agregados";
//     mensaje += "\n4) Aplicar descuento";
//     mensaje += "\n5) Salir";

//     let respuesta = prompt(mensaje);

//     switch (respuesta) {

//         case "1":
//             agregar_producto();
//             break;

//         case "2":
//             eliminar_producto();
//             break;

//         case "3":
//             mostrar_productos_agregados();
//             // pago();
//             break;

//         case "4":
//             aplicar_descuento();
//             // pago();
//             break;

//         case "5":
//             alert("Gracias por visitarnos");
//             check = false;
//             break;

//         case null:
//             alert("Gracias por visitarnos");
//             check = false;
//             break;

//         default:
//             alert("Gracias por visitarnos");

//     }

// }

// function agregar_producto() {

//     let producto = solicitar_producto()

//     if (producto) {

//         producto.set_id(gen_id);
//         gen_id++;
//         arreglo_producto.push(producto);
//         alert("Se agregó con éxito el producto: ");
//         console.log(arreglo_producto);

//     }
    
// }

// function solicitar_producto() {

//     let check1 = true;

//     while (check1) {

//         let msj = "";

//         let nombre = prompt("Ingrese nombre del producto").trim();
//         let cantidad = parseInt(prompt("Ingrese cuantos productos de estos agregar").trim());
//         let precio = parseFloat(prompt("Ingrese precio del producto").trim());

//         if (!nombre) {

//             msj += "\nDebe ingresar el nombre del producto";

//         }

//         if (isNaN(cantidad)) {

//             msj += "\nDebe ingresar el número de productos a comprar";

//         }

//         if (isNaN(precio)) {

//             msj += "\nDebe ingresar un valor numérico para el precio";

//         }

//         if (msj != "") {

//             alert(msj);
//             check1 = confirm("Desea cargar de nuevo los datos?");

//         } else {

//             return new Producto(nombre, cantidad, precio);

//         }
//     }
// }

// function eliminar_producto() {

//     if (existen_productos()) {

//         let id_ingresado = prompt("Ingrese el id del producto a eliminar");

//         if (id_ingresado) {

//             let producto_encontrado = arreglo_producto.find((s) => s.id == id_ingresado);

//             if (producto_encontrado) {

//                 let resp = confirm("Está seguro que desea eliminar el auto: " + producto_encontrado.mostrar_descripcion());
//                 if (resp) {

//                     arreglo_producto = arreglo_producto.filter((s) => s.id != id_ingresado);
//                     alert("Eliminaste el poducto");
//                 }
//             }

//         }

//     }
// }

// function mostrar_productos_agregados() {

//     if (existen_productos()) {

//         mostrar_producto();

//     }
// }

// function mostrar_producto() {

//     let mensaje = "Los productos en el carro son:";

//     arreglo_producto.forEach((producto) => {

//         mensaje += "\n " + producto.mostrar_producto();
//     })

//     alert(mensaje);
// }

// function existen_productos() {

//     if (arreglo_producto.length == 0) {

//         alert("No cargaste productos al carrito");
//         return false;

//     } else {

//         return true;
//     }
// }

// function pago(){
//     let precioEfectivo = parseFloat(2000);

//     const multiplicar = (num1, num2) => Math.round(num1 * num2);

//     let elegirNumCuota = " ";

//     while (elegirNumCuota != 1 && elegirNumCuota != 3 && elegirNumCuota != 6 && elegirNumCuota != 9 && elegirNumCuota != 12) {

//         elegirNumCuota = parseInt(prompt("Ingrese el número de cuotas con que desea pagar el producto. \n1 cuota: sin interés \n3 cuotas: 5% de interés \n6 cuotas: 10% de interés \n9 cuotas: 15% de interés \n12 cuotas: 20% de inerés"))

//         switch (elegirNumCuota) {

//             case 1:
//                 alert("Precio total en 1 cuota es: \n$" + precioEfectivo);
//                 break;

//             case 3:
//                 alert("Precio total en 3 cuotas es:  \n$" + multiplicar(precioEfectivo, 1.05));
//                 break;

//             case 6:
//                 alert("Precio total en 6 cuotas es: \n$" + multiplicar(precioEfectivo, 1.10));
//                 break;

//             case 9:
//                 alert("Precio total en 9 cuotas es: \n$" + multiplicar(precioEfectivo, 1.15));
//                 break;

//             case 12:
//                 alert("Precio total en 12 cuotas es: \n$" + multiplicar(precioEfectivo, 1.20));
//                 break;

//             default:
//                 alert("No ingresaste un número de cuotas válido. Recuerda que puedes pagar en \n1 \n3 \n6 \n9 \n12 \n cuotas");


//         }

//     }
// }    
let botonUno = document.getElementById("agregarCompra")
botonUno.addEventListener("click", () => (
    alert("se agregó producto al carrito")
))
let carrito = document.getElementById("carrito")
carrito.onsubmit = () => (
    console.log("se ejecuto evento submit")
)

let botonPagar = document.getElementById("realizarPago")

botonPagar.addEventListener("click", () (
    alert(

function pago(){
    let precioEfectivo = parseFloat(2000);

    const multiplicar = (num1, num2) => Math.round(num1 * num2);

    let elegirNumCuota = " ";

    while (elegirNumCuota != 1 && elegirNumCuota != 3 && elegirNumCuota != 6 && elegirNumCuota != 9 && elegirNumCuota != 12) {

        elegirNumCuota = parseInt(prompt("Ingrese el número de cuotas con que desea pagar el producto. \n1 cuota: sin interés \n3 cuotas: 5% de interés \n6 cuotas: 10% de interés \n9 cuotas: 15% de interés \n12 cuotas: 20% de inerés"))

        switch (elegirNumCuota) {

            case 1:
                alert("Precio total en 1 cuota es: \n$" + precioEfectivo);
                break;

            case 3:
                alert("Precio total en 3 cuotas es:  \n$" + multiplicar(precioEfectivo, 1.05));
                break;

            case 6:
                alert("Precio total en 6 cuotas es: \n$" + multiplicar(precioEfectivo, 1.10));
                break;

            case 9:
                alert("Precio total en 9 cuotas es: \n$" + multiplicar(precioEfectivo, 1.15));
                break;

            case 12:
                alert("Precio total en 12 cuotas es: \n$" + multiplicar(precioEfectivo, 1.20));
                break;

            default:
                alert("No ingresaste un número de cuotas válido. Recuerda que puedes pagar en \n1 \n3 \n6 \n9 \n12 \n cuotas");


        }

    }
}    
)
))