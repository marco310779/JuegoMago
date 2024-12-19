export class Personaje {  
    nombre: string;  
    nivel: number;  
    puntosDeVida: number;  
  
    constructor(nombre: string, puntosDeVida: number) {  
      this.nombre = nombre;  
      this.nivel = 1;  
      this.puntosDeVida = puntosDeVida;  
    }  
  
    atacar(): string {  
      return `${this.nombre} está atacando.`;  
    }  
  
    defender(): string {  
      return `${this.nombre} está defendiendo.`;  
    }  
  
    mostrarDatos(): string {  
      return `Nombre: ${this.nombre}, Nivel: ${this.nivel}, Puntos de Vida: ${this.puntosDeVida}`;  
    }  
  
    evolucionar(): Personaje {  
      console.log(`${this.nombre} no tiene evolución.`);  
      return this;  
    }  
  }