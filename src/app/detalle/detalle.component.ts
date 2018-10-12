import { Component, OnInit } from '@angular/core';
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

  Urls : string[] = [/*
    "https://media3.giphy.com/media/JIX9t2j0ZTN9S/200w.gif",
    "https://media3.giphy.com/media/G3773sSDJHHy0/200w.gif",
    "https://media2.giphy.com/media/gm3Z05VsyZsFG/200w.gif",
    "https://media3.giphy.com/media/13CoXDiaCcCoyk/200w.gif",
    "https://media3.giphy.com/media/vhsNmFjuN4WDS/200w.gif",
    "https://media3.giphy.com/media/3oEduVGyuRGuZXaqys/200w.gif",
    "https://media1.giphy.com/media/tBxyh2hbwMiqc/200w.gif",
    "https://media3.giphy.com/media/11fucLQCTOdvBS/200w.gif",
    "https://media0.giphy.com/media/XNdoIMwndQfqE/200w.gif",
    "https://media3.giphy.com/media/26FPCXdkvDbKBbgOI/200w.gif",
    "https://media0.giphy.com/media/3oEduQAsYcJKQH2XsI/200w.gif",
    "https://media0.giphy.com/media/CqVNwrLt9KEDK/200w.gif",
    "https://media2.giphy.com/media/WXB88TeARFVvi/200w.gif",
    "https://media2.giphy.com/media/3oKIPdNDy4rwsbeiyY/200w.gif",
    "https://media1.giphy.com/media/jTnGaiuxvvDNK/200w.gif",
    "https://media2.giphy.com/media/FG6EQNhs3s7ug/200w.gif",
    "https://media0.giphy.com/media/6bAZXey5wNzBC/200w.gif",
    "https://media1.giphy.com/media/12HZukMBlutpoQ/200w.gif"
  */]; 

  constructor(public rest:RestService) {
    console.log("Empesemos.");
  }

  ngOnInit() {
    console.log("iniciando");
    this.getProducts('cat');
  }

  onScroll () {
    console.log("Scroling");
    //this.loading = true;
    setTimeout(() => {
      //this.fetchTodosPaginated();
      //this.loading = false;
    }, 1500);
  }



  getProducts(query: string) {
    console.log("Entramos aqui...");
    this.contenedor = [];
    this.rest.getProducts().subscribe((data: {}) => {
      console.log(data);
      this.contenedor = data;
      this.contenedor.data.forEach(item => {
        let imagen = new ImagenPin();
        imagen.titulo = item.title;
        imagen.url = item.images.fixed_width.url;

        this.imagenes.push(imagen);
      });
      console.log(this.imagenes);
    });
    
  }

}
