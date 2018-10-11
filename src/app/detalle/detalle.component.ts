import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {

  Urls : string[] = [
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
    ]; 

  constructor() { }

  ngOnInit() {
  }

}
