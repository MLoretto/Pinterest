import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-carta',
  templateUrl: './carta.component.html',
  styleUrls: ['./carta.component.css']
})
export class CartaComponent implements OnInit {

  @Input('imagenURL') imagenURL: string;
  constructor() { }

  ngOnInit() {
  }

}
