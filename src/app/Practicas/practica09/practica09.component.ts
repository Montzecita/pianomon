import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-practica09',
  templateUrl: './practica09.component.html',
  styleUrls: ['./practica09.component.css']
})
export class Practica09Component implements OnInit {

  listEstudiantes: any[]=[
  {nombre:'Karla Muñoz', estado:'Aprobada'},
  {nombre:'Monse Lopez', estado:'No Aprobada'},
  {nombre:'Julio Ramirez', estado:'No Aprobado'},
  {nombre:'Montzerrath Guerrero', estado:'Aprobada'},
  {nombre:'Emmanuel Rivera', estado:'Aprobado'},
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

  
  

  ngOnInit(): void {
  }

}
