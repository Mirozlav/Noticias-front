import { Component } from '@angular/core';

@Component({
  selector: 'app-noticias-principal',
  templateUrl: './noticias-principal.component.html',
  styleUrls: ['./noticias-principal.component.css']
})
export class NoticiasPrincipalComponent {

  menu: string[] = ['Noticias', 'Favoritos'];
  opcionActiva:any;
  
  constructor () {}
  ngOnInit () {}

  setActive(op:any){
    this.opcionActiva=op;
  }
}
