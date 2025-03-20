function soma(a, b) {
    return a + b;
}

////Função para subtração
function subtracao(a, b) {
    return a - b;
}

function multiplicacao(a, b) {
    return a * b;
}


function divisao(a, b) {
    if (b === 0) {
        return "Erro: divisão por zero!";
    }
    return a / b;
}

// Função para exponenciação
function exponenciacao(base, expoente) {
    return Math.pow(base, expoente);
}

// Exportar todas as funções
module.exports = {
    soma,
    subtracao,
    multiplicacao,
    divisao,
    exponenciacao
};