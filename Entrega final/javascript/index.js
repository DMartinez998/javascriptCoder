/* Entrega 4 calculadora de prestamos 

*/

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


function seleccionarPrestamo(prestamoSeleccionado) {
    const prestamoInfo = document.getElementById('prestamo-info');
    prestamoInfo.innerHTML = `
        <h3>Has seleccionado: ${prestamoSeleccionado.tipo}</h3>
        <p>Monto solicitado: $${prestamoSeleccionado.monto}</p>
        <label for="cuotas">cuanntas cuotas desea solicitar? (Min 4):</label>
        <input type="number" id="cuotas" min="4" value="4">
        <button id="calcular">Calcular Total</button>
        <div id="resultado"></div>
    `;

    document.getElementById('calcular').onclick = () => calcularCuotas(prestamoSeleccionado.monto);
}

// Función para calcular el valor de las cuotas
function calcularCuotas(montoSolicitado) {
    const cuotasInput = document.getElementById('cuotas');
    let cuotas = parseInt(cuotasInput.value);

    if (isNaN(cuotas) || cuotas < 4) {
        alert("mínimo 4 cuotas");
        return;
    }

    let interes = 0.04 * montoSolicitado * cuotas; // 4% por cuota
    let totalAPagar = montoSolicitado + interes;
    let valorCuota = totalAPagar / cuotas;

    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `
        <p>Valor de la cuota = $${valorCuota.toFixed(2)}, en ${cuotas} cuotas</p>
        <button id="solicitar" onclick="solicitarPrestamo('${montoSolicitado}', ${totalAPagar})">Solicitar presstamo</button>
    `;
}

// formulario de cuenta personal 
function solicitarPrestamo(montoSolicitado, totalAPagar) {
    const formularioCuenta = document.getElementById('formulario-cuenta');
    formularioCuenta.style.display = 'block'; 

   
    document.getElementById('finalizar-solicitud').onclick = () => finalizarSolicitud(montoSolicitado, totalAPagar);
}

// hice esta para finalizar y mostrar mensaje 
function finalizarSolicitud(montoSolicitado, totalAPagar) {
    const cuentaInput = document.getElementById('cuenta').value;
    if (!cuentaInput) {
        alert("Por favor ingrese un número de cuenta.");
        return;
    }

    
    const prestamoInfo = document.getElementById('prestamo-info');
    prestamoInfo.innerHTML = `
        <h3>Listo, su prestamo fue concedido </h3>
        <p>El prestamo de tipo <strong>${montoSolicitado}</strong> por un total de <strong>$${totalAPagar.toFixed(2)}</strong> ha sido acreditado con exito a tu cuenta personal ${cuentaInput}.</p>
    `;
    
    document.getElementById('formulario-cuenta').style.display = 'none';
}


document.addEventListener('DOMContentLoaded', mostrarPrestamos);
