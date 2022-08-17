// Pago
const cuotasPago = [
    {
        nombre : "Seleccione el número de cuotas en que desea pagar:",
        cuota1 : "1 cuota",
        cuota3 : "3 cuotas",
        cuota6 : "6 cuotas",
        cuota9 : "9 cuotas",
        cuota12 : "12 cuotas",
    },]

// creacion de botones de pago
let contenedorPPP = document.getElementById("paginaPago")  
for (const cuotas of cuotasPago ){
    let columnaPago = document.createElement("div")
    columnaPago.className = "col-md-12 mt-3"
    columnaPago.id = `columnaPago-${cuotas.id}`
    columnaPago.innerHTML = `
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
    contenedorPPP.append(columnaPago)
}
// Galerias a botones de pago
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