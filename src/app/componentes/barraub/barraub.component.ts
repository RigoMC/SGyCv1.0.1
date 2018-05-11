import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-barraub',
  templateUrl: './barraub.component.html',
  styleUrls: ['./barraub.component.css']
})
export class BarraubComponent implements OnInit {

  //variables
  @Input('nubicacion') nubicacion: number;
  ubicacion : string;

  public traducirUbi (n)
  {
    switch(n)
    {
        case 0 :
        {
          this.ubicacion = "Inicio";
          break;
        }
        case 1 :
        {
          this.ubicacion = "Comandas";
          break;
        }
        case 2 :
        {
          this.ubicacion = "Calculos";
          break;
        }
        case 3 :
        {
          this.ubicacion = "Personal";
          break;
        }
        case 4 :
        {
          this.ubicacion = "Productos";
          break;
        }
        case 5 :
        {
          this.ubicacion = "Estadisticas";
          break;
        }
    }
  }

  ngOnInit() {
    this.traducirUbi(this.nubicacion);
  }
}
