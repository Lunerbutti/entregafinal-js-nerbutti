
const cuotasPago = [
    {
        nombre : "Seleccione el número de cuotas en que desea pagar:",
        cuota1 : "1 cuota",
        cuota3 : "3 cuotas",
        cuota6 : "6 cuotas",
        cuota9 : "9 cuotas",
        cuota12 : "12 cuotas",
    },]

let contenedorPPP = document.getElementById("paginaPago")  
for (const cuotas of cuotasPago ){
    let columnaNueva = document.createElement("div")
    columnaNueva.className = "col-md-12 mt-3"
    columnaNueva.id = `columnaNueva-${cuotas.id}`
    columnaNueva.innerHTML = `
    <div>
        <div>
            <p><b>${cuotas.nombre} </b></p>
            <button class="btn btn-primary"> ${cuotas.cuota1} </button>
            <button class="btn btn-warning"> ${cuotas.cuota3} </button>
            <button class="btn btn-info"> ${cuotas.cuota6} </button>
            <button class="btn btn-success"> ${cuotas.cuota9} </button>
            <button class="btn btn-danger"> ${cuotas.cuota12}</button>
        </div>
    </div>
    `
    contenedorPPP.append(columnaNueva)
}
// while (check) {
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
// }