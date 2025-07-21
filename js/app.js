let amigos = [];

function adicionar() {
    let amigoInput = document.getElementById('nome-amigo');
    let nomeOriginal = amigoInput.value.trim();

    if (nomeOriginal === '') {
        alert("Por favor, insira o nome do amigo.");
        return;
    }

    let nomeMaiusculo = nomeOriginal.toUpperCase();

    if (amigos.some(amigo => amigo.toUpperCase() === nomeMaiusculo)) {
        alert("Este amigo já foi adicionado.");
        amigoInput.value = '';
        return;
    }

    amigos.push(nomeOriginal);

    let lista = document.getElementById('lista-amigos');
    if (lista.textContent === '') {
        lista.textContent = nomeOriginal;
    } else {
        lista.textContent += ', ' + nomeOriginal;
    }

    amigoInput.value = '';
}

function sortear() {
    if (amigos.length < 4) {
        alert("Adicione pelo menos 4 amigos para sortear!");
        return;
    }

    let sorteio = document.getElementById('lista-sorteio');
    sorteio.innerHTML = '';

    let sorteados = [...amigos];
    embaralha(sorteados);

    for (let i = 0; i < amigos.length; i++) {
        if (amigos[i] === sorteados[i]) {
            sortear();
            return;
        }
    }

    for (let i = 0; i < amigos.length; i++) {
        sorteio.innerHTML += amigos[i] + ' --> ' + sorteados[i] + '<br>';
    }
}

function embaralha(lista) {
    for (let i = lista.length; i; i--) {
        const j = Math.floor(Math.random() * i);
        [lista[i - 1], lista[j]] = [lista[j], lista[i - 1]];
    }
}

function reiniciar() {
    amigos = [];
    document.getElementById('lista-amigos').innerHTML = '';
    document.getElementById('lista-sorteio').innerHTML = '';
}