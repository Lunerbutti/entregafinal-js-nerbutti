
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
            <button class="btn btn-primary" id="btn1"> ${cuotas.cuota1} </button>
            <button class="btn btn-warning" id="btn3"> ${cuotas.cuota3} </button>
            <button class="btn btn-info" id="btn6"> ${cuotas.cuota6} </button>
            <button class="btn btn-success" id="btn9"> ${cuotas.cuota9} </button>
            <button class="btn btn-danger" id="btn12"> ${cuotas.cuota12}</button>
        </div>
    </div>
    `
    contenedorPPP.append(columnaNueva)
}

const seleccionCuota = document.getElementById("btn1")
seleccionCuota.onclick = pagoARealizar

function pagoARealizar() {
    Swal.fire({
        title: 'Vas a Pagar',
        text: "en UNA CUOTA",
        icon: 'info',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Pagar'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            icon: 'success',
            title: 'Ha realizado el pago',
            text: 'Gracias por su compra',
            timer: 6000
          })
        }
      })
}

const seleccionCuota3 = document.getElementById("btn3")
seleccionCuota3.onclick = pagoARealizar3

function pagoARealizar3() {
    Swal.fire({
        title: 'Vas a Pagar',
        text: "en 3 CUOTAS",
        icon: 'info',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Pagar'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            icon: 'success',
            title: 'Ha realizado el pago',
            text: 'Gracias por su compra',
            timer: 6000
          })
        }
      })
}
const seleccionCuota6 = document.getElementById("btn6")
seleccionCuota6.onclick = pagoARealizar6

function pagoARealizar6() {
    Swal.fire({
        title: 'Vas a Pagar',
        text: "en 6 CUOTAS",
        icon: 'info',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Pagar'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            icon: 'success',
            title: 'Ha realizado el pago',
            text: 'Gracias por su compra',
            timer: 6000
          })
        }
      })
}
const seleccionCuota9 = document.getElementById("btn9")
seleccionCuota9.onclick = pagoARealizar9

function pagoARealizar9() {
    Swal.fire({
        title: 'Vas a Pagar',
        text: "en 9 CUOTAS",
        icon: 'info',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Pagar'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            icon: 'success',
            title: 'Ha realizado el pago',
            text: 'Gracias por su compra',
            timer: 6000
          })
        }
      })
}
const seleccionCuota12 = document.getElementById("btn12")
seleccionCuota12.onclick = pagoARealizar12

function pagoARealizar12() {
    Swal.fire({
        title: 'Vas a Pagar',
        text: "en 12 CUOTAS",
        icon: 'info',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Pagar'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            icon: 'success',
            title: 'Ha realizado el pago',
            text: 'Gracias por su compra',
            timer: 6000
          })
        }
      })
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