import { Component, OnInit, HostListener, ElementRef, Input } from '@angular/core';
import { RestService } from '../rest.service';
import { ImagenPin } from '../models/imagen-pin';

import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

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

  @Input() queryText:string = '';

  constructor(public rest:RestService, public el: ElementRef, private modalService: NgbModal) {
    console.log("Empesemos.");
  }

  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    const componentPosition = this.el.nativeElement.offsetTop
    const scrollPosition = window.pageYOffset
    let scrollDiferencia = document.body.scrollHeight - scrollPosition;

    console.log(componentPosition);
    console.log(scrollPosition);
    console.log(scrollDiferencia);

    if (scrollDiferencia <= 900 && this.state) {
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

public buscar(){
  console.log('queremos buscar ' + this.queryText);
  this.getBusqueda(this.queryText);
}


  getBusqueda(query: string) {
    this.contenedor = [];
    this.rest.getGif(query).subscribe((data: {}) => {
      this.contenedor = data;
      this.imagenes = [];
      console.log(data);

      this.contenedor.data.forEach(item => {
        let imagen = new ImagenPin();
        imagen.id = item.id;
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

  closeResult: string;

  open(content, id) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}, ${id}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }


}
