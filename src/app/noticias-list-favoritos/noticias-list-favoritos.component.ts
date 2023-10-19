import { Component, OnInit } from '@angular/core';
import { NoticiaService } from '../services/noticia.service';
import { Noticias,NoticiasResponse } from '../interfaces';
import { Funciones } from '../shared/funciones/funciones';
import { BsModalService,BsModalRef } from 'ngx-bootstrap/modal';
import { ModalEditarComponent } from './modal-editar/modal-editar.component';

@Component({
  selector: 'app-noticias-list-favoritos',
  templateUrl: './noticias-list-favoritos.component.html',
  styleUrls: ['./noticias-list-favoritos.component.css']
})
export class NoticiasListFavoritosComponent implements OnInit {

  
  config:any;
  listarFavorito:Noticias[]=[];
  pagina:number=0;
  paginaIndex:number=0;
  tamanio =10;
  orden:string ='title';
  asc:boolean =true;
  
  esPrimero = false;
  esUltimo = false;

  paginas:number[]=[]
  texto:string='';

  

  constructor (
    public bsModalRef: BsModalRef,
    private modalService: BsModalService,
    private noticiaService: NoticiaService,
    public funciones:Funciones,    
  ){   
  }
  ngOnInit(): void {
    this.listarFavoritos();    
  }

  listarFavoritos(){
    this.noticiaService.listarFavoritos(this.pagina,this.tamanio,this.orden,this.asc).subscribe(
      (data: any) => {         
        if (data != null) { 
          this.paginas=new Array(data['totalPages']);  
          this.esPrimero=data.first;
          this.esUltimo=data.last;    
          this.listarFavorito = data.content;    
        } else {
          this.listarFavorito = [];
        }
      }
    );
  }

  eliminarFavorito(id:any){
    this.noticiaService.eliminarFavorito(id).subscribe(
      (data: any) => { 
        if(data!=null)    {
          this.listarFavoritos();  
          console.log(this.funciones.mostrarMensaje("insertar",""));
        } else{
          console.error(this.funciones.mostrarMensaje("error",""));
        }
     
      }
    );
  }

  modificarFavorito(noticia:Noticias){
    this.noticiaService.modificarFavorito(noticia.id,noticia).subscribe(
      (data: any) => {       
        if(data!=null)    {
          this.listarFavoritos();  
          console.log(this.funciones.mostrarMensaje("insertar",""));
        } else{
          console.error(this.funciones.mostrarMensaje("error",""));
        }
     
      }
    );
  }

  openModalEditar(item:Noticias) {
    const initialState = {
      item: item,
    };
    this.config = {
      ignoreBackdropClick: true,
      keyboard: false,
      class: "modal-lg",
      initialState: initialState
    };
    this.bsModalRef = this.modalService.show(ModalEditarComponent, this.config);
    this.bsModalRef.content.retornoValores.subscribe(
      (data:any) => {
        this.listarFavoritos();
      }
    )
  }  

  buscarfavoritos(texto:string){     
    this.texto=texto;  
    this.noticiaService.buscarFavorito(texto,this.pagina,this.tamanio,this.orden,this.asc).subscribe(
      (data: any) => { 
        if(data!=null)    {
          this.paginas=new Array(data['totalPages']);  
          this.esPrimero=data.first;
          this.esUltimo=data.last;   
          this.listarFavorito = data.content;      
          console.log(this.funciones.mostrarMensaje("insertar",""));
        } else{
          console.error(this.funciones.mostrarMensaje("error",""));
        }             
      }
    );
  }
  listaObtenidaFavoritos(){
    this.paginas= this.paginas;  
          this.esPrimero=this.esPrimero;
          this.esUltimo=this.esUltimo;    
          this.listarFavorito = this.listarFavorito ;  
  }

  ordenarNoticia(){
    this.asc=!this.asc;
    this.buscarfavoritos(this.texto);
  }

  paginaAnterior(){
    if(!this.esPrimero){
      this.pagina--;
      this.buscarfavoritos(this.texto); 
    }   
  }
  paginaSiguiente(){
    if(!this.esUltimo){
      this.pagina++;
      this.buscarfavoritos(this.texto);
    }
    
  }

  paginaSeleccionada(pagina:number){
    this.pagina=pagina;
    this.buscarfavoritos(this.texto);
  }

}
