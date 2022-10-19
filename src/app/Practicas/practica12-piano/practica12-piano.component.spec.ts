import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Practica12PianoComponent } from './practica12-piano.component';

describe('Practica12PianoComponent', () => {
  let component: Practica12PianoComponent;
  let fixture: ComponentFixture<Practica12PianoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Practica12PianoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Practica12PianoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
