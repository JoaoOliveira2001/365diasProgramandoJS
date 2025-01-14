//Crie um programa que pergunte ao usuário dois números e uma operação matemática

let operacao = "+"; 
let numero1 = "2"
let numero2 = "5"

numero1 = Number(numero1);
numero2 = Number(numero2); //CONVERTENDO PARA NUMERO

console.log(`${numero1} é o primeiro numero escolhido`)
console.log(`${numero2} é o segundo numero escolhido`)

if (operacao === "+") {
    console.log("Você escolheu a adição.");
} else if (operacao === "-") {
    console.log("Você escolheu a subtração.");
} else if (operacao === "*") {
    console.log("Você escolheu a multiplicação.");
} else if (operacao === "/") {
    console.log("Você escolheu a divisão.");
} else {
    console.log("Operação inválida!");
}

if (operacao === "+") {
    resultado = numero1 + numero2;
} else if (operacao === "-") {
    resultado = numero1 - numero2;
} else if (operacao === "*") {
    resultado = numero1 * numero2;
} else if (operacao === "/") {
    if (numero2 !== 0) { // Verificar divisão por zero
        resultado = numero1 / numero2;
    } else {
        console.log("Erro: divisão por zero não é permitida.");
        resultado = "indefinido";
    }
}

console.log(`o resultado de ${numero1} ${operacao} ${numero2} é ${resultado}`)