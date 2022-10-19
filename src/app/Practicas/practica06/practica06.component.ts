import { Component, } from '@angular/core';

@Component({
  selector: 'app-practica06',
  templateUrl: './practica06.component.html',
  styleUrls: ['./practica06.component.css']
})
export class Practica06Component  {
texto='Esto es la practica 6 sobre el event binding';
cambiarTexto():void{
  this.texto="Que en español es ligar eventos."
}
  constructor() { }



}
