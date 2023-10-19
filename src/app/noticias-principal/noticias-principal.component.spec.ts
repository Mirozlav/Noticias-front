import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import {HttpClientModule} from '@angular/common/http';

import { NoticiasPrincipalComponent } from './noticias-principal.component';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

describe('NoticiasPrincipalComponent', () => {
  let component: NoticiasPrincipalComponent;
  let fixture: ComponentFixture<NoticiasPrincipalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NoticiasPrincipalComponent],
      imports: [HttpClientTestingModule],
      schemas: [ NO_ERRORS_SCHEMA ]
    });
    fixture = TestBed.createComponent(NoticiasPrincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
