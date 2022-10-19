import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-practica08',
  templateUrl: './practica08.component.html',
  styleUrls: ['./practica08.component.css']
})
export class Practica08Component  {

  listEstudiantes: any[]=[
  {nombre:'Karla Muñoz', estado:'Aprobada'},
  {nombre:'Monse Lopez', estado:'Aprobada'},
  {nombre:'Julio Ramirez', estado:'Aprobada'},
  {nombre:'Montzerrath Guerrero', estado:'Aprobada'},
  {nombre:'Emmanuel Rivera', estado:'No aprovado'},
  {nombre:'Esteban Perez', estado:'Aprobado'},
  {nombre:'Anahi Martinez', estado:'Aprobada'},
  {nombre:'Carlos Ortega', estado:'No Aprobado'},
  {nombre:'Emir Melo', estado:'Aprobado'},
  {nombre:'Enid Lopez', estado:'Aprobada'}
  ]
mostrar=false;
mostrarEstudiantes():void{
  this.mostrar=!this.mostrar;
}
  constructor() { }

  
  
}
