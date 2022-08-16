let arreglo_producto = new Array();
let gen_id = 1;

let formulario = document.getElementById("formulario")
formulario.onsubmit = (e) =>{
    e.preventDefault();
//Login galeria + localstorage
let nombre = document.getElementById("name").value
let apellido = document.getElementById("lastName").value 
let dni = document.getElementById("dni").value
let datos = nombre +" "+apellido+" "+dni
localStorage.setItem(`Bienvenida`, `datos`)
console.log(datos)
Swal.fire({
    title: 'Bienvenido al carrito de compras',
    text: datos,
    imageUrl: 'https://img.myloview.es/posters/pares-afroamericanos-jovenes-que-se-sientan-entre-los-panieres-coloridos-mujer-y-hombre-divirtiendose-al-hacer-compras-juntos-ilustracion-de-dibujos-animados-de-vector-aislado-sobre-fondo-blanco-di-400-118422825.jpg',
    imageWidth: 400,
    imageHeight: 200,
    imageAlt: 'Custom image',
    position: 'top-center',
    timer: 8500
  })
    
}

// Lista de productos
    const listaProductos = [
        {
            id : 1,
            img : "./img/jeanRoto.jpg",
            nombre : "jean",
            precioCompra : "1500",
            precioVenta : "5000",
            cantidadTalleS : "2",
            cantidadTalleM : "2",
            cantidadTalleL : "2",
            descripcion : "jean roto",
        },
        {
            id : 2,
            img : "./img/remeraCruz2.jpg",
            nombre : "Remera con Cruz ",
            precioCompra : "400",
            precioVenta : "2000",
            cantidadTalleS : "3",
            cantidadTalleM : "5",
            cantidadTalleL : "2",
            descripcion : "Remera Cruz 2",
        },
        {
            id : 3,
            img : "./img/sunga.jpg",
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
            img : "./img/RemeraCruz.jpg",
            nombre : "remera",
            precioCompra : "500",
            precioVenta : "1500",
            cantidadTalleS : "5",
            cantidadTalleM : "3",
            cantidadTalleL : "2",
            descripcion : "remera mc",

        },
        {
            id : 5,
            img : "./img/bermuda.jpg",
            nombre : "Bermuda Jean",
            precioCompra : "1500",
            precioVenta : "5000",
            cantidadTalleS : "2",
            cantidadTalleM : "2",
            cantidadTalleL : "2",
            descripcion : "Bermuda Jean",
        },
        {
            id : 6,
            img : "./img/camisa.jpg",
            nombre : "Camisa",
            precioCompra : "1500",
            precioVenta : "5000",
            cantidadTalleS : "2",
            cantidadTalleM : "2",
            cantidadTalleL : "2",
            descripcion : "Camisa",
        },
        {
            id : 7,
            img : "./img/shortBaño.jpg",
            nombre : "Short de Baño",
            precioCompra : "1500",
            precioVenta : "5000",
            cantidadTalleS : "2",
            cantidadTalleM : "2",
            cantidadTalleL : "2",
            descripcion : "Short de Baño",
        },
        {
            id : 8,
            img : "./img/musculosaCapucha.jpg",
            nombre : "Musculosa con Capucha",
            precioCompra : "1500",
            precioVenta : "5000",
            cantidadTalleS : "2",
            cantidadTalleM : "2",
            cantidadTalleL : "2",
            descripcion : "Musculosa Deportiva con capucha",
        },
];

let contenedorProductos = document.getElementById("contenedor-productos")

for (const producto of listaProductos){
    let columnaNueva = document.createElement("div")
    columnaNueva.className = "col-md-4 mt-3 mr-0"
    columnaNueva.id = `columnaNueva-${producto.id}`
    columnaNueva.innerHTML = `
    <div class="card">
        <img src="${producto.img}" class="card-img-top img-fluid" alt="">
        <div class="card-body">
            <p class="card-text"> Nombre: <b>${producto.nombre} </b></p>
            <p class="card-text"> Precio Compra: <b>${producto.precioCompra} </b></p>
            <p class="card-text"> Precio Venta: <b>${producto.precioVenta} </b></p>
            <p class="card-text"> Cant Talle S: <b>${producto.cantidadTalleS} </b></p>
            <p class="card-text"> Cant Talle M: <b>${producto.cantidadTalleM} </b></p>
            <p class="card-text"> Cant Talle L: <b>${producto.cantidadTalleL} </b></p>
            <p class="card-text"> Descripcion: <b>${producto.descripcion} </b></p>
            <button type="submit" class="btn btn-success" onclick="AgregarCompra()">Comprar</button>
            <button type="submit" class="btn btn-danger" onclick="eliminarCompra()">Eliminar <i class="fas fa-trash-alt"></button>
        </div>
    </div>
    `
    contenedorProductos.append(columnaNueva)
}

// Toastify a botones agregar y eliminar

function AgregarCompra() {   
    Toastify({
        text: "Producto agregado al Carrito",
        className: "info",
        duration: `6000`,
        style: {
        background: "linear-gradient(to right, #00b09b, #96c93d)"
            },
    }).showToast();
}

function eliminarCompra() {
    Toastify({
        text: "Producto eliminado del Carrito",
        className: "danger",
        duration: `6000`,
        style: {
        background: "linear-gradient(to right, #b00015, #ff3149)"
        },
    }).showToast();
}





// const inputProducto = document.querySelector('#inputNombreProducto')
// const listasAgregada = document.querySelector('#data')

// // // window.addEventListener('DOMContentLoaded', async () => {
// // //     const data = await loadProducts()
    
// // })
// async function loadProducts() {
//    const response = fetch('https://jsonplaceholder.typicode.com/todos/')
//    .then(response => response.json())
//    .then(data => console.log(json))
// }
// inputProducto.addEventListener('keyup', e =>[
//     console.log(inputProducto.value)
// ])

// const createProductItem = products => products.map(producto => '<li>${products.userId} ${products.id} ${products.title}</li>').join(' ')

// function listaProdAgregado(products) {
//     const inemsString = createProductItem(products)
//     listaCompra.innerHTML = itemsString
// }



// carrito.onsubmit = (e) =>{
//     e.preventDefault();
// let carrito = document.getElementById("carritoAgragarProducto")
// carrito.onsubmit = (createProductItem) => (
//     console.log("se ejecuto evento submit")
// )

// let botonPagar = document.getElementById("realizarPago")
// }

// let carrito = []

// const agregarAlCarrito = (prodID) => {
//     const item = stockProductos.find(prod) => prod.id ===prod.id
//     carrito.push(item)

// }