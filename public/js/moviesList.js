window.addEventListener('load', function() {

	let darkMode = prompt("¿Desea modo oscuro?");

	if (darkMode == "si") {
		document.querySelector("body").style.backgroundColor = "#7f7f7f";
		document.querySelector("body").classList.add("fondoMoviesList");
	}

    let logo = document.querySelector("figure");

    logo.addEventListener('mouseover', function() {
        document.querySelector("body").style.backgroundColor = "#7f7f7f";
        document.querySelector("body").classList.add("fondoMoviesList");
    })

	logo.addEventListener('mouseout', function() {
        document.querySelector("body").style.backgroundColor = "white";
        document.querySelector("body").classList.toggle("fondoMoviesList");
    })

	document.querySelector("h1").innerText = "LISTADO DE PELÍCULAS";
	document.querySelector("h1").style.color = "white";
	document.querySelector("h1").style.backgroundColor = "teal";
	document.querySelector("h1").style.padding = "20px";
    
});