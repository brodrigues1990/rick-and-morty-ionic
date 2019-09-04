import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalhePersonagemPage } from './detalhe-personagem.page';

describe('DetalhePersonagemPage', () => {
  let component: DetalhePersonagemPage;
  let fixture: ComponentFixture<DetalhePersonagemPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalhePersonagemPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalhePersonagemPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
