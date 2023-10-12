import { Component } from '@angular/core';
import { UsuarioService } from 'src/app/servicios/usuario.service';

@Component({
  selector: 'app-gestion-usuarios',
  templateUrl: './gestion-usuarios.component.html',
  styleUrls: ['./gestion-usuarios.component.css']
})
export class GestionUsuariosComponent {

  public listaUsuario: any[] = []
  constructor(private servicioUsuario: UsuarioService) {

    this.listarUsuario()
  }

  listarUsuario() {

    this.servicioUsuario.listarUsuario().subscribe(respuesta => {

      this.listaUsuario = respuesta.datos
      console.log(respuesta);

    })
  }

  editarUsuario(datos:any){
    console.log(datos);
    this.servicioUsuario.datosEditarUsuario(datos)
  }

}
