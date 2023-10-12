import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InicioTecnicoComponent } from './inicio-tecnico.component';

describe('InicioTecnicoComponent', () => {
  let component: InicioTecnicoComponent;
  let fixture: ComponentFixture<InicioTecnicoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InicioTecnicoComponent]
    });
    fixture = TestBed.createComponent(InicioTecnicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
