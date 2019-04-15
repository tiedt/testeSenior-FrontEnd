import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarComprasComponent } from './consultar-compras.component';

describe('ConsultarComprasComponent', () => {
  let component: ConsultarComprasComponent;
  let fixture: ComponentFixture<ConsultarComprasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultarComprasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultarComprasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
