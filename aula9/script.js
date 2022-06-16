function bandeira(pais) {
    return `<img src="paises/${pais}.png" />`;
}

Vue.component("pais", {
    props: ["nome", "continente"],
    template: `<p v-html="nome + continente"></p>`
});

let app = new Vue({
    el: "#app",
    data: {
        argentina: bandeira("argentina"),
        brazil: bandeira("brazil"),
        china: bandeira("china"),
        uk: bandeira("uk"),
        usa: bandeira("usa"),
    }
});