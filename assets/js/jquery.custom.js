
// Login from 
var nav = document.getElementById("nav"),
    menu = document.getElementById("menu");

menu.onclick = function () {
    nav.classList.toggle("o-nav");
    if (nav.classList.contains("o-nav")) {
        menu.setAttribute("class", "bi bi-x");
        menu.setAttribute("style", "color: teal; transform: scale(1.3);");
    } else {
        menu.setAttribute("class", "bi bi-list");
        menu.setAttribute("style", "");
    }
};