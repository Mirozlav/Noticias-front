
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { NoticiaService } from 'src/app/services/noticia.service';

@Component({
  selector: 'app-modal-editar',
  templateUrl: './modal-editar.component.html',
  styleUrls: ['./modal-editar.component.css']
})
export class ModalEditarComponent implements OnInit {

  @Output() retornoValores = new EventEmitter();

  bMostrar: boolean = false;
  noticiaEditarForm: FormGroup;
  item:any;

  constructor(
    public bsModalRef: BsModalRef,
    private fb: FormBuilder,
    private noticiaService: NoticiaService
  ) {
    this.noticiaEditarForm = this.fb.group({
      titulo: "",
      descripcion: "",
      resumen: "",     
      fecha_modificacion: new Date(),
    });

  }
  ngOnInit() {
    this.noticiaEditarForm = this.fb.group({
      titulo: this.item?.title,
      descripcion: this.item?.summary,
      resumen: this.item?.news_site,
      fecha_modificacion: new Date(),
    });
  }
  actualizar() {
    this.item.title = this.noticiaEditarForm.value.titulo;
    this.item.summary = this.noticiaEditarForm.value.descripcion;
    this.item.news_site = this.noticiaEditarForm.value.resumen;
    this.noticiaService.modificarFavorito(this.item.id, this.item).subscribe(
      (data: any) => {
        this.retornoValores.emit(true);
        this.closeModal();
      }
    );

  }
  closeModal() {
    this.bsModalRef.hide();
  }

}
