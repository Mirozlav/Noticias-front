import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { NoticiasListComponent } from './noticias-list.component';
import { Funciones } from '../shared/funciones/funciones';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('NoticiasListComponent', () => {
  let component: NoticiasListComponent;
  let fixture: ComponentFixture<NoticiasListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NoticiasListComponent],
      imports: [HttpClientTestingModule],
      providers:[Funciones],
      schemas: [ NO_ERRORS_SCHEMA]
    });
    fixture = TestBed.createComponent(NoticiasListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('debe de existir NoticiasListComponent', () => {
    const fixture = TestBed.createComponent(NoticiasListComponent);
    const app = fixture.componentInstance
    expect(app).toBeTruthy();
  });
});
