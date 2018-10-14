import { Component, OnInit, HostListener, ElementRef } from '@angular/core';
import { RestService } from '../rest.service';
import { ImagenPin } from '../models/imagen-pin';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})


export class DetalleComponent implements OnInit {

  contenedor:any = [];
  imagenes:ImagenPin[] = [];

  state:boolean = true;
  Urls : string[] = []; 

  constructor(public rest:RestService, public el: ElementRef) {
    console.log("Empesemos.");
  }

  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    const componentPosition = this.el.nativeElement.offsetTop
    const scrollPosition = window.pageYOffset
    let scrollDiferencia = document.body.scrollHeight - scrollPosition;

    if (scrollDiferencia <= 800 && this.state) {
      this.state = false;
      console.log("A cargar...!!!" + this.rest.pag);
      this.getNext();
    } else {
      //console.log("Para donde vas!!!");
    }

  }

  ngOnInit() {
    console.log("iniciando");
    this.getBusqueda('cat');
  }

  getBusqueda(query: string) {
    this.contenedor = [];
    this.rest.getGif(query).subscribe((data: {}) => {
      this.contenedor = data;
      this.imagenes = [];
      console.log(data);

      this.contenedor.data.forEach(item => {
        let imagen = new ImagenPin();
        imagen.titulo = item.title;
        imagen.url = item.images.fixed_width.url;

        this.imagenes.push(imagen);
      });
    });
    
  }

  getNext(){
    this.contenedor = [];
    this.rest.getNext().subscribe((data: {}) => {
      this.contenedor = data;
      this.contenedor.data.forEach(item => {
        let imagen = new ImagenPin();
        imagen.titulo = item.title;
        imagen.url = item.images.fixed_width.url;

        this.imagenes.push(imagen);
      });
      this.state = true;
    });
    
  }

}
