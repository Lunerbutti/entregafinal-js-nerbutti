
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