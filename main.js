function init(){

    let operandoA;
    let operandoB;
    let operacion; 

    //variables conectadas al boton 

    let resultado = document.getElementById("resultado");
    let suma = document.getElementById('suma');
    let punto = document.getElementById('punto');
    let cero = document.getElementById('cero');
    let reset = document.getElementById('reset');
    let menos = document.getElementById('menos');
    let tres = document.getElementById('tres');
    let dos = document.getElementById('dos');
    let uno = document.getElementById("uno");
    let multi = document.getElementById('multi');
    let seis = document.getElementById('seis');
    let cinco = document.getElementById('cinco');
    let cuatro = document.getElementById('cuatro');
    let dividir = document.getElementById('dividir');
    let nueve = document.getElementById('nueve');
    let ocho = document.getElementById('ocho');
    let siete = document.getElementById('siete');
    let igual = document.getElementById('igual');


    //eventos

   uno.onclick = function(e){
    resultado.textContent = resultado.textContent + "1";
   }
   dos.onclick = function(e){
    resultado.textContent = resultado.textContent + "2";
   }
   tres.onclick = function(e){
    resultado.textContent = resultado.textContent + "3";
   }
   cuatro.onclick = function(e){
    resultado.textContent = resultado.textContent + "4";
   }
   cinco.onclick = function(e){
    resultado.textContent = resultado.textContent + "5";
   }
   seis.onclick = function(e){
    resultado.textContent = resultado.textContent + "6";
   }
   siete.onclick = function(e){
    resultado.textContent = resultado.textContent + "7";
   }
   ocho.onclick = function(e){
    resultado.textContent = resultado.textContent + "8";
   }
   nueve.onclick = function(e){
    resultado.textContent = resultado.textContent + "9";
   }
   cero.onclick = function(e){
    resultado.textContent = resultado.textContent + "0";
   }
   punto.onclick = function(e){
    resultado.textContent = resultado.textContent + ".";
   }
   reset.onclick = function(e){
    resetear();
    
   }
   suma.onclick = function(e){
    operandoA = resultado.textContent;
    operacion = "+";
    limpiar();
   }
   menos.onclick = function(e){
    operandoA = resultado.textContent;
    operacion= "-";
    limpiar();
   }
   multi.onclick= function(e){
    operandoA= resultado.textContent;
    operacion = "*";
    limpiar();
   }
   dividir.onclick= function(e){
    operandoA= resultado.textContent;
    operacion = "/";
    limpiar();
   }

   igual.onclick=function(e){
    operandoB = resultado.textContent;
    operando(operandoA, operandoB, operacion);
   }
}

function limpiar(){
    resultado.textContent = "";
    
}
function resetear(operandoA, operandoB){
    resultado.textContent = "";
    operandoA =0;
    operandoB = 0;
    operacion ="";

    
}

function operando(operandoA, operandoB, operacion){
    let calcular=0;
    let primerNumero= parseFloat(operandoA);
    let segundoNumero = parseFloat(operandoB);

    switch(operacion){
        case "+":
                calcular= primerNumero + segundoNumero;
                resultado.textContent= calcular;
                break;
        case "-":
                calcular= primerNumero - segundoNumero;
                resultado.textContent= calcular;
                break;
        case "*":
                calcular= primerNumero  * segundoNumero;
                resultado.textContent= calcular;
                break;
        case "/":
                calcular= primerNumero  / segundoNumero;
                resultado.textContent= calcular;
                break;
        

    
    }  
    resetear();
    resultado.textContent= calcular;

    

    

     
}

