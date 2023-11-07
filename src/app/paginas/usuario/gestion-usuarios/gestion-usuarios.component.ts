import {Component} from '@angular/core';
import {UsuarioService} from 'src/app/servicios/usuario.service';
import {Router} from "@angular/router";
import Swal from "sweetalert2";

@Component({
  selector: 'app-gestion-usuarios',
  templateUrl: './gestion-usuarios.component.html',
  styleUrls: ['./gestion-usuarios.component.css']
})
export class GestionUsuariosComponent {

  public listaUsuario: any[] = []

  constructor(private servicioUsuario: UsuarioService,
              private router: Router) {

    this.listarUsuario()
  }

  listarUsuario() {

    this.servicioUsuario.listarUsuario().subscribe(respuesta => {

      this.listaUsuario = respuesta.datos
      console.log(respuesta);

    })
  }

  editarUsuario(datos: any) {
    console.log(datos)
    this.servicioUsuario.datosUsuario = datos;
    this.router.navigate(['/editar-usuario'])
  }

  editarEstadoUsuario(numDoc: string, estado: string) {
    console.log(estado)
    console.log(numDoc)
    Swal.fire({
      icon: 'question',
      text: 'Cambiar estado?',
      showConfirmButton: true,
      confirmButtonText: 'Si',
      confirmButtonColor: '#397739',
      showDenyButton: true,
      denyButtonText: 'No',
      denyButtonColor: '#d32222'
    }).then(r => {
      if (r.value) {
        const datos = {
          "documento": numDoc,
          "estado": estado
        }
        this.servicioUsuario.estadoUsuario(datos).subscribe(respuesta => {
          if (respuesta.estado === 200) {
            Swal.fire({
              icon: 'success',
              title: 'Bien!',
              text: respuesta.mensaje,
            })
          } else {
            Swal.fire({
              title: 'Error',
              text: respuesta.mensaje,
              icon: 'error'
            })
          }
          this.listarUsuario()
        })
      }
    })

  }

}
