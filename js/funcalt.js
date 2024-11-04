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


let clickLine = document.getElementById("clickLine");

function openNav() {
    let sideMenu = document.getElementById("sideMenuThing");
    let contDiv = document.getElementById("fadeDiv");

    if (sideMenu.style.width == "0" &&
    contDiv.style.marginLeft == "0") {
    sideMenu.style.width = "250px";
    contDiv.style.marginLeft = "250px";
    contDiv.style.whiteSpace = "nowrap";
    }
    else {
    sideMenu.style.width = "0";
    contDiv.style.marginLeft = "0";    
    contDiv.style.whiteSpace = "normal";
    }
  }

clickLine.addEventListener(click, openNav())

  /*
  function closeNav() {
    document.getElementById("sideMenuThing").style.width = "0";
    document.getElementById("fadeDiv").style.marginLeft = "0";
  }*/