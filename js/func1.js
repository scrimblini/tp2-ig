let menuUnfold = document.getElementById("unfoldMenuThing");
let contentsMenu = document.getElementById("contents");

menuUnfold.addEventListener("click", function (){
    contentsMenu.style.display = "block";
    if (contentsMenu.style.display === "block"){
        contentsMenu.style.display = "none";
    }
});
//solve this swappy thing
//thats for the menu in the first page