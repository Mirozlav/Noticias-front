import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalEditarComponent } from './modal-editar.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('ModalEditarComponent', () => {
  let component: ModalEditarComponent;
  let fixture: ComponentFixture<ModalEditarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalEditarComponent],
      imports: [HttpClientTestingModule,ReactiveFormsModule,FormsModule],
      schemas: [ NO_ERRORS_SCHEMA ]
    });
    fixture = TestBed.createComponent(ModalEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('debe de existir ModalEditarComponent', () => {
    const fixture = TestBed.createComponent(ModalEditarComponent);
    const app = fixture.componentInstance
    expect(app).toBeTruthy();
  });
});
