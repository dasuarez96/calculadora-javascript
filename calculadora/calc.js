const botonNummeros = document.getElementsByName('data-number') //como son botnes fijos se utiliza la const por que los botones no vana cambiar 
const botonOpera = document.getElementsByName('data-opera')
const botonIgual = document.getElementsByName('data-igual')[0]
const botonDelete = document.getElementsByName('data-delete')[0]

var result = document.getElementById('result') //encambio se pone el resultado en var por que es lo que podra cambiar
var opeActual = '';
var opeAnterior = '';
var operacion = undefined;


//agregar los eventos
//recorremos el arreglo
botonNummeros.forEach(function(boton){
    boton.addEventListener('click', function(){
        agregarNumero(boton.innerText);
        
    })
})


botonOpera.forEach(function(boton){
    boton.addEventListener('click', function(){
        selectOperacion(boton.innerText);
        // alert(boton.innerText)
    })
})

//boton =
botonIgual.addEventListener('click', function(){
    calcular();
    actualizarDisplay();
})

//boton C
botonDelete.addEventListener('click', function(){
    clear(); //este es el metodo para limpiar
    actualizarDisplay(); //
})


function selectOperacion(op){
    if(opeActual === '') return;
    if(opeAnterior !== ''){

    }
    operacion = op.toString();
    opeAnterior = opeActual;
    opeActual = '';
}

//metodo de caluclar 
function calcular(){
    var calculo;
    const anterio = parseFloat(opeAnterior);
    const actual = parseFloat(opeActual);
    if(isNaN(anterio) || isNaN(actual)) return;
    switch(operacion){
        case '+':
            calculo = anterio + actual;
            break;
        case '-':
            calculo = anterio - actual;
            break;
        case 'x':
            calculo = anterio * actual;
            break;
        case '/':
            calculo = anterio / actual;
            break;
        default:
            return;
    }
    opeActual = calculo;
    operacion = undefined;
    opeAnterior = '';
}

//metodo para agregar numero

function agregarNumero(num){
    opeActual = opeActual.toString() + num.toString(); // con este metodo estamso relizado la concatenacion de los numeros para que puedan ponerse y no se suemn por si silos cuando se les de un click 
    actualizarDisplay(); //llamamos al metodo para actualizar el display 
}

//metodo para limipar el display

function clear(){
    opeActual = '';
    opeAnterior = '';
    operacion = undefined;
}

function actualizarDisplay(){
    result.value = opeActual;
}

