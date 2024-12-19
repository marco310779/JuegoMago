import { Personaje } from './Personaje';  

export class Mago extends Personaje {  
  constructor(nombre: string, puntosDeVida: number) {  
    super(nombre, puntosDeVida);  
  }  

  atacar(): string {  
    return `${this.nombre} lanza un hechizo de fuego.`;  
  }  

  evolucionar(): MagoLegendario {  
    console.log(`${this.nombre} ha evolucionado a Mago Legendario!`);  
    return new MagoLegendario(this.nombre, this.puntosDeVida + 30);  
  }  
}  

export class MagoLegendario extends Mago {  
  constructor(nombre: string, puntosDeVida: number) {  
    super(nombre, puntosDeVida);  
    this.nivel = 10;  
  }  

  atacar(): string {  
    return `${this.nombre} lanza un hechizo devastador!`;  
  }  
}