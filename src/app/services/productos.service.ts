import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from '../interfaces/producto.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  cargando = true;

  productos: Producto[] = [];
 

  constructor( private http: HttpClient ) { 
    
    this.cargarProductos();
  
  }

  private cargarProductos(){
    this.http.get('https://angular-html-8b5b3-default-rtdb.firebaseio.com/productos_idx.json')
      //InfoProductos esta comprobando los tipos desde la interface
        .subscribe( (resp: any) => {  
      
          this.productos = resp;  
          this.cargando = false;
          console.log(this.productos);

          // setTimeout(() => {
          //   this.cargando = false;
          // }, 1000);
    });
  }


}