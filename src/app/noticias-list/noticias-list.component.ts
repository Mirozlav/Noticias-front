import { Component, OnInit } from '@angular/core';
import { NoticiaService } from '../services/noticia.service';
import { Noticias,NoticiasResponse } from '../interfaces';
import { MatTableDataSource } from '@angular/material/table';
import { Funciones } from '../shared/funciones/funciones';



@Component({
  selector: 'app-noticias-list',
  templateUrl: './noticias-list.component.html',
  styleUrls: ['./noticias-list.component.css']
})
export class NoticiasListComponent implements OnInit {

  listaNoticia:Noticias[]=[];
  pagina:number=0;
  paginaIndex:number=0;
  tamanio =0;
  orden ='id';
  asc =true;
  esPrimero = false;
  esUltimo = false;
  paginas:number[]=[]
  texto:string='';


  constructor (
    private noticiaService: NoticiaService,
    public funciones: Funciones
  ){   
  }
  ngOnInit(): void {
    this.listarNoticia();    
  }

  listarNoticia(){
    this.noticiaService.listarNoticias().subscribe(
      (data: any) => {  
        if (data != null) { 
          this.tamanio= Math.round(data.count/10);      
          this.paginas=new Array(this.tamanio).slice(1817);    
          this.listaNoticia = data.results;         
        } else {
          this.listaNoticia = [];
        }
      }
    );
  }

  listarNoticiaPaginacion(){    
    this.pagina=this.paginaIndex
    this.noticiaService.listarNoticiasPaginacion(this.pagina).subscribe(
      data=> {     
        if (data != null) {
          this.listaNoticia = data;         
        } else {
          this.listaNoticia = [];
        }
      }
    );
  }

  buscarNoticia(texto:string){    
    this.noticiaService.buscarNoticia(texto).subscribe(
      (data:any)=> {            
        if (data != null) { 
          this.tamanio= Math.round(data.count/10);      
          this.paginas=new Array(this.tamanio).slice(1817);       
          this.listaNoticia = data.results;         
        } else {
          this.listaNoticia = [];
        }
      }
    );
  }

  ordenarNoticia(){
    this.asc=!this.asc;
    if(this.asc){
      this.texto="published_at"
    }else{
      this.texto="-published_at"
    }
    this.noticiaService.ordenarNoticia(this.pagina,this.texto).subscribe(
      data=> {     
        if (data != null) {
          this.listaNoticia = data;         
        } else {
          this.listaNoticia = [];
        }
      }
    );
  }

  paginaAnterior(){
    if(this.pagina>0 && this.pagina<this.tamanio )    
      this.pagina-=10;
      this.paginaIndex-=1;
      this.listarNoticiaPaginacion();
    if(this.pagina==0)this.esPrimero=true;
  }
  paginaSiguiente(){
    if(this.pagina>0&&this.pagina<this.tamanio)
      this.pagina+=10;
      this.paginaIndex+=1;
      this.listarNoticiaPaginacion();
  }
  paginaSeleccionada(pagina:number){
    this.pagina=pagina*10;
    this.paginaIndex=pagina;
    this.listarNoticiaPaginacion();
  }

  agregarFavorito(addNoticia:Noticias){
    addNoticia.featured=true;
     this.noticiaService.agregarFavorito(addNoticia).subscribe(
      data=> {
        if(data!=null)    {
          console.log(this.funciones.mostrarMensaje("insertar",""));
        } else{
          console.error(this.funciones.mostrarMensaje("error",""));
        }        
      }
    );
  }
}
