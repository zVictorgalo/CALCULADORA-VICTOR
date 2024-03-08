// Seleções
const display = document.querySelector("#displayInput");
const botaoIgual = document.querySelector(".igual");
const botaoPonto = document.querySelector(".ponto");
const botoesNumeros = document.querySelectorAll(".num");
const botoesOperadores = document.querySelectorAll(".operador");

// Variáveis 
let operacaoAtual = "";
let operador = null;
let valorAnterior = "";
let calculando = false;

// Funções
function atualizaDisplay(){
    display.value = operacaoAtual;
}

function insereNumero(evento){
    if(calculando){
        operacaoAtual = evento.target.textContent;
        calculando = false; 
    }else{ 
        operacaoAtual += evento.target.textContent;
    }
    atualizaDisplay(); 
}

function inserePonto(){
    if(operacaoAtual.indexOf(".") === -1){
        operacaoAtual += ".";
        atualizaDisplay;
    }
}

function insereOperador(evento){
    if(operacaoAtual !== ""){
        if(!calculando){
            if(operador !== null){
                calcula();
            }
            valorAnterior = operacaoAtual;
            operacaoAtual = "";
        }
        operador = evento.target.textContent;
        atualizaDisplay();
    }
}

function calcula(){
    let resultado = null;
    const operandoAnterior = parseFloat(valorAnterior);
    const operandoAtual = parseFloat(operacaoAtual);

    switch(operador){
        case "+":
        resultado = operandoAnterior + operacaoAtual;
        break;
        case "-":
        resultado = operandoAnterior - operacaoAtual;
        break;
        case "*":
        resultado = operandoAnterior * operacaoAtual;
        break;
        case "/":
        resultado = operandoAnterior / operacaoAtual;
        break;
        
    }

    console.log(valorAnterior, operacaoAtual, operador);
    operacaoAtual = String(resultado);
    valorAnterior = operacaoAtual;
    calculando = true;
    atualizaDisplay();
}

//Eventos 
console.log(botoesNumeros)
botoesNumeros.forEach((botao) => botao.addEventListener("click", insereNumero));
botaoPonto.addEventListener("click", inserePonto);
botoesOperadores.forEach((botao) => 
botao.addEventListener("click", insereOperador)
);
botaoIgual.addEventListener("click", calcula)