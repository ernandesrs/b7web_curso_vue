let app = new Vue({
    el: '#app',
    data: {
        nome: 'Ernandes Rosa de Souza',
        idade: 28
    },
    methods: {
        mostrar: (nome, idade) => {
            let txt = "Olá, " + nome + ", você tem " + idade + " anos :D";
            return txt;
        },
        testar: () => {
            return "Testando 1, 2, 3"
        }
    }
});