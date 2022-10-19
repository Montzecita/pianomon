import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-practica11',
  templateUrl: './practica11.component.html',
  styleUrls: ['./practica11.component.css']
})
export class Practica11Component implements OnInit {

  listEstudiantes: any[]=[
    {nombre:'Karla Muñoz', estado:'Aprobada'},
    {nombre:'Monse Lopez', estado:'No Aprobada'},
    {nombre:'Julio Ramirez', estado:'No Aprobado'},
    {nombre:'Montzerrath Guerrero', estado:'Aspirante'},
    {nombre:'Emmanuel Rivera', estado:'Aprobado'},
    {nombre:'Esteban Perez', estado:'Aprobado'},
    {nombre:'Anahi Martinez', estado:'No Aprobada'},
    {nombre:'Carlos Ortega', estado:'No Aprobado'},
    {nombre:'Emir Melo', estado:'Aprobado'},
    {nombre:'Enid Lopez', estado:'Aprobada'},
    {nombre:'Carlos Hernandez', estado:'Aspirante'},
    {nombre:'Daniela Gomez', estado:'Baja'},
    {nombre:'Jesus Perez', estado:'Graduado'}
    ]
  mostrar=false;
  mostrarEstudiantes():void{
    this.mostrar=!this.mostrar;
  }
    constructor() { }
  
    
    
  
    ngOnInit(): void {
    }
  
  }


