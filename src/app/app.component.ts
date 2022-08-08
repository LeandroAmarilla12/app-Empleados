import { Component } from '@angular/core';
import { Empleado } from './empleado.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo = 'Listado de Empleados';
  
  empleados:Array<Empleado>=[

    new Empleado("Juan","Diaz","Presidente",7500),
    new Empleado("Ana","Gomez","Directiva",6000),
    new Empleado("Roberto","Gonzalez","Encargado",5500),
    new Empleado("Jorge","Fernandez","Secretario",5000),
    
  ];
}
