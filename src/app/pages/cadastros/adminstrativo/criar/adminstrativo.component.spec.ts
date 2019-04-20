import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminstrativoComponent } from './adminstrativo.component';

describe('AdminstrativoComponent', () => {
  let component: AdminstrativoComponent;
  let fixture: ComponentFixture<AdminstrativoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminstrativoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminstrativoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
