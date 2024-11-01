let menuUnfold = document.getElementById("unfoldMenuThing");
let contentsMenu = document.getElementById("mainarea");

menuUnfold.addEventListener("click", function () {
    if (contentsMenu.style.display === "none" || contentsMenu.style.display === "") {
        contentsMenu.style.display = "block";
        menuUnfold.innerText = "-";
        document.getElementById("titlemain").style.marginTop = "0"
    } else {
        contentsMenu.style.display = "none";
        menuUnfold.innerText = "+";
        document.getElementById("titlemain").style.marginTop = "15%"
    }
});