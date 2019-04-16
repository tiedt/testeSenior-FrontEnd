import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComprasPainelComponent } from './compras-painel.component';

describe('ComprasPainelComponent', () => {
  let component: ComprasPainelComponent;
  let fixture: ComponentFixture<ComprasPainelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComprasPainelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComprasPainelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
