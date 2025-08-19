function comprar() {
    let tipo = document.getElementById('tipo-ingresso');
    let qtd = parseInt(document.getElementById('qtd').value);

    if (tipo.value == 'pista') {
        comprarPista(qtd);
    }
    else if (tipo.value == 'superior') {
        comprarSuperior(qtd);
    }
    else if (tipo.value == 'inferior') {
        comprarInferior(qtd);
    }
    
}

// pista

function comprarPista(qtd) {
    let qtdPista = parseInt(document.getElementById('qtd-pista').textContent);
    
    if (qtd < qtdPista && qtd > 0 ) {
        qtdPista = qtdPista - qtd;
        document.getElementById('qtd-pista').textContent = qtdPista;
        alert("Compra realizada com sucesso!");
        limpar();
    } else if (qtd <= 0) { 
        alert("Valor inválido!");
    } else if (qtd > qtdPista && qtd > 0) {
        alert("Não há ingressos disponíveis nesse setor.");
    }
}

// superior

function comprarSuperior(qtd) {
    let qtdSup = parseInt(document.getElementById('qtd-superior').textContent);
    
    if (qtd < qtdSup && qtd > 0 ) {
        qtdSup = qtdSup - qtd;
        document.getElementById('qtd-pista').textContent = qtdSup;
        alert("Compra realizada com sucesso!");
        limpar();
    } else if (qtd <= 0) { 
        alert("Valor inválido!");
    } else if (qtd > qtdSup && qtd > 0) {
        alert("Não há ingressos disponíveis nesse setor.");
    }
}

// inferior

function comprarInferior(qtd) {
    let qtdInf = parseInt(document.getElementById('qtd-inferior').textContent);
    
    if (qtd < qtdInf && qtd > 0 ) {
        qtdInf = qtdInf - qtd;
        document.getElementById('qtd-pista').textContent = qtdInf;
        alert("Compra realizada com sucesso!");
        limpar();
    } else if (qtd <= 0) { 
        alert("Valor inválido!");
    } else if (qtd > qtdInf && qtd > 0) {
        alert("Não há ingressos disponíveis nesse setor.");
    }
    }

function limpar() {
    document.getElementById('qtd').value = '';
}

