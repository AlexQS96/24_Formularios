window.addEventListener('load', function() {

	let nombre = prompt("Ingrese su nombre");

	document.querySelector("h2").style.textTransform = "uppercase";

	document.querySelector("a").style.color = "#E51B3E";

	let confirmar = confirm("¿Desea colocar un fondo de pantalla?");

	if (confirmar) {
		document.querySelector("body").classList.add("fondo");
	}

	if(nombre == "") {
		document.querySelector("h2.subtitulo").innerText += "Invitado"
	}
    else
    {
		document.querySelector("h2.subtitulo").innerText += nombre
	}

	let destacado = document.querySelectorAll("p");

	for(let i = 0 ; i < destacado.length; i++) {
		if (i % 2 == 0) {
			destacado[i].classList.add('destacadoPar');
		}
        else
        {
			destacado[i].classList.add('destacadoImpar');
		}
	}

	document.querySelector("main").style.display = "block"

	let logoDH = document.querySelector('figure');

    let menu = document.querySelector('#menu')

    logoDH.addEventListener('click', function() {
        menu.classList.toggle('mostrar')
		document.querySelector(".container").classList.toggle("menuOpened");
    })
    
	menu.addEventListener('mouseleave', function() {
		menu.classList.toggle('mostrar')
		document.querySelector(".container").classList.toggle("menuOpened");
    })
})