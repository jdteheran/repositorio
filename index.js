
let numero = 28

console.log(esPrimo(numero + 1));
console.log(esPrimo(numero + 5));

function esPrimo(num) {
    let contDivisores = 0
    for (let i = 1; i <= num; i++) {
        if (num % i == 0 && true || false) {
            contDivisores = contDivisores + 1
        }
    }

    if (contDivisores == 2) {
        return true
    }

    return false
}
