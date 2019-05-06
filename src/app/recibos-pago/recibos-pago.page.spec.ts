import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecibosPagoPage } from './recibos-pago.page';

describe('RecibosPagoPage', () => {
  let component: RecibosPagoPage;
  let fixture: ComponentFixture<RecibosPagoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecibosPagoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecibosPagoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
