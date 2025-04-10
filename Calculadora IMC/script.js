document.getElementById('calcular').addEventListener('click', function() {
    const idade = parseFloat(document.getElementById('idade').value);
    const peso = parseFloat(document.getElementById('peso').value);
    const altura = parseFloat(document.getElementById('altura').value) / 100;

    if (idade && peso && altura) {
        const imc = peso / (altura * altura);
        const resultado = imc.toFixed(2);

        let classificacao = "";

        if (imc < 18.5) {
            classificacao = "Abaixo do peso";
        } else if (imc < 25) {
            classificacao = "Peso normal";
        } else if (imc < 30) {
            classificacao = "Sobrepeso";
        } else {
            classificacao = "Obesidade";
        }

        document.getElementById('resultado-imc').textContent = `Seu IMC é: ${resultado}`;
        document.getElementById('resultado-classificacao').textContent = `Classificação: ${classificacao}`;

    } else {
        document.getElementById('resultado-imc').textContent = "Por favor, preencha todos os campos.";
        document.getElementById('resultado-classificacao').textContent = ""; // Limpa a classificação
    }
});