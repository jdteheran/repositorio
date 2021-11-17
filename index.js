
let numero = 28

console.log(esPrimo(numero + 1));
console.log(esPrimo(numero + 5));

function esPrimo(num) {
    let contDivisores = 0;
    for (let i = 2; i <= num/2; i++) {
        if (num % i === 0) {
            contDivisores += 1;
        }
    }
    return contDivisores === 0;
}
