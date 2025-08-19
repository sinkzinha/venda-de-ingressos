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
    
    if (qtd > qtdPista) {
        alert("Não há ingressos disponíveis nesse setor.");

    } else {
        qtdPista = qtdPista - qtd;
        document.getElementById('qtd-pista').textContent = qtdPista;
        alert("Compra realizada com sucesso!");
        limpar();
    }

}

// superior

function comprarSuperior(qtd) {
    let qtdSup = parseInt(document.getElementById('qtd-superior').textContent);
    
    if (qtd > qtdSup) {
        alert("Não há ingressos disponíveis nesse setor.");

    } else {
        qtdSup = qtdSup - qtd;
        document.getElementById('qtd-superior').textContent = qtdSup;
        alert("Compra realizada com sucesso!");
        limpar();
    }
}

// inferior

function comprarInferior(qtd) {
    let qtdInf = parseInt(document.getElementById('qtd-inferior').textContent);
    
    if (qtd > qtdInf) {
        alert("Não há ingressos disponíveis nesse setor.");

    } else {
        qtdInf = qtdInf - qtd;
        document.getElementById('qtd-inferior').textContent = qtdInf;
        alert("Compra realizada com sucesso!");
        limpar();
    }
}

function limpar() {
    document.getElementById('qtd').value = '';
}

