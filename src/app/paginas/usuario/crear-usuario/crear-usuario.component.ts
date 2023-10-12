import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsuarioService } from 'src/app/servicios/usuario.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.component.html',
  styleUrls: ['./crear-usuario.component.css']
})
export class CrearUsuarioComponent {

  public llenarSelectRol: any[] = [];

  constructor(private fb: FormBuilder,
    private crearUsuarioServicio: UsuarioService) {

    crearUsuarioServicio.listarRol().subscribe(respuesta => {
      console.log(respuesta);
      this.llenarSelectRol = respuesta.datos;
    })

  }

  public formulario: FormGroup = this.fb.group({
    nombre: ['', [Validators.required]],
    numero_documento: ['', [Validators.required]],
    rol: ['', [Validators.required]],
    clave: ['', [Validators.required]]
  })


  crearUsuario(evento: Event) {
    evento.preventDefault()

    if (this.formulario.invalid) {
      Swal.fire({
        title: 'Error!',
        text: 'Debes llenar todos los campos',
        icon: 'error'
      })

      return;
    }

    console.log(this.formulario.value);

    const datos = {
      "documento": this.formulario.value['numero_documento'],
      "nombre_usuario": this.formulario.value['nombre'],
      "clave_usuario": this.formulario.value['clave'],
      "fk_rol": this.formulario.value['rol']
    }

    this.crearUsuarioServicio.crearUsuario(datos).subscribe(respuesta => {
      console.log(respuesta);
      if (respuesta.estado === 200) {
        Swal.fire({
          text: respuesta.mensaje,
          icon: 'success'
        })
      } else {
        Swal.fire({
          text: respuesta.mensaje,
          icon: 'error'
        })
      }
    })

  }

}
