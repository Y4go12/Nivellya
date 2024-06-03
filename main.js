const toggleList = document.querySelector(".toggleList");

const toggleListElements = toggleList.querySelectorAll(".toggleListEl");
const span = toggleList.querySelectorAll("span");
const iHtml = toggleList.querySelectorAll("i");

toggleListElements.forEach((el, i) => {
    el.index = i;
    el.boolean = false;
    
    el.addEventListener("click", () => {
        if (!el.boolean) {
            span[Number(el.index)].style.display = "block";
            iHtml[Number(el.index)].style.transform = "rotate(180deg)";
            el.boolean = true;
        } else {
            span[Number(el.index)].style.display = "none";
            iHtml[Number(el.index)].style.transform = "rotate(0)";
            el.boolean = false;
        }
    });
});

function redirectForGame() {
    window.location.href = "game.html";
}

window.alert("Aviso: A maioria dos textos em azul não possuem funcionalidade ainda. A única exceção são os da seção de Atualizações recentes.");