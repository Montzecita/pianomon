import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-practica03',
  templateUrl: './practica03.component.html',
  styleUrls: ['./practica03.component.css']
})
export class Practica03Component implements OnInit {
  nombre='Monse';
  textPlaceholder='Escriba algo aqui';
  deshabilitado=true;
  texto="";
  constructor(){
    setInterval(()=> this.nombre='Karla',3000);
    setInterval(()=> this.deshabilitado=false,5000);
  }
  getSuma(numero1: number, numero2: number){
    return numero1+numero2;
  }

  ngOnInit(): void {
  }

}
