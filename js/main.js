	var tiro_1;
	var tiro_2;
	var posiciones = [0,-160,-320,-481,-642,-803];
	var dado1,dado2,boton_tirar;
	var suma;
	var Player1='';
	var Player2='';
	var bandera= true; 
	var partida= true;
	var tirada= 1;
	var scoreplayer1= 0;
	var scoreplayer2= 0;
	let arregloJugadores = []

	window.onload = init;



	function init(){
	boton_tirar = document.getElementById("boton_tirar");
	boton_tirar.addEventListener("click",jugar);

	//Evento para guardar los players
		btn_guardar = document.getElementById("boton_guardar");
	btn_guardar.addEventListener("click",guardar_players);


	dado1 = document.getElementById("dado1");
	dado2 = document.getElementById("dado2");
	}



	function tirardado(){
	return Math.floor(Math.random() * 6) + 1 ;
	}



	function actualizarDado(ref,cara){
	ref.style.backgroundPosition = posiciones[cara-1]+"px";
	}


	function validarResultado(posicion) {
	tiro_1 = tirardado();//Retorna un numero entre 1 y 6
	tiro_2 = tirardado();
	actualizarDado(dado1,tiro_1);
	actualizarDado(dado2,tiro_2);
	arregloJugadores [posicion].tirada ++; 


//Que define a cada tirada 
	suma = tiro_1 + tiro_2 
arregloJugadores [posicion].resultados = suma;

	document.getElementById("resultado").innerHTML= arregloJugadores [posicion].nombre+ ", tu tirada Número: " +arregloJugadores [posicion].tirada+ " fue de: "+arregloJugadores [posicion].resultados;


	}

function resetearPartida(){
	partida= false;
	for (var i = 0; i >= 1; i++) {
		arreglogadores[i].puntos=0;
		arregloJugadores[i].tirada=0;
		arregloJugadores[i].resultados=0
		}
	
}

	function jugar(){
	document.getElementById("partidas").innerHTML="Partidas gandas:<br> "+arregloJugadores[0].nombre+": "+arregloJugadores[0].marcador+"<br> "+arregloJugadores[1].nombre+": "+arregloJugadores[1].marcador;
	if(bandera)
	{
		document.getElementById("mensaje").innerHTML=" Turno para el jugador " + Player2; 
		validarResultado(0);
	}
	else{
		document.getElementById("mensaje").innerHTML=" Turno para el jugador " + Player1; 
		validarResultado(1);
	}
bandera=!bandera;

//validar primera tirada 
	if (arregloJugadores[0].tirada == arregloJugadores[1].tirada && arregloJugadores[0].tirada == 1)
	{
		// validar ganador partida 
		if(arregloJugadores[0].resultados == 7 || arregloJugadores[0].resultados ==  11)
		arregloJugadores[0].marcador = 1;

		if(arregloJugadores[1].resultados == 7 || arregloJugadores[1].resultados ==  11)
		arregloJugadores[1].marcador = 1;
		if (arregloJugadores[1].marcador == 1 && arregloJugadores[0].marcador == 	1 ){

			document.getElementById("mensaje").innerHTML="EMPATE, AMBOS GANARON";
			//funcion para resetear las variables para la siguiente partida
			resetearPartida();
		}
		else if (arregloJugadores[0].marcador == 1){
			arregloJugadores[0].marcador++;
			document.getElementById("mensaje").innerHTML="Ganó el jugador" + arregloJugadores[0].nombre + " en la primera tirada";

		}
		else if (arregloJugadores[1].marcador == 1){
			arregloJugadores[1].marcador++;
			document.getElementById("mensaje").innerHTML="Ganó el jugador" + arregloJugadores[1].nombre + " en la primera tirada";

		}

		if (arregloJugadores[0].resultados == 2 || arregloJugadores[0].resultados == 3 || arregloJugadores[0].resultados == 12 || arregloJugadores[1].resultados == 2 || arregloJugadores[1].resultados == 3 || arregloJugadores[1].resultados == 12  )
		{
			document.getElementById("mensaje").innerHTML="EMPATE, AMBOS PERDIERON";
			//funcion para resetear las variables para la siguiente partida
			resetearPartida();

		}
		else if (arregloJugadores[0].resultados == 2 || arregloJugadores[0].resultados == 3 || arregloJugadores[0].resultados == 12)
		{
			arregloJugadores[1].marcador++;
			document.getElementById("mensaje").innerHTML="Ganó el jugador" + arregloJugadores[1].nombre + " en la primera tirada";
			//funcion para resetear las variables para la siguiente partida
			resetearPartida();

		}
		else if (arregloJugadores[1].resultados == 2 || arregloJugadores[1].resultados == 3 || arregloJugadores[1].resultados == 12)
		{
			arregloJugadores[0].marcador++;
			document.getElementById("mensaje").innerHTML="Ganó el jugador" + arregloJugadores[0].nombre + " en la primera tirada";
			//funcion para resetear las variables para la siguiente partida
			resetearPartida();
			
		}
		if (partida== false)
		{document.getElementById("mensaje").innerHTML="partidas ganadas Jugador 1" + arregloJugadores[0].partida + " partidas ganadas Jugador 2" + arregloJugadores[1].partida;
		partida = true}
		
	}
	//SI es la segunda tirada
	else{
		if (arregloJugadores[0].tirada == arregloJugadores[1].tirada && arregloJugadores[0].tirada > 1)
		{
			 if (arregloJugadores[0].resultados == 4 || arregloJugadores[0].resultados == 5 || arregloJugadores[0].resultados == 6 || arregloJugadores[0].resultados == 8 ||arregloJugadores[0].resultados == 9 || arregloJugadores[0].resultados == 10){ 

		arregloJugadores[0].puntos ++;

	}

	if (arregloJugadores[1].resultados == 4 || arregloJugadores[1].resultados == 5 || arregloJugadores[1].resultados == 6 || arregloJugadores[1].resultados == 8 || arregloJugadores[1].resultados == 9 || arregloJugadores[1].resultados == 10){ 

		arregloJugadores[1].puntos ++;

	}
	//Validar quien sacó el 7 y perdió jajajajajaj
	if (arregloJugadores[0].resultados== 7){

		arregloJugadores[0].puntos = -1;
	}

	if (arregloJugadores[1].resultados== 7){

		arregloJugadores[1].puntos = -1;
	}

	//Validar si perdieron6
	if(arregloJugadores[1].puntos == -1 && arregloJugadores[0].puntos == -1)
		{
		document.getElementById("mensaje").innerHTML="Perdieron ambos jugadores!!! ";
			//funcion para resetear las variables para la siguiente partida
		 }
		 else if(arregloJugadores[1].puntos == -1){
		 	arregloJugadores[0].marcador++;
		 	document.getElementById("mensaje").innerHTML="Ganó el jugador " + arregloJugadores[0].nombre + " porque el jugador " +arregloJugadores[1].nombre+ " obtuvo " + arregloJugadores[1].resultados ;
		 	
		 	//funcion para resetear las variables para la siguiente partida
		 	resetearPartida();
		 }else if(arregloJugadores[0].puntos == -1){
		 	arregloJugadores[1].marcador++;
		 	document.getElementById("mensaje").innerHTML="Ganó el jugador " + arregloJugadores[1].nombre + " porque el jugador " +arregloJugadores[0].nombre+ " obtuvo " + arregloJugadores[0].resultados;
		 	//funcion para resetear las variables para la siguiente partida
		 	resetearPartida();
		 }
		}	
	}
	



		}

	//Función Guardar Players
	function guardar_players(){
		Player1=document.getElementById("player1").value;
		Player2=document.getElementById("player2").value;
		document.getElementById("Jugadores").className="oculto";
		document.getElementById("Panel2").className="mostrar";
		document.getElementById("mensaje").innerHTML=" Inicia el jugador " + Player1; 
		//alert(Player2);

	var jugador1 = {

		nombre : document.getElementById("player1").value,
		resultados : 0,
		marcador : 0,
		tirada : 0,
		puntos : 0,
	}

	var jugador2 = {

		nombre : document.getElementById("player2").value,
		resultados : 0,
		marcador : 0,
		tirada : 0,
		puntos : 0,

	}

	arregloJugadores[0]= jugador1
	arregloJugadores[1]= jugador2;

	//alert (arregloJugadores [1].nombre)

	}
	