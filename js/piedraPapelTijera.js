/*
*/
function jugarPiedraPapelTijera() {
    const opciones = ["piedra", "papel", "tijera"];
    const opcionUsuario = prompt("Elige piedra, papel o tijera").toLowerCase();
  
    if (!opciones.includes(opcionUsuario)) {
      alert("Opción inválida. Por favor, elige piedra, papel o tijera.");
      return;
    }
  
    const opcionComputadora = opciones[Math.floor(Math.random() * opciones.length)];
  
    alert(`Computadora eligió ${opcionComputadora}.`);
  
    if (opcionUsuario === opcionComputadora) {
      alert("Empate!");
    } else if (
      (opcionUsuario === "piedra" && opcionComputadora === "tijera") ||
      (opcionUsuario === "papel" && opcionComputadora === "piedra") ||
      (opcionUsuario === "tijera" && opcionComputadora === "papel")
    ) {
      alert("Ganaste!");
    } else {
      alert("Perdiste!");
    }
  
    const jugarDeNuevo = confirm("¿Quieres jugar de nuevo?");
  
    if (jugarDeNuevo) {
      jugarPiedraPapelTijera();
    } else {
      alert("Gracias por jugar!");
    }
  }
  
  jugarPiedraPapelTijera();
  