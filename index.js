
let numero = 8

console.log(esPrimo(numero));

function esPrimo(num) {
    let contDivisores = 0
    for (let i = 1; i <= num; i++) {
        if (num % i == 0) {
            contDivisores = contDivisores + 1
        }
    }

    if (contDivisores == 2) {
        return true
    }

    return false
}
