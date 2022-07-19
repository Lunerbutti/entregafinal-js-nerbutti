llenarTabla();
function llenarTabla(){
    let tbody = document.querySelector(`#tblProductosCarro tbody`);

    tbody.innerHTML = ``;
    let aProducto = JSON.parse(localStorage.getItem(`nombre_prod`)),
    aPrecio = JSON.parse(localStorage.getItem(`precio_prod`)),
    aTalle = JSON.parse(localStorage.getItem(`talle_prod`)),
    aCantidad = JSON.parse(localStorage.getItem(`cantidad_prod`));


 
    for (let i=0; 1 <localStorage.length; i++ ){
        let clave = localStorage.key(i);
        let fila = document.createElement(`tr`);
        
        let celdaNombre = document.createElement(`td`);
         celdaPVenta = document.createElement(`td`);
         celdaTalle = document.createElement(`td`);
         celdaCantidad = document.createElement(`td`);

        let nodoTextoNombre= document.createTextNode(aProducto(i)),
            nodoTextoPrecio= document.createTextNode(aPrecio(i)),
            nodoTextoTalle= document.createTextNode(aTalle(i)),
            nodoTextoCantidad= document.createTextNode(aCantidad(i));

        fila.appendChild(celdaNombre.appendChild(nodoTextoNombre));
        fila.appendChild(celdaNombre.appendChild(nodoTextoPrecio));
        fila.appendChild(celdaNombre.appendChild(nodoTextoTalle));
        fila.appendChild(celdaNombre.appendChild(nodoTextoCantidad));

        tbody.appendChild(fila);


    }
}
