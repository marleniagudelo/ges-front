import {Component} from '@angular/core';
import {OrdenServicioService} from "../../servicios/orden-servicio.service";
import {Router} from "@angular/router";
import Swal from "sweetalert2";

@Component({
  selector: 'app-inicio-admin',
  templateUrl: './inicio-admin.component.html',
  styleUrls: ['./inicio-admin.component.css']
})
export class InicioAdminComponent {

  public listadoOrdenes: any[] = [];
  public estadoOrden: string = "Ordenes pendientes";

  constructor(private ordenServicio: OrdenServicioService, private router: Router) {
    this.listarOrdenesPendientes("1")
  }


  listarOrdenesPendientes(estado: string) {
    this.ordenServicio.listarOrdenes(estado).subscribe(respuesta => {
      console.log(respuesta)
      this.listadoOrdenes = respuesta.datos
    })
  }


  editarOrden(datosOrden: any) {
    this.ordenServicio.datosOrdenActualizar = datosOrden;
    this.router.navigate(['/editar-orden'])
  }

  cancelarOrden(idOrden: string) {
    Swal.fire({
      title: "Atencion",
      text: 'Cancelar orden?',
      icon: 'warning',
      showConfirmButton: true,
      showDenyButton: true,
      confirmButtonText: 'Cancelar orden',
      confirmButtonColor: '#da2528',
      denyButtonText: 'Volver',
      denyButtonColor: '#000'
    }).then(res => {
      if (res.isConfirmed) {
        const datos = {
          "id_orden": idOrden
        }
        this.ordenServicio.cancelarOrden(datos).subscribe(respuesta => {
          console.log(respuesta)
          if (respuesta.estado === 200) {
            Swal.fire({
              title: 'Bien!',
              text: respuesta.mensaje,
              icon: 'success'
            })
            this.listarOrdenesPendientes("1")
          } else {
            Swal.fire({
              title: 'Atencion!',
              text: respuesta.mensaje,
              icon: 'error'
            })
          }
        })
        this.router.navigate(['/principal-admin'])
      }
    })
  }

  mostrarPendientes() {
    this.listarOrdenesPendientes("1")
    this.estadoOrden = "Ordenes pendientes";
  }

  mostrarEnProceso() {
    this.listarOrdenesPendientes("2")
    this.estadoOrden = "Ordenes en proceso";

  }

  mostrarFinalizadas() {
    this.listarOrdenesPendientes("3")
    this.estadoOrden = "Ordenes finalizadas";
  }


  verDetalle(orden:any){
    this.ordenServicio.datosOrdenActualizar = orden;
    this.router.navigate(['/detalle-orden'])
  }
}
