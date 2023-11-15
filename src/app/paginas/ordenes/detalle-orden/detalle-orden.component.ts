import {Component} from '@angular/core';
import {OrdenServicioService} from "../../../servicios/orden-servicio.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-detalle-orden',
  templateUrl: './detalle-orden.component.html',
  styleUrls: ['./detalle-orden.component.css']
})
export class DetalleOrdenComponent {

  public detalleOrden: any = [];

  constructor(private servicioOrden: OrdenServicioService,
              private router: Router) {
    this.ObtenerDatosOrden();
  }

  ObtenerDatosOrden() {
    this.detalleOrden = this.servicioOrden.datosOrdenActualizar

    if (this.detalleOrden === undefined){
      this.router.navigate(['/'])
    }
    console.log(this.detalleOrden)
  }

}
