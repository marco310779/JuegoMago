import { Personaje } from '../juego Mago/Personaje';  

export class Arquero extends Personaje {  
  constructor(nombre: string, puntosDeVida: number) {  
    super(nombre, puntosDeVida);  
  }  

  atacar(): string {  
    return `${this.nombre} dispara una flecha.`;  
  }  

  evolucionar(): ArqueroLegendario {  
    console.log(`${this.nombre} ha evolucionado a Arquero Legendario!`);  
    return new ArqueroLegendario(this.nombre, this.puntosDeVida + 50);  
  }  
}  

export class ArqueroLegendario extends Arquero {  
  constructor(nombre: string, puntosDeVida: number) {  
    super(nombre, puntosDeVida);  
    this.nivel = 10;  
  }  

  atacar(): string {  
    return `${this.nombre} lanza un tiro certero!`;  
  }  
}