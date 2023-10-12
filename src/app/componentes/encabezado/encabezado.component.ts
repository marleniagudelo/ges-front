import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css']
})
export class EncabezadoComponent {

  public nombreUsuario = sessionStorage.getItem('nombre_usuario')
  public nombrePagina:string = ""

  constructor(private router: Router) {
    if(router.url === '/principal'){
      this.nombrePagina = "Menú principal"
    }
    if(router.url === '/crear-usuario'){
      this.nombrePagina = "Crear usuario"
    }
    if(router.url === '/gestion-usuarios'){
      this.nombrePagina = "Gestion usuarios"
    }
    if(router.url === '/editar-usuario'){
      this.nombrePagina = "Editar usuario"
    }
    if(router.url === '/crear-cliente'){
      this.nombrePagina = "Crear cliente"
    }
     if(router.url === '/gestionar-clientes'){
      this.nombrePagina = "Gestionar clientes"
    }
    if(router.url === '/crear-orden'){
      this.nombrePagina = "Crear orden"
    }

    if(router.url === '/editar-cliente'){
      this.nombrePagina = "Editar cliente"
    }

   this.verificarSesion()
  }
  verificarSesion() {
    if (sessionStorage.getItem('nombre_usuario') === null || sessionStorage.getItem('nombre_usuario') === undefined) {
      this.router.navigate(['/iniciar-sesion'])
    }

  }



  cerrarCesion() {
    console.log("cerrar sesion");
    sessionStorage.clear()
    this.router.navigate(['/iniciar-sesion'])
  }

}
