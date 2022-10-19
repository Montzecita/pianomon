import { Component } from '@angular/core';

@Component({
  selector: 'app-practica07',
  templateUrl: './practica07.component.html',
  styleUrls: ['./practica07.component.css']
})
export class Practica07Component {
lista: any[]=[
  {nombre:'Karla Muñoz', estado:'Aprobada'},
  {nombre:'Monse Lopez', estado:'Aprobada'},
  {nombre:'Julio Ramirez', estado:'Aprobado'},
  {nombre:'Montzerrath Guerrero', estado:'Aprobada'},
  {nombre:'Emmanuel Rivera', estado:'No aprobado'},
  {nombre:'Esteban Perez', estado:'Aprobado'},
  {nombre:'Anahi Martinez', estado:'Aprobada'},
  {nombre:'Carlos Ortega', estado:'Aprobado'},
  {nombre:'Emir Melo', estado:'Aprobado'},
  {nombre:'Enid Lopez', estado:'Aprobada'}
]
  constructor() { }
ngOnInit():void{}
  
}
