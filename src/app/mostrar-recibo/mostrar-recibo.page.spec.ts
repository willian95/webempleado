import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarReciboPage } from './mostrar-recibo.page';

describe('MostrarReciboPage', () => {
  let component: MostrarReciboPage;
  let fixture: ComponentFixture<MostrarReciboPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MostrarReciboPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MostrarReciboPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
