//Entrega 1 calculadora de prestamo 

let input;

let total = 0;
let montoSolicitado = 0;
let cuotas =0;
let cuotasSolicitada = 0; 


 

 

while(true){

    input = prompt("ingresa el monto desea solicitar minimo 10000 ")
    

    let cantidadSolicitada = parseFloat(input); 


    if(!isNaN(cantidadSolicitada) && cantidadSolicitada >= 10000){

        

       montoSolicitado += cantidadSolicitada;

        console.log(montoSolicitado);

    } else{

        alert("por favor ingresa un numero valido o que sea mayor o igual al minimo")
    }

    input = prompt("Cantidad de cuotas que desea minimo 4") //esta funcion la hice para generar un de recargo por cuota, 

    let cuotasSolicitadas = parseFloat(input); 

    if (!isNaN(cuotasSolicitadas) && cuotasSolicitadas >= 4 ){ 

        cuotasSolicitada = cuotasSolicitadas
      cuotas += cuotasSolicitadas * 1.5 ;
         console.log(cuotas)

    }else{10001000

        alert("por favor ingresa un numero valido que sea mayor o igual a 4 ")

    }

total += montoSolicitado / cuotas; 


input = prompt("ingresa la palabra terminar si desea ver su cotizacion, si desea mas dinero del puesto anteriormente o mas cuotas pulse aceptar ") // lo puse al final por que si desea solicitar mas cuotas o dinero pueda realizarlo 
    
if(input.toLowerCase() === 'terminar'){

    break;

}


}

console.log("Usted solicito un prestamo de: "+ montoSolicitado + "en cuotas:" + cuotasSolicitada + "su pago por mes sera de :" + total.toFixed(2));  //Uso el fixed x3 por si el numero al momento calcular las cuotas queda muy largo 