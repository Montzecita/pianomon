import { NgModule } from '@angular/core';
import{RouterModule,Routes} from '@angular/router';
import { CommonModule } from '@angular/common';
import { Practica01Component } from './Practicas/practica01/practica01.component';
import { Practica02Component } from './Practicas/practica02/practica02.component';
import { Practica03Component } from './Practicas/practica03/practica03.component';
import { Practica04Component } from './Practicas/practica04/practica04.component';
import { Practica05Component } from './Practicas/practica05/practica05.component';
import { Practica06Component } from './Practicas/practica06/practica06.component';
import { Practica07Component } from './Practicas/practica07/practica07.component';
import { Practica08Component } from './Practicas/practica08/practica08.component';
import { Practica09Component } from './Practicas/practica09/practica09.component';
import { Practica10Component } from './Practicas/practica10/practica10.component';
import { Practica11Component } from './Practicas/practica11/practica11.component';
import { Practica12PianoComponent } from './Practicas/practica12-piano/practica12-piano.component';

const routes:Routes=[
{path: 'Practica01',component:Practica01Component},
{path: 'Practica02',component:Practica02Component},
{path: 'Practica03',component:Practica03Component},
{path: 'Practica04',component:Practica04Component},
{path: 'Practica05',component:Practica05Component},
{path: 'Practica06',component:Practica06Component},
{path: 'Practica07',component:Practica07Component},
{path: 'Practica08',component:Practica08Component},
{path: 'Practica09',component:Practica09Component},
{path: 'Practica10',component:Practica10Component},
{path: 'Practica11',component:Practica11Component},
{path: 'Practica12',component:Practica12PianoComponent},
]
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
