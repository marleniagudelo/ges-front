import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarOrdenComponent } from './editar-orden.component';

describe('EditarOrdenComponent', () => {
  let component: EditarOrdenComponent;
  let fixture: ComponentFixture<EditarOrdenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditarOrdenComponent]
    });
    fixture = TestBed.createComponent(EditarOrdenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
