import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NoticiasResponse,Noticias } from '../interfaces';
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NoticiaService {

  constructor(private http: HttpClient) { }

  listarNoticias(): Observable<NoticiasResponse[]> {
    const href =environment.host;
    return this.http.get<NoticiasResponse[]>(href);
    
  }

  listarFavoritos(page:number,size:number,order:string,asc:boolean): Observable<any> {
    const href =environment.hostf;
    return this.http.get(href+'?page='+page+'&size='+size+'&order='+order+'&asc='+asc);
  }

  agregarFavorito(addNoticia:Noticias) {
    const href =environment.hostf;
    return this.http.post(href,addNoticia);
  }

  eliminarFavorito(id:number) {
    const href =environment.hostf;
    return this.http.delete(href+'/'+id);
  }

  modificarFavorito(id:any,addNoticia:Noticias) {
    const href =environment.hostf;
    return this.http.put(href+'/'+id,addNoticia);
  }

  buscarFavorito(pTitulo:string,page:number,size:number,order:string,asc:boolean) {
    if(pTitulo!=='')
       pTitulo='/'+pTitulo;
    const href =environment.hostf;
    return this.http.get(href+pTitulo+'?page='+page+'&size='+size+'&order='+order+'&asc='+asc);
  }

  listarNoticiasPaginacion(pagina:number): Observable<Noticias[]> {
    const href =environment.host+'/?limit=10&offset=';
    return this.http.get<NoticiasResponse>(href+pagina).pipe(
      map(resp => resp.results)
    );
  }

  ordenarNoticia(pagina:number,texto:string): Observable<Noticias[]> {
    const href =environment.host+'/?limit=10&offset=';
    return this.http.get<NoticiasResponse>(href+pagina+'&ordering='+texto).pipe(
      map(resp => resp.results)
    );
  }
  
  buscarNoticia(texto:string): Observable<NoticiasResponse[]> {
    const href =environment.host+'/?search=';
    return this.http.get<NoticiasResponse[]>(href+texto)
  }
}
