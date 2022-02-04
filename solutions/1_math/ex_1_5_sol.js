// Altere a função para que dado dois números e dois pesos respectivamente, ela retorne a média ponderada

function mediaPonderada(num1, num2, peso1, peso2) {
    return ((num1 * peso1) + (num2 * peso2)) / (peso1 + peso2)
}

module.exports = mediaPonderada