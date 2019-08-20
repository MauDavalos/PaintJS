var color = "#000000";
	var tamano = 10;
	var pintura = false;



	function pintar(event){
		var canvas = document.getElementById("canvas");
		const ctx = canvas.getContext("2d");
		var x = event.clientX-350;
		var y = event.clientY+20;
		if(pintura){
			ctx.fillStyle = color;
			ctx.fillRect(x,y,tamano, tamano);
		}

		
	}

	

	function activar(){
		pintura = true;
	}
	function desactivar(){
		pintura = false;
	}
	
	function borrador(){
		document.getElementById("canvas").style.cursor = "url('borradorCanvas.png'), default";
		color = "#FFFFFF";
		document.getElementById("colores").setAttribute("disabled", "");
	}
	
	function lapiz(){
		document.getElementById("canvas").style.cursor = "url('lapizCanvas.png'), default";
		color = document.getElementById("colores").value;
		document.getElementById("colores").removeAttribute("disabled");
	}

	function eliminarCanvas(){
		document.getElementById("canvas");
		const ctx = canvas.getContext("2d");
	
		ctx.clearRect(0, 0, canvas.width, canvas.height);

	}


	function scolor(){
		color = document.getElementById("colores").value;
	}
	function stamano(numero) {
		tamano = numero;
	}
	
	function guardari(){
		var canvas = document.getElementById("canvas");
		var imagen = canvas.toDataURL("image/png");
		this.href = imagen;
	}


