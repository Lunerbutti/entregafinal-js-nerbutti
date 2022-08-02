// let aProducto = [],
//     aTalle = [],
//     aPrecio = [],
//     aCantidad = [];

// let botonRegistrarCompra = document.getElementById(`agregarCompra`);

// botonRegistrarCompra.addEventListener("click", RegistroCompra => (
//     // alert("se agregó producto al carrito")
//     Toastify({

//         text: "This is a toast",
        
//         duration: 3000
        
//         }).showToast();
// ))

// function RegistroCompra(){
//     let pProducto = document.querySelector(`#inputNombreProducto`).value,
//     pTalle = document.querySelector(`#inputPrecioVenta`).value,
//     pPrecio = document.querySelector(`#inputTalle`).value,
//     pCantidad = document.querySelector(`#inputCantdad`).value;

//     aProducto.push(pProducto);
//     aTalle.push(pTalle);
//     aPrecio.push(pPrecio);
//     aCantidad.push(pCantidad);

//     localStorage.setItem(`nombre_prod`, JSON.stringify(aProducto))
//     localStorage.setItem(`precio_prod`, JSON.stringify(aPrecio))
//     localStorage.setItem(`talle_prod`, JSON.stringify(aTalle))
//     localStorage.setItem(`cantidad_prod`, JSON.stringify(aCantidad))

// }

let url ="https://jsonplaceholder.typicode.com/albums"
fetch(url)
    .then(response => response.json())
    .then(data => mostrarData(data))
    .catch(error => console.log(error))

const mostrarData = (data) =>{
    console.log(data)
    let body = ""
    for (let i = 0; i < data.length; i++){
        body += <tr><td>{$(data[i].userId)}</td> <td>{$(data[i].id)}</td> <td>{$(data[i].title)}</td></tr>
        }
        document.getElementById('data').innerHTML = body
}