import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InfoPagina } from '../interfaces/info-pagina.service';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info: InfoPagina = {};
  cargada = false;

  constructor( private http: HttpClient ) { 

    console.log('Servicio de infoPagina Listo');

    //Leer el archivo JSON
    this.http.get('assets/data/data-pagina.json')
      .subscribe( (resp: InfoPagina) => {  //InfoPagina es la interface
        
        this.cargada = true;
        this.info = resp;     
        
        console.log( resp );
        //console.log( resp['email'] );
        //console.log( resp.twitter );

        
      });
  }
}
