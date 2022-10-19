import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NAVBARComponent } from './navbar/navbar.component';
import {BsDropdownModule} from 'ngx-bootstrap/dropdown';
import { Practica01Component } from './Practicas/practica01/practica01.component';
import { Practica02Component } from './Practicas/practica02/practica02.component';
import { Practica03Component } from './Practicas/practica03/practica03.component';
import { Practica04Component } from './Practicas/practica04/practica04.component';
import { Practica05Component } from './Practicas/practica05/practica05.component';
import { AppRoutingModule } from './app-routing.module';
import { Practica06Component } from './Practicas/practica06/practica06.component';
import { Practica07Component } from './Practicas/practica07/practica07.component';
import { Practica08Component } from './Practicas/practica08/practica08.component';
import { Practica09Component } from './Practicas/practica09/practica09.component';
import { Practica10Component } from './Practicas/practica10/practica10.component';
import { Practica11Component } from './Practicas/practica11/practica11.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { Practica12PianoComponent } from './Practicas/practica12-piano/practica12-piano.component';
@NgModule({
  declarations: [
    AppComponent,
    NAVBARComponent,
    Practica01Component,
    Practica02Component,
    Practica03Component,
    Practica04Component,
    Practica05Component,
    Practica06Component,
    Practica07Component,
    
    Practica08Component,
         Practica09Component,
         Practica10Component,
         Practica11Component,
         FooterComponent,
         SidebarComponent,
         Practica12PianoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BsDropdownModule.forRoot(),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent, NAVBARComponent]
})
export class AppModule { }
