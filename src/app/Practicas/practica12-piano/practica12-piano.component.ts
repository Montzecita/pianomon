import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-practica12-piano',
  templateUrl: './practica12-piano.component.html',
  styleUrls: ['./practica12-piano.component.css']
})
export class Practica12PianoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  ejecutarSonido(numero: number):void
  {
    const audio= new Audio();
    audio.src="../../../assets/sonidos/note"+numero+".wav";
    audio.load();
    audio.play();
  }

}
