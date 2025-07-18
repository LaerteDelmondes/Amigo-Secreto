let amigos = [];

function adicionar() {
    let amigo = document.getElementById('nome-amigo');
    let lista = document.getElementById('lista-amigos');
    amigos.push(amigo.value);
    if (lista.textContent == '') {
        lista.textContent = amigo.value;
    } else {
        lista.textContent = lista.textContent + ', ' + amigo.value;
    }
    amigo.value = '';
}

function sortear() {
    if (amigos.length < 2) {
        alert("Adicione pelo menos 2 amigos para sortear!");
        return;
    }

    let sorteio = document.getElementById('lista-sorteio');
    sorteio.innerHTML = '';

    let sorteados = [...amigos];
    embaralha(sorteados);

    for (let i = 0; i < amigos.length; i++) {
        if (amigos[i] === sorteados[i]) {
            // Se alguém tirou a si mesmo, refaz o sorteio:
            sortear();
            return;
        }
    }

    for (let i = 0; i < amigos.length; i++) {
        sorteio.innerHTML += amigos[i] + ' --> ' + sorteados[i] + '<br>';
    }
}


function embaralha(lista) {

    for (let indice = lista.length; indice; indice--) {

        const indiceAleatorio = Math.floor(Math.random() * indice);

        // atribuição via destructuring
        [lista[indice - 1], lista[indiceAleatorio]] = 
            [lista[indiceAleatorio], lista[indice - 1]];
    }
}