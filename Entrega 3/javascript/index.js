/* Entrega 3 calculadora de prestamos 
agrandar la lista usando json 
local storage 
un html basico por que todavia hay conceptos que no tengo claros por que no he podido ver de nuevo las clases me gustaria agregar alguna imagen o logo para el proyecto final

*/


// implemente JSON en la lista y la agrande por que con 3 valores no me daba la chance a jugar con las opciones, prometo mejorar la visualizacion con lo que vimos en librerias pero todavia no lo tengo claro
const PRESTAMOS_JSON = `[
    {"opcion": 1, "tipo": "automotriz", "monto": 250000},
    {"opcion": 2, "tipo": "personal", "monto": 500000},
    {"opcion": 3, "tipo": "inmobiliario", "monto": 6000000},
    {"opcion": 4, "tipo": "ideal para inicio de clases", "monto": 300000},
    {"opcion": 5, "tipo": "PYMES", "monto": 800000},
    {"opcion": 6, "tipo": "vacacional", "monto": 200000}
]`;


localStorage.setItem("prestamos", PRESTAMOS_JSON);

// funcion que muestra los prestamos en modo boton y una vez que le hago click despliega los prestamos 
function mostrarPrestamos() {
    const PRESTAMOS = JSON.parse(localStorage.getItem("prestamos"));
    const prestamosList = document.getElementById('prestamos-list');

    PRESTAMOS.forEach((prestamo) => {
        const button = document.createElement('button');
        button.textContent = `${prestamo.tipo} - $${prestamo.monto}`;
        button.onclick = () => seleccionarPrestamo(prestamo); 
        prestamosList.appendChild(button);
    });
}

// funcion despues que elecciono el prestmo es para elegir la cantidad de cuotas, en el input lo hice tipo numero asi el usuario no me escribe texto, la idea de poner etiquetas de html la verdad la saque de stackoverflow por que no me salia de otra manera, es correcta la practica?
function seleccionarPrestamo(prestamoSeleccionado) {
    const prestamoInfo = document.getElementById('prestamo-info');
    prestamoInfo.innerHTML = `
        <h3>Has seleccionado: ${prestamoSeleccionado.tipo}</h3>
        <p>Monto solicitado: $${prestamoSeleccionado.monto}</p>
        <label for="cuotas">cuntas cuotas desea solicitar? (Min 4):</label>
        <input type="number" id="cuotas" min="4" value="4">
        <button id="calcular">Calcular Total</button>
        <div id="resultado"></div>
    `;

    document.getElementById('calcular').onclick = () => calcularCuotas(prestamoSeleccionado.monto);
}


function calcularCuotas(montoSolicitado) {
    const cuotasInput = document.getElementById('cuotas');
    let cuotas = parseInt(cuotasInput.value);

    if (isNaN(cuotas) || cuotas < 4) {
        alert("minimo 4 cuotas");
        return;
    }

    let interes = 0.04 * montoSolicitado * cuotas; // 4% por cuota
    let totalAPagar = montoSolicitado + interes;
    let valorCuota = totalAPagar / cuotas; 

    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `
       
        <p>valor de la cuota = $${valorCuota.toFixed(2)}, en ${cuotas} cuotas</p>
    `;
}


document.addEventListener('DOMContentLoaded', mostrarPrestamos);
