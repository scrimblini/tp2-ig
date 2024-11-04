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

function openNav() {
    const fadeDiv = document.getElementById("fadeDiv");
    const sideMenu = document.getElementById("sideMenuThing");
    const lineDiv = document.getElementById("clickLine");
    const currentMarginLeft = window.getComputedStyle(fadeDiv).marginLeft;

    if (currentMarginLeft === "0px") {
        sideMenu.style.width = "250px";
        fadeDiv.style.marginLeft = "250px";
        lineDiv.style.marginLeft = "250px";
        menuUnfold.innerText = "-";
        console.log("open");
    } else {
        sideMenu.style.width = "0";
        fadeDiv.style.marginLeft = "0";
        lineDiv.style.marginLeft = "0";
        menuUnfold.innerText = "+";
        console.log("close");
    }
}
  function closeNav() {
    document.getElementById("sideMenuThing").style.width = "0";
    document.getElementById("cfade").style.marginLeft = "0";
  }