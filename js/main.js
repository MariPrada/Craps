	var tiro_1;
	var tiro_2;
	var posiciones = [0,-160,-320,-481,-642,-803];
	var dado1,dado2,boton_tirar;
	var suma;
	var Player1='';
	var Player2='';
	var bandera= false; 
	var partida= true;
	var tirada= 1;
	var scoreplayer1= 0;
	var scoreplayer2= 0;
	let arregloJugadores = []
	var TiradaDados=0


	window.onload = init;



	function init(){
		document.getElementById("roll-button").addEventListener("click", jugar);

	
	//Evento para guardar los players
	btn_guardar = document.getElementById("boton_guardar");
	btn_guardar.addEventListener("click",guardar_players);


	dado1 = document.getElementById("dado1");
	dado2 = document.getElementById("dado2");
	}



	function tirardado(){
			 const dice = [...document.querySelectorAll(".die-list")];
			  dice.forEach(die => {
			    toggleClasses(die);
			    die.dataset.roll = getRandomNumber(1, 6);
			    TiradaDados+=die.dataset.roll;
			  });
	//return Math.floor(Math.random() * 6) + 1 ;
	}



	function actualizarDado(ref,cara){
	ref.style.backgroundPosition = posiciones[cara-1]+"px";
	}


	function validarResultado(posicion) {
	//tiro_1 = tirardado();//Retorna un numero entre 1 y 6
	//tiro_2 = tirardado();
	//actualizarDado(dado1,tiro_1);
	//actualizarDado(dado2,tiro_2);
	rollDice();
	//Aumentamo la tirada del jugador
	arregloJugadores[posicion].tirada ++; 

			let ganador=1;
			let perdedor=0;
			if(posicion == 1)
			{
				ganador=0;perdedor=1;
			}

	
	

//Que define a cada tirada 
	suma = TiradaDados;
	TiradaDados=0;

arregloJugadores [posicion].resultados = suma;

if (arregloJugadores [posicion].tirada > 0){
	
document.getElementById("resultado").innerHTML= arregloJugadores [posicion].nombre+ ", tu tirada Número =  " +arregloJugadores [posicion].tirada+ ", fue de : "+arregloJugadores [posicion].resultados;
	
	//setTimeout(() => { document.getElementById("resultado").innerHTML= arregloJugadores [posicion].nombre+ ", tu tirada Número: " +arregloJugadores [posicion].tirada+ " fue de: "+arregloJugadores [posicion].resultados  }, 500);
	}


//validar primera tirada 
	if (arregloJugadores[posicion].tirada == 1)
	{
		//Guardamos la primer tirada del jugador
		arregloJugadores[posicion].primer=suma;

		// validar ganador partida 
		if(arregloJugadores[posicion].resultados == 7 || arregloJugadores[posicion].resultados ==  11)
		{
			//Controlar el ganador y perdedor
			
			arregloJugadores[posicion].marcador++;
			//document.getElementById("mensaje").innerHTML="Ganó el jugador " + arregloJugadores[posicion].nombre + " en la primera tirada.";
			mostrarVentana("Ganó el jugador " + arregloJugadores[posicion].nombre + " en la primera tirada.");
			resetearPartida();
		}
			
		
		else if (arregloJugadores[posicion].resultados == 2 || arregloJugadores[posicion].resultados == 3 || arregloJugadores[posicion].resultados == 12)
		{
			
			arregloJugadores[ganador].marcador++;
			//document.getElementById("mensaje").innerHTML="Ganó el jugador " + arregloJugadores[ganador].nombre + " en la primera tirada.";
			mostrarVentana("Ganó el jugador " + arregloJugadores[ganador].nombre + " en la primera tirada.");
			//funcion para resetear las variables para la siguiente partida
			resetearPartida();

		}
	
	}
	// CUANDO LA TIRADA ES MAYOR QUE 1, CUANDO SE ESTABLECE PUNTO.
	else if (arregloJugadores[posicion].tirada > 1)
		{

			//Vaidar si gané con el mismo número de la primer tirada
			if(arregloJugadores[posicion].primer==arregloJugadores[posicion].resultados)
			{
				arregloJugadores[posicion].marcador++;
			//document.getElementById("mensaje").innerHTML="Ganó el jugador " + arregloJugadores[posicion].nombre + ", porque obtuvo el mismo número de la primer tirada.";
			mostrarVentana("Ganó el jugador " + arregloJugadores[posicion].nombre + ", porque obtuvo el mismo número de la primer tirada.");
			//funcion para resetear las variables para la siguiente partida
			resetearPartida();
			}

			 else if (arregloJugadores[posicion].resultados == 4 || arregloJugadores[posicion].resultados == 5 || arregloJugadores[posicion].resultados == 6 || arregloJugadores[posicion].resultados == 8 ||arregloJugadores[posicion].resultados == 9 || arregloJugadores[posicion].resultados == 10){ 
			arregloJugadores[posicion].puntos ++;
		}
	
	//Validar quien sacó el 7 y perdió
	else if (arregloJugadores[posicion].resultados== 7){

			arregloJugadores[ganador].marcador++;
			//document.getElementById("mensaje").innerHTML="Ganó el jugador " + arregloJugadores[ganador].nombre + ", porque el otro jugador obtuvo un SIETE.";
			mostrarVentana("Ganó el jugador " + arregloJugadores[ganador].nombre + ", porque el otro jugador obtuvo un SIETE.");
			//funcion para resetear las variables para la siguiente partida
			resetearPartida();
	}
	
			
}
	}

	function mostrarVentana(mensaje){

		Swal.fire(
  'CV ganaste!',
  mensaje,
  'success'
)
	}

function resetearPartida(){
	//console.log("gap alguien")
	partida= false;
	bandera = false;
	//setTimeout(() => { document.getElementById("resultado").innerHTML= ""  }, 500);
		document.getElementById("resultado").innerHTML= "";
	
		arregloJugadores[0].puntos=0;
		arregloJugadores[0].tirada=0;
		arregloJugadores[0].resultados=0;
		arregloJugadores[0].primer=0;
		arregloJugadores[1].primer=0;
		arregloJugadores[1].puntos=0;
		arregloJugadores[1].tirada=0;
		arregloJugadores[1].resultados=0
		
	
}

	function jugar(){
		
		//Si es una partida nueva, lanzará el jugador 1.
		if(!partida)
		{
				partida=true;bandera=false;
		}
		//console.log(bandera)
	document.getElementById("partidas").innerHTML="Partidas ganadas:<br> "+arregloJugadores[0].nombre+": "+arregloJugadores[0].marcador+"<br> "+arregloJugadores[1].nombre+": "+arregloJugadores[1].marcador;
	if(bandera)
	{
		document.getElementById("mensaje").innerHTML=" Turno para el jugador " + Player2; 
		validarResultado(1);
	}
	else{
		document.getElementById("mensaje").innerHTML=" Turno para el jugador " + Player1; 
		validarResultado(0);
	}
bandera=!bandera;

	}

	//Función Guardar Players
	function guardar_players(){
		Player1=document.getElementById("player1").value;
		Player2=document.getElementById("player2").value;
		document.getElementById("Jugadores").className="oculto";
		document.getElementById("PanelInstruciones").className="oculto";
		
		document.getElementById("Panel2").className="mostrar";
		document.getElementById("mensaje").innerHTML=" Inicia el jugador " + Player1; 
		//alert(Player2);

	var jugador1 = {

		nombre : document.getElementById("player1").value,
		resultados : 0,
		marcador : 0,
		tirada : 0,	
		puntos : 0,
		marcador:0,
		primer:0
	}

	var jugador2 = {

		nombre : document.getElementById("player2").value,
		resultados : 0,
		marcador : 0,
		tirada : 0,
		puntos : 0,
		marcador:0,
		primer:0

	}

	arregloJugadores[0]= jugador1
	arregloJugadores[1]= jugador2;

	//alert (arregloJugadores [1].nombre)

	}
	
/*Tirar los dados*/
function rollDice() {
  const dice = [...document.querySelectorAll(".die-list")];
  dice.forEach(die => {
    toggleClasses(die);
    die.dataset.roll = getRandomNumber(1, 6);
    TiradaDados= TiradaDados + parseInt(die.dataset.roll);
  });
}

function toggleClasses(die) {
  die.classList.toggle("odd-roll");
  die.classList.toggle("even-roll");
}

function getRandomNumber(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

