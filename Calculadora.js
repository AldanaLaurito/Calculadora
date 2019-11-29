var ultimoResultado = 0;

function numero(nro){
	var texto=document.getElementById("textoPantalla").innerHTML

	var largoTexto=texto.length;
	
	if(document.getElementById("textoPantalla").innerHTML == 0 && texto.substring(largoTexto-1,largoTexto) != '.'){
		document.getElementById("textoPantalla").innerHTML ='';
		document.getElementById("textoPantalla").innerHTML = nro;
	}else{
		document.getElementById("textoPantalla").innerHTML = texto + nro;
	}
}

function signo(signo){
	document.getElementById("textoPantalla").innerHTML += signo;
}

function signoIgual(signo){
	try{
		var resultado = eval(document.getElementById("textoPantalla").innerHTML);
		if(resultado == 'Infinity' || isNaN(resultado)){
			alert("La operacion ingrasada da un resultado invalido. Por favor, intente realizar otra operacion. El resultado obtenido es "+resultado)
		}else{
			document.getElementById("textoPantalla").innerHTML += signo + resultado;
			ultimoResultado = resultado;
		}
	}catch(error){
		alert("Se produjo el siguiente error: "+error +'. Por favor, intente realizar otra operacion.')
	}	
}

function borrar(){

	var texto=document.getElementById("textoPantalla").innerHTML

	var largoTexto=texto.length;

	document.getElementById("textoPantalla").innerHTML=texto.substring(0,largoTexto-1);
}

function borradoTotal(){
	document.getElementById("textoPantalla").innerHTML ='0';
}

function ultResultado(){
	numero(ultimoResultado);
}