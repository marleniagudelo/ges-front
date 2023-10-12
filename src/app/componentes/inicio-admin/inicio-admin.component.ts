import { Component } from '@angular/core';
import {OrdenServicioService} from "../../servicios/orden-servicio.service";

@Component({
  selector: 'app-inicio-admin',
  templateUrl: './inicio-admin.component.html',
  styleUrls: ['./inicio-admin.component.css']
})
export class InicioAdminComponent {

  public listadoOrdenesPendientes: any[] = [];

  constructor(private ordenServicio: OrdenServicioService) {
    this.listarOrdenesPendientes()
  }


  listarOrdenesPendientes() {
    this.ordenServicio.listarOrdenesPendientes().subscribe(respuesta => {
      console.log(respuesta)
      this.listadoOrdenesPendientes = respuesta.datos
    })
  }

}
