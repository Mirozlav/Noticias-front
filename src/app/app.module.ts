import { NgModule ,CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';


import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule,ReactiveFormsModule} from '@angular/forms';

import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatTableModule} from '@angular/material/table';

import { NoticiasListComponent } from './noticias-list/noticias-list.component';
import { NoticiasListFavoritosComponent } from './noticias-list-favoritos/noticias-list-favoritos.component';
import { RouterModule } from '@angular/router';
import { NoticiasPrincipalComponent } from './noticias-principal/noticias-principal.component';
import { Funciones } from './shared/funciones/funciones';
import { ModalEditarComponent } from './noticias-list-favoritos/modal-editar/modal-editar.component';
import { ModalModule } from 'ngx-bootstrap/modal';

@NgModule({
  declarations: [
    AppComponent,
    NoticiasListComponent,
    NoticiasListFavoritosComponent,
    NoticiasPrincipalComponent,
    ModalEditarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgbModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    HttpClientModule,
    MatPaginatorModule,
    MatTableModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: NoticiasPrincipalComponent },
      { path: 'noticias', component: NoticiasListComponent },
      { path: 'favoritos', component: NoticiasListFavoritosComponent },
    ]),
    ModalModule.forRoot()
  ],
  providers: [Funciones],
  bootstrap: [AppComponent],
  exports: [
    ReactiveFormsModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ],
})
export class AppModule { }
