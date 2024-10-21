//Entrega  calculadora de prestamo de la entrega 1 pero le agrego complejidad que solicita la numero dos ahorrando las lineas de codigo que tenia en la anteriror que eran muy repetitibas 
// no me quedo muy claro parte de la letra pero creo que esta todo 

 

function elegirUnaOpcion() {    
    const PRESTAMOS = [
        { opcion: 1, tipo: "automotriz", monto: 250000 },
        { opcion: 2, tipo: "personal", monto: 500000 },
        { opcion: 3, tipo: "inmobiliario", monto: 6000000 }
    ];

    console.log("Préstamos que puede solicitar en este momento:");    //mcree esta funcion de prestamos que puede seleccionar en este momento por que a futuro me gustaria que los prestamos que se muestren esten seleccionados para cada tipo de user
    PRESTAMOS.forEach((prestamo) => {
        console.log(`${prestamo.opcion}: ${prestamo.tipo} - Monto: $${prestamo.monto}`);   
    });

    const input = prompt("Ingresa la opción de préstamo: (1,2 o 3) ");   

    let opcionSeleccionada = parseInt(input);

    
    if (opcionSeleccionada > 0 && opcionSeleccionada <= PRESTAMOS.length) {
        const prestamoSeleccionado = PRESTAMOS[opcionSeleccionada - 1 ];  
        const montoSolicitado = prestamoSeleccionado.monto;
        console.log(`Se ha seleccionado correctamente la opción: ${prestamoSeleccionado.tipo}`);    // esta linea me dio error si la ponia con "" tuve que buscar en stack para poder solucionarla me daba el siguente error Uncaught TypeError: "Se ha seleccionado correctamente la opción:" is not a function
      
        

        let cuotas = parseInt(prompt("Cuántas cuotas desea solicitar?? Mínimo 4"));
        if (isNaN(cuotas) || cuotas < 4) {
            console.log("Las cuotas tienen que ser mayores a 4.");
            return;
        }

        let interes = 0;
        if (cuotas > 4 ) {   //aca deberia ser >= o con > es correcto?
            interes = 0.04 * montoSolicitado * cuotas; 
        }

        let totalAPagar = montoSolicitado + interes;
        console.log(`Total a pagar: $${totalAPagar.toFixed(2)}, por ${cuotas} cuotas.`);  // muestro el prestamo que solicito 
    } else {
        console.log("Ingrese una opción correcta.");  
    }
}


elegirUnaOpcion();     


