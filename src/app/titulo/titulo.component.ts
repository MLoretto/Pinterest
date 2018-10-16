import { Component, OnInit, ElementRef, ViewChild , Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-titulo',
  templateUrl: './titulo.component.html',
  styleUrls: ['./titulo.component.css']
})
export class TituloComponent implements OnInit {
  
  @Output() emitEvent:EventEmitter<string> = new EventEmitter<string>();
  querySearch: string = '';


  @ViewChild('searchImg') searchImg: ElementRef;
  @ViewChild('searchBtn') searchBtn: ElementRef;
  
  constructor() { }

  ngOnInit() {
    this.enviarBusqueda();
  }

  public search(){
    console.log(this.searchImg.nativeElement.value );
    this.querySearch = this.searchImg.nativeElement.value;
    this.enviarBusqueda();

  }

  public enviarBusqueda(): string{
    let fResponse = this.querySearch;
    this.querySearch = fResponse;
    this.emitEvent.emit(fResponse);
    return fResponse;
  }



}
