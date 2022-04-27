import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearRecibosComponent } from './crear-recibos.component';

describe('CrearRecibosComponent', () => {
  let component: CrearRecibosComponent;
  let fixture: ComponentFixture<CrearRecibosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearRecibosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearRecibosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
