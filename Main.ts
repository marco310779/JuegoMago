import { Luchador, LuchadorLegendario } from '../juego Mago/Luchador';  
import { Arquero, ArqueroLegendario } from '../juego Mago/Arquero';  
import { Mago, MagoLegendario } from '../juego Mago/Mago';  

function mostrarReglas(): void {  
  console.log("¡Bienvenido al juego de personajes!");  
  console.log("Reglas del juego:");  
  console.log("1. Crea un personaje eligiendo entre Luchador, Arquero o Mago.");  
  console.log("2. Usa el ataque para interactuar con el juego.");  
  console.log("3. Evoluciona tu personaje cuando sea posible para hacerlo más poderoso.");  
  console.log("4. El juego termina cuando decidas salir.");  
}  

function crearPersonaje(tipo: string, nombre: string): Luchador | Arquero | Mago {  
  switch (tipo.toLowerCase()) {  
    case 'luchador':  
      return new Luchador(nombre, 100);  
    case 'arquero':  
      return new Arquero(nombre, 80);  
    case 'mago':  
      return new Mago(nombre, 70);  
    default:  
      throw new Error("Tipo de personaje no válido.");  
  }  
}  

function main() {  
  mostrarReglas();  
  
  const nombre = prompt("Ingresa el nombre de tu personaje: ") || "Heroe"; // Cambia esto según tu entorno.  
  const tipo = prompt("Elige tu tipo de personaje (Luchador, Arquero, Mago): ") || "Luchador";  

  let personaje = crearPersonaje(tipo, nombre);  
  console.log(personaje.mostrarDatos());  
  
  let opcion: string;  
  
  do {  
    opcion = prompt("¿Quieres atacar (a), evolucionar (e) o salir (s)? ").toLowerCase();  
    
    switch (opcion) {  
      case 'a':  
        console.log(personaje.atacar());  
        break;  
      case 'e':  
        personaje = personaje.evolucionar();  
        console.log(personaje.mostrarDatos());  
        break;  
      case 's':  
        console.log("Gracias por jugar!");  
        break;  
      default:  
        console.log("Opción no válida.");  
    }  
  } while (opcion !== 's');  
}  

main();