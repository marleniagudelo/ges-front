import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {OrdenServicioService} from "../../servicios/orden-servicio.service";
import {Router} from "@angular/router";
import Swal from "sweetalert2";

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
  public tituloTabla: string = 'Ordenes pendientes'

  constructor(private servicioOrden: OrdenServicioService,
              private router: Router) {
    this.numDocumento = sessionStorage.getItem('numero_documento');
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.tipoTabla === "1") {
      this.mostrarTomar = true;
      this.tituloTabla = "Ordenes pendientes"
      this.listadoServicios(this.tipoTabla);
    }
    if (this.tipoTabla === "2") {
      this.mostrarTomar = false;
      this.tituloTabla = "Ordenes en proceso"
      this.listadoServicios(this.tipoTabla);
    }

    if (this.tipoTabla === "3") {
      this.mostrarTomar = false;
      this.tituloTabla = "Ordenes en finalizadas"
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
      Swal.fire({
        icon: 'success',
        title: respuesta.mensaje
      })
      if (respuesta.estado === 200) {
        this.router.navigate(['/'])
      }
    })
  }

  verDetalle(orden:any){
    this.servicioOrden.datosOrdenActualizar = orden;
    this.router.navigate(['/detalle-orden'])
  }

  finalizarSevicio(orden:any){
    this.servicioOrden.datosOrdenActualizar = orden;
    this.router.navigate(['/finalizar-orden'])
  }


}
