javascript
function calcular() {

    const numero1 = Number(document.querySelector("#numero1").value);
    const numero2 = Number(document.querySelector("#numero2").value);
    const operacao = document.querySelector("#operacao").value;
    const resultado = document.querySelector("#resultado");

    let conta;

    if (operacao === "+") {
        conta = numero1 + numero2;
    } 
    else if (operacao === "-") {
        conta = numero1 - numero2;
    } 
    else if (operacao === "*") {
        conta = numero1 * numero2;
    } 
    else if (operacao === "%") {
        conta = numero1 % numero2;
    }

    resultado.textContent = "Resultado: " + conta;
}

function limpar() { 
    
    document.querySelector("#numero1").value = ""; 
    document.querySelector("#numero2").value = ""; 
    document.querySelector("#resultado").textContent = ""; 
}