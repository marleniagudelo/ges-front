import {Component} from '@angular/core';

@Component({
  selector: 'app-inicio-tecnico',
  templateUrl: './inicio-tecnico.component.html',
  styleUrls: ['./inicio-tecnico.component.css']
})
export class InicioTecnicoComponent {
  public tipoTablaMostrar: string = '1'



  mostrarPendientes(): void {
    this.tipoTablaMostrar = "1"
  }

  mostrarEnProceso(): void {
    this.tipoTablaMostrar = "2"
  }

  mostrarFinalizadas(): void {
    this.tipoTablaMostrar = "3"
  }
}


