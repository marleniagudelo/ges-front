import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearOrdenComponent } from './crear-orden.component';

describe('CrearOrdenComponent', () => {
  let component: CrearOrdenComponent;
  let fixture: ComponentFixture<CrearOrdenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CrearOrdenComponent]
    });
    fixture = TestBed.createComponent(CrearOrdenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
