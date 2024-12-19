import { Personaje } from './Personaje';  

export class Luchador extends Personaje {  
  constructor(nombre: string, puntosDeVida: number) {  
    super(nombre, puntosDeVida);  
  }  

  atacar(): string {  
    return `${this.nombre} lanza un poderoso golpe.`;  
  }  

  evolucionar(): LuchadorLegendario {  
    console.log(`${this.nombre} ha evolucionado a Luchador Legendario!`);  
    return new LuchadorLegendario(this.nombre, this.puntosDeVida + 40);  
  }  
}  

export class LuchadorLegendario extends Luchador {  
  constructor(nombre: string, puntosDeVida: number) {  
    super(nombre, puntosDeVida);  
    this.nivel = 10;  
  }  

  atacar(): string {  
    return `${this.nombre} ejecuta un ataque devastador!`;  
  }  
}