//Crie um programa que verifica se um número fornecido pelo usuário é primo ou não.

let numero1 = 6;

numero1 = Number (numero1)

if (numero1  <= 0){
    console.log("Forneça um numero maior que 0")}
else 
    console.log (`numero escolhido é ${numero1}`);

    let ePrimo = true; 

    
    for (let i = 2; i < numero1; i++) {
        if (numero1 % i === 0) {
            ePrimo = false; 
            break; 
        }
    }


    if (ePrimo) {
        console.log(`${numero1} é um número primo.`);
    } else {
        console.log(`${numero1} não é um número primo.`);
    }
