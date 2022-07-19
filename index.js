let arreglo_producto = new Array();
let gen_id = 1;

let formulario = document.getElementById("formulario")
formulario.onsubmit = (e) =>{
    e.preventDefault();

let nombre = document.getElementById("name").value
let apellido = document.getElementById("lastName").value 
let dni = document.getElementById("dni").value
let datos = nombre +" "+apellido+" "+dni
localStorage.setItem(`Bienvenida`, `datos`)
console.log(datos)
    alert("Bienvenido al carrito de compras "+ datos)
}
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




carrito.onsubmit = (e) =>{
    e.preventDefault();
let carrito = document.getElementById("carrito")
carrito.onsubmit = () => (
    console.log("se ejecuto evento submit")
)

let botonPagar = document.getElementById("realizarPago")
}
// botonPagar.addEventListener("click", (), (
//     alert("como desea realizar el pago?"


// )
// ))

