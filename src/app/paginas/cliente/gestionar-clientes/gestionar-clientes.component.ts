import { Component } from '@angular/core';
import { ClienteService } from "../../../servicios/cliente.service";
import { Router } from "@angular/router";
import Swal from 'sweetalert2';

@Component({
  selector: 'app-gestionar-clientes',
  templateUrl: './gestionar-clientes.component.html',
  styleUrls: ['./gestionar-clientes.component.css']
})
export class GestionarClientesComponent {
  public listadoClientes: any[] = [];

  constructor(private clienteServicio: ClienteService,
    private router: Router) {
    this.listarClientes()
  }

  listarClientes() {
    this.clienteServicio.listarCliente().subscribe(respuesta => {
      console.log(respuesta)
      this.listadoClientes = respuesta.datos
    })
  }


  editarCliente(datosCliente: any) {
    this.clienteServicio.datosClientesActualizar = datosCliente;
    this.router.navigate(['/editar-cliente'])
  }

  eliminarCliente(nit: string) {
    Swal.fire({
      title: 'Atencion!',
      text: 'Desea eliminar el cliente?',
      showConfirmButton: true,
      icon: 'question',
      confirmButtonColor: '#da2528',
      confirmButtonText: 'Eliminar',
      showCancelButton: true,
    }).then(r => {
      if (r.isConfirmed) {
        const datos = {
          nit: nit
        }
        this.clienteServicio.eliminarCliente(datos).subscribe(respuesta => {
          console.log(respuesta)
          this.listarClientes()
        })
        console.log(nit)
      }
    })
  }
}
