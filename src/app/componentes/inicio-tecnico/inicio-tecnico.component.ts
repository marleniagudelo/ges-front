import {Component} from '@angular/core';
import {OrdenServicioService} from "../../servicios/orden-servicio.service";

@Component({
  selector: 'app-inicio-tecnico',
  templateUrl: './inicio-tecnico.component.html',
  styleUrls: ['./inicio-tecnico.component.css']
})
export class InicioTecnicoComponent {
  public numDocumento: string | null = "";
  public listadoSercicios: any[] = [];

  constructor(private servicioOrden: OrdenServicioService) {
    this.numDocumento = sessionStorage.getItem('numero_documento');

    this.listadoServicios();
  }

  listadoServicios() {

    this.servicioOrden.listarOrdenesTecnico(this.numDocumento).subscribe(respuesta => {
      console.log(respuesta)
      this.listadoSercicios = respuesta.datos
    })
  }

}
