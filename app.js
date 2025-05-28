

function calcularPPR() {
    const salario = parseFloat(document.getElementById('salario').value);
    const meses = parseInt(document.getElementById('meses').value);
    const categoria = document.getElementById('categoria').value;
    const grupoCargo = document.getElementById('grupoCargo').value;
    const filial = document.getElementById('filial').value;
    const resultado1 = parseFloat(document.getElementById('resultado1').value);
    const resultado2 = parseFloat(document.getElementById('resultado2').value);
    const resultado3 = parseFloat(document.getElementById('resultado3').value);
    const resultado4 = parseFloat(document.getElementById('resultado4').value);
    const ebitda = parseFloat(document.getElementById('ebitda').value);

    // Calculate the average of the results
    const mediaResultados = (((resultado1 + resultado2 + resultado3 + resultado4) / 4)*0.7)+(ebitda*0.3);

    let multiplicadorCategoria;
    if (categoria === "01") {
        multiplicadorCategoria = 0.10;
    } else if (categoria === "02") {
        multiplicadorCategoria = 0.20;
    } else if (categoria === "03") {
        multiplicadorCategoria = 0.30;
    }

    const resultadoPPR = (((salario * meses) * (mediaResultados * 13.33 * multiplicadorCategoria).toFixed(4)) / 12)/100;

    document.getElementById('resultado').innerText = `Valor Bruto: R$ ${resultadoPPR.toFixed(2)}
 Aviso Importante: O valor apresentado é bruto, ou seja, sem desconto de taxa sindical (Valor de acordo com o Acordo Coletivo da Filial) e Imposto de Renda (Para valores acima de R$ 7640,80).`;

    let resultado = 0; 
    const relatorio = `
        <h2>Relatório de Cálculo</h2>
        <p><strong>Grupo de Cargo:</strong> ${grupoCargo}</p>
        <p><strong>Categoria:</strong> ${categoria}</p>
        <p><strong>Salário Base Mensal:</strong> R$ ${salario.toFixed(2)}</p>
        <p><strong>Número de Meses Trabalhados:</strong> ${meses}</p>
        <p><strong>Resultado 1º Trimestre:</strong> ${resultado1}</p>
        <p><strong>Resultado 2º Trimestre:</strong> ${resultado2}</p>
        <p><strong>Resultado 3º Trimestre:</strong> ${resultado3}</p>
        <p><strong>Resultado 4º Trimestre:</strong> ${resultado4}</p>
        <p><strong>Resultado EBITDA:</strong> ${ebitda}</p>
        <p><strong>Target:</strong> ${multiplicadorCategoria}</p>
    `;
    document.getElementById('relatorio').innerHTML = relatorio;
    document.getElementById('logo-container').style.display = 'block';
}

function limparCampos() {
    document.getElementById('filial').value = "";
    document.getElementById('categoria').value = "";
    document.getElementById('grupoCargo').value = "";
    document.getElementById('salario').value = "";
    document.getElementById('meses').value = "";
    document.getElementById('resultado1').value = "";
    document.getElementById('resultado2').value = "";
    document.getElementById('resultado3').value = "";
    document.getElementById('resultado4').value = "";
    document.getElementById('ebitda').value = "";
    document.getElementById('resultado').innerText = "Resultado: ";
    document.getElementById('logo-container').style.display = 'none';
}






