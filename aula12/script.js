let app = new Vue({
	el:'#app',
	data:{
		aviso: true,
		idDinamico: "areaMensagem",
		linkDinamico: "https://google.com",
		numeroDinamico: 14
	},
	methods: {
		clicou: ()=>{alert("OPA! CLIQUE")},
		submitou: ()=>{
			console.log("OPA KKkKK");
		}
	}
});