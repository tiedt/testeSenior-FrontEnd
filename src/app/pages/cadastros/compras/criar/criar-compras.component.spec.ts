import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarComprasComponent } from './criar-compras.component';

describe('CriarComprasComponent', () => {
  let component: CriarComprasComponent;
  let fixture: ComponentFixture<CriarComprasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CriarComprasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CriarComprasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
