import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IniciarSesionService } from 'src/app/servicios/iniciar-sesion.service';

@Component({
  selector: 'app-iniciar-sesion',
  templateUrl: './iniciar-sesion.component.html',
  styleUrls: ['./iniciar-sesion.component.css']
})
export class IniciarSesionComponent {

  public mensajeError: string = "";
  public verError: boolean = false;

  constructor(private fb: FormBuilder,
    private servicioInciarSesion: IniciarSesionService,
    private router: Router) {

  }

  public formulario: FormGroup = this.fb.group({
    usuario: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
    clave: ['', [Validators.required]]
  })


  iniciarSesion() {

    if (this.formulario.invalid) {
      this.mensajeError = "Verificar los datos ingresados"
      this.verError = true
    } else {
      this.verError = false

      const datos = {
        "documento": this.formulario.value['usuario'],
        "clave_usuario": this.formulario.value['clave']
      }

      this.servicioInciarSesion.iniciarSesion(datos).subscribe(respuesta => {
        if (respuesta.estado === 200) {
          sessionStorage.setItem('rol',respuesta.datos_usuario.rol)
          sessionStorage.setItem('numero_documento',respuesta.datos_usuario.numero_documento)
          sessionStorage.setItem('nombre_usuario',respuesta.datos_usuario.nombre_usuario)
          this.router.navigate(['/principal'])
        } else {
          this.mensajeError = respuesta.mensaje;
          this.verError = true;
        }
      })

    }


  }

}
