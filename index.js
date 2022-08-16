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
            cantidad : "1",
            descripcion : "jean roto",
        },
        {
            id : 2,
            img : "./img/remeraCruz2.jpg",
            nombre : "Remera con Cruz ",
            precioCompra : "400",
            precioVenta : "2000",
            cantidad : "1",
            descripcion : "Remera Cruz 2",
        },
        {
            id : 3,
            img : "./img/sunga.jpg",
            nombre : "maya",
            precioCompra : "1000",
            precioVenta : "3000",
            cantidad : "1",
            descripcion: "sunga hombre ",
        },
        {
            id : 4,
            img : "./img/RemeraCruz.jpg",
            nombre : "remera",
            precioCompra : "500",
            precioVenta : "1500",
            cantidad : "1",
            descripcion : "remera mc",

        },
        {
            id : 5,
            img : "./img/bermuda.jpg",
            nombre : "Bermuda Jean",
            precioCompra : "1500",
            precioVenta : "5000",
            cantidad : "1",
            descripcion : "Bermuda Jean",
        },
        {
            id : 6,
            img : "./img/camisa.jpg",
            nombre : "Camisa",
            precioCompra : "1500",
            precioVenta : "5000",
            cantidad : "1",
            descripcion : "Camisa",
        },
        {
            id : 7,
            img : "./img/shortBaño.jpg",
            nombre : "Short de Baño",
            precioCompra : "1500",
            precioVenta : "5000",
            cantidad : "1",
            descripcion : "Short de Baño",
        },
        {
            id : 8,
            img : "./img/musculosaCapucha.jpg",
            nombre : "Musculosa con Capucha",
            precioCompra : "1500",
            precioVenta : "5000",
            cantidad : "1",
            descripcion : "Musculosa Deportiva con capucha",
        },
];


let contenedorProductos = document.getElementById("contenedor-productos")

const contenedorCarrito = document.getElementById("carrito-contenedor")
const botonVaciarCarrito = document.getElementById("vaciar-carrito")
const contarCarrito = document.getElementById("contarCarrito")
const precioTotal = document.getElementById("precioTotal")
let carrito = []

document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem ('carrito')){
        carrito =JSON.parse(localStorage.getItem('carrito'))
        actualizarCarrito()
    }
})

botonVaciarCarrito.addEventListener('click', () =>{
    carrito.length = 0
    actualizarCarrito()
}
)
listaProductos.forEach((producto) => {
    const columnaNueva = document.createElement("div")
    columnaNueva.classList.add('producto')
    columnaNueva.className = "col-md-4 mt-3 mr-0"
    columnaNueva.id = `columnaNueva-${producto.id}`
    columnaNueva.innerHTML = `
    <div class="card">
        <img src="${producto.img}" class="card-img-top img-fluid" alt="">
        <div class="card-body">
            <p class="card-text"> Nombre: <b>${producto.nombre} </b></p>
            <p class="card-text"> Precio Venta: <b>${producto.precioVenta} </b></p>
            <p class="card-text"> Cantidad: <b>${producto.cantidad} </b></p>
            <select class="card-text"> Talle : <option value="L">Large</option>
            <option value="M">Medium</option><option value="S">Small</option></select>
            <p class="card-text"> Descripcion: <b>${producto.descripcion} </b></p>
            <button type="submit" class="btn btn-success" onclick="AgregarCompra()" id="agregar${producto.id}">Comprar</button>
            <button type="submit" class="btn btn-danger" onclick="eliminarCompra()" id="eliminar${producto.id}">Eliminar</button>
        </div>
    </div>
    `

    contenedorProductos.append(columnaNueva)
    
    let botonAgregarProducto = document.getElementById('agregar${producto.id}')    
    let botonEliminarProducto = document.getElementById('eliminar${producto.id}')    
    
    // botonAgregarProducto.addEventListener('click', () => {
    //     agregarAlCarritoDeCompras(prodId)
    // })
    // botonAgregarProducto.addEventListener("click", () => {
    //     agregarAlCarrito(producto.id)
    // })
    // botonEliminarProducto.addEventListener("click", () => {
    //     eliminarDelCarrito(producto.id)
    // })
}
)

// Toastify y eventos a botones agregar y eliminar

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

// agregado al carro
const agregarAlCarritoDeCompras = (prodId) =>{
    const existe = carrito.some (prod => prod.id === prodId)
    if (existe){
        const prod = carrito.map (prod =>{ 
            if (prod.id === prodId){
                prod.cantidad++
            }
        })
    } else{
        const item = listaProductos.find((prod) => prod.id === prodId)
        carrito.push(item)
        console.log(carrito)

    }
        actualizarCarrito()

    }


const eliminarDelCarrito = (prodId) => {
    const item = carrito.find((prod) => prod.id === prodId)
    const indice = carrito.indexOf(item)
    carrito.splice(indice, 1)
    actualizarCarrito()

}

const actualizarCarrito = () => {
    contenedorCarrito.innerHTML = ""
    carrito.forEach((prod) => {
        const div = document.createElement('div')
        div.innerHTML =`
        <p>${prod.nombre}</p>
        <p>${prod.precioVenta}</p>
        <p>Cantidad: <span id="cantidad">${prod.cantidad}</span></p>
        <button onclick="eliminarDelCarrito(${prod.id})" class="boton-eliminar"><i class="fas fa-trash-alt"></i></button>
        `
        contenedorCarrito.appendChild(div)
        localStorage.setItem('carrito', JSON.stringify(carrito))
    })
    contarCarrito.innerText = carrito.length
    console.log(carrito)
    precioTotal.innerText = carrito.reduce((acc, prod) => acc + prod.cantidad * prod.precio, 0)
}




