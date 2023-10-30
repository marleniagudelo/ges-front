import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaOrdenServicioComponent } from './tabla-orden-servicio.component';

describe('TablaOrdenServicioComponent', () => {
  let component: TablaOrdenServicioComponent;
  let fixture: ComponentFixture<TablaOrdenServicioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TablaOrdenServicioComponent]
    });
    fixture = TestBed.createComponent(TablaOrdenServicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
