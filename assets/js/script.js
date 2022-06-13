// Link function
function seleccionar(link){
	var opciones = document.querySelectorAll('#links a');
	opciones[0].className = "";
	opciones[1].className = "";
	opciones[2].className = "";
	opciones[3].className = "";
	opciones[4].className = "";
	link.className = "seleccionado";

	// responsive menu disappears after selecting a link
	var x = document.getElementById('nav');
	x.className = "";
}

// menu Responsive function 
function responsiveMenu(){
	var x = document.getElementById('nav');
	if(x.className===""){
		x.className = "responsive";
	}else{
		x.className = "";
	}
}

// Scrolling bar
window.onscroll = function(){
	efectoHabilidades()
}

function efectoHabilidades(){
	var skills = document.getElementById('skills');
	var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
	if(distancia_skills >= 300){
		document.getElementById('html').classList.add('barra-progreso1');
		document.getElementById('js').classList.add('barra-progreso2');
		document.getElementById('bd').classList.add('barra-progreso3');
		document.getElementById('py').classList.add('barra-progreso4');
	}
}