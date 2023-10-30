import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {OrdenServicioService} from "../../servicios/orden-servicio.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-tabla-orden-servicio',
  templateUrl: './tabla-orden-servicio.component.html',
  styleUrls: ['./tabla-orden-servicio.component.css']
})
export class TablaOrdenServicioComponent implements OnChanges {
  // 1-pendiente, 2-proceso, 3-finalizada
  @Input() public tipoTabla?: string;
  public numDocumento: string | null = "";
  public listadoSercicios: any[] = [];
  mostrarTomar: boolean = true;

  constructor(private servicioOrden: OrdenServicioService,
              private router: Router) {
    this.numDocumento = sessionStorage.getItem('numero_documento');
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.tipoTabla === "1") {
      this.mostrarTomar = true;
      this.listadoServicios(this.tipoTabla);
    }
    if (this.tipoTabla === "2") {
      this.mostrarTomar = false;
      this.listadoServicios(this.tipoTabla);
    }

    if (this.tipoTabla === "3") {
      this.mostrarTomar = false;
      this.listadoServicios(this.tipoTabla);
    }

  }

  listadoServicios(estadoOrden: string) {
    this.servicioOrden.listarOrdenesTecnico(this.numDocumento, estadoOrden).subscribe(respuesta => {
      console.log(respuesta)
      this.listadoSercicios = respuesta.datos
    })
  }

  tomarOrden(idOrden: string): void {
    console.log(idOrden)
    this.servicioOrden.tomarOrden(idOrden).subscribe(respuesta => {
      console.log(respuesta)
      if (respuesta.estado === 200) {
        this.router.navigate(['/'])
      }
    })
  }


}
