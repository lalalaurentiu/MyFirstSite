
/*//{ luam paragraful cu id-ul redplanet intr-o variabila
//var planet = document.getElementById("redplanet")}
// luam ce scrie in paragraf in cazul nostru redplanet intr-o variabila
var planet = document.querySelector("#redplanet")

//planet.innerHTML = "<h1>Aliens landed on Mars</h1>"
planet.innerText = "Aliens landed on Mars"

planet.classList.add("alert", "alert-danger")
//planet.remove() //sterge elementul*/

function check() {
    var planet = document.querySelector("#redplanet")
    planet.innerText = "Aliens landed on Mars"
    planet.classList.add("alert", "alert-danger")
}

var button = document.querySelector("input[type='button']")
button.addEventListener("click", check)