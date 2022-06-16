let placar = new Vue({
    el: '#placar',
    data: {
        n: 0,
    }
});

let lista = new Vue({
    el: '#lista',
    data: {
        nomes: [
            { nome: 'Ernandes', sobrenome: 'Souza' },
            { nome: 'Jacques', sobrenome: 'Douglas Souza' },
            { nome: 'Emilly', sobrenome: 'Theissa Souza' },
            { nome: 'Sulivan', sobrenome: 'Rosa Souza' },
        ]
    }
});