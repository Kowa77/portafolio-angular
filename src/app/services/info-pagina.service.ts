import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InfoPagina } from '../interfaces/info-pagina.service';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info: InfoPagina = {}; //objeto info de tipo Infografia(Interface)
  cargada = false;       ////Bandera que informa: "no cargo la respuesta"
  equipo: any [] = [];   //Aqui se almacenara la resp desde este archivo ("data-pagina.json")

  constructor( private http: HttpClient ) {     
    this.cargarInfo();
    this.cargarEquipo();
  }

  private cargarInfo(){
    this.http.get('assets/data/data-pagina.json')//Leer el archivo JSON almacenado en "assets/data"
      .subscribe( (resp: InfoPagina) => {        //InfoPagina es el modelo de la interface
      this.cargada = true;                       //Bandera que informa "ya cargo la respuesta"
      this.info = resp;                          //Se almacena en info todo la consulta al archivo JSON 
    });
  }

  private cargarEquipo(){
    this.http.get('https://angular-html-8b5b3-default-rtdb.firebaseio.com/equipo.json') //Leer el archivo JSON almacenado en "FIREBASE/EQUIPO"
      .subscribe( ( resp: any ) => {  
      this.equipo = resp;                                                               //Se almacena en "equipo" todo la consulta de EQUIPO a FIREBASE
    });
  }


}
