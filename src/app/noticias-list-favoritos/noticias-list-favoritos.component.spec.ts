import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { NoticiasListFavoritosComponent } from './noticias-list-favoritos.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { Funciones } from '../shared/funciones/funciones';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';


describe('NoticiasListFavoritosComponent', () => {
    let component: NoticiasListFavoritosComponent;
    let fixture: ComponentFixture<NoticiasListFavoritosComponent>;
  
    beforeEach(() => {
      TestBed.configureTestingModule({
        declarations: [NoticiasListFavoritosComponent],
        imports: [HttpClientTestingModule, ModalModule.forRoot() ],
        providers:[Funciones],
        schemas: [ NO_ERRORS_SCHEMA,CUSTOM_ELEMENTS_SCHEMA ]
      });
      fixture = TestBed.createComponent(NoticiasListFavoritosComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });
  
    it('debe de existir NoticiasListFavoritosComponent', () => {
        const fixture = TestBed.createComponent(NoticiasListFavoritosComponent);
        const app = fixture.componentInstance
        expect(app).toBeTruthy();
      });
  });
  
