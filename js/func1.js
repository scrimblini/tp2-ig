let menuUnfold = document.getElementById("unfoldMenuThing");
let contentsMenu = document.getElementById("mainarea");

menuUnfold.addEventListener("click", function () {
    if (contentsMenu.style.display === "none" || contentsMenu.style.display === "") {
        contentsMenu.style.display = "block";
        menuUnfold.innerText = "-";
    } else {
        contentsMenu.style.display = "none";
        menuUnfold.innerText = "+";
    }
});