
function gramoxpesogramo (gramos,pesogramo) {
    return gramos*pesogramo;
}

function tiempoxkwh (horas, kwh){
    return horas*kwh;
}

function solicitarNumero(mensaje) {
    let numero = prompt(mensaje);
    if (isNaN(numero) || numero.trim() === ''|| parseFloat(numero) <= 0) {
        alert('Por favor, ingrese un número válido.');
        return solicitarNumero(mensaje); 
    }
    return parseFloat(numero);
}

let pesogramo = 15
let kwh = 153

function repetirCalculo() {
    let continuar = 'si';
    while (continuar === 'si') {
        let preciofinal = calcularPrecio();
        alert('El precio de su pieza es de ' + preciofinal);
        continuar = prompt('¿Quieres hacer otra cuenta? (si/no)').toLowerCase();
    }
    alert('Gracias por usar la calculadora. ¡Hasta luego!');
}


function calcularPrecio(){
    let gramos = solicitarNumero('Ingrese el peso de su pieza en Gramos')
    let preciogramo = gramoxpesogramo (gramos,pesogramo); 
    let horas = solicitarNumero('Ingrese lo que tarda su impresion en HORAS')
    let preciotiempo = tiempoxkwh (horas,kwh);
    let preciofinal = preciogramo + preciotiempo
    return preciofinal
}


let opcion;
while (true) {
    opcion = prompt('Calcula el precio de tu impresion 3D \n¿Quieres editar o calcular? \nPrecio gramo = 15 \nkwh = 153 \nPrecios actualizados al 28/6/24').toLowerCase();
    if (opcion === 'calcular' || opcion === 'editar') {
        break;
    } else {
        alert('Elegi una de esas 2 opciones maestro');
    }
}


if(opcion === 'calcular'){
let preciofinal = calcularPrecio();

alert('el precio de su pieza es de ' + preciofinal)

}else if(opcion === 'editar'){

let filamento = solicitarNumero('Ingrese el precio de su filamento por KILO')
pesogramo = filamento/1000

let kw = solicitarNumero('Ingrese cuanto le cobran el KW')
kwh = kw*1.7

alert('Su precio kwh es de ' + kwh + ' y su precio por Gramo es de ' + pesogramo)
let preciofinal = calcularPrecio();
alert('el precio de su pieza es de ' + preciofinal);
}

repetirCalculo();


