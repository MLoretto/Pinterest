import { Component , ViewChild, Input } from '@angular/core';
import { TituloComponent } from './titulo/titulo.component';
import { DetalleComponent } from './detalle/detalle.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pinterest';

  @ViewChild('titulo')  titulo:TituloComponent;
  @ViewChild('detalle') detalle:DetalleComponent;

  ngOnInit() {
    this.titulo.emitEvent
    .subscribe(
      res =>
      {
      console.log("Atributo:" + res);
      this.detalle.queryText = res;
      this.detalle.buscar();
      }
    );
  }


}
