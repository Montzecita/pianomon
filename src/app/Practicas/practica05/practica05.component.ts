import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-practica05',
  templateUrl: './practica05.component.html',
  styleUrls: ['./practica05.component.css']
})
export class Practica05Component implements OnInit {
  nombre='Monse';
  textPlaceholder='Escriba algo aqui';

  texto="";
  constructor(){
    setInterval(()=> this.nombre='Karla',3000);
    
  }
  getSuma(numero1: number, numero2: number){
    return numero1+numero2;
  }

  ngOnInit(): void {
  }

}
