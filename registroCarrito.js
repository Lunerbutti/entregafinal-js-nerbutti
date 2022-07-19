let aProducto = [],
    aTalle = [],
    aPrecio = [],
    aCantidad = [];

let botonRegistrarCompra = document.getElementById(`agregarCompra`);

botonRegistrarCompra.addEventListener("click", RegistroCompra => (
    alert("se agregó producto al carrito")
))

function RegistroCompra(){
    let pProducto = document.querySelector(`#inputNombreProducto`).value,
    pTalle = document.querySelector(`#inputPrecioVenta`).value,
    pPrecio = document.querySelector(`#inputTalle`).value,
    pCantidad = document.querySelector(`#inputCantdad`).value;

    aProducto.push(pProducto);
    aTalle.push(pTalle);
    aPrecio.push(pPrecio);
    aCantidad.push(pCantidad);

    localStorage.setItem(`nombre_prod`, JSON.stringify(aProducto))
    localStorage.setItem(`precio_prod`, JSON.stringify(aPrecio))
    localStorage.setItem(`talle_prod`, JSON.stringify(aTalle))
    localStorage.setItem(`cantidad_prod`, JSON.stringify(aCantidad))

}
