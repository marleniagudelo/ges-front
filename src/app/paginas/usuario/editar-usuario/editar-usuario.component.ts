import {Component} from '@angular/core';
import {UsuarioService} from "../../../servicios/usuario.service";
import {Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import Swal from "sweetalert2";

@Component({
  selector: 'app-editar-usuario',
  templateUrl: './editar-usuario.component.html',
  styleUrls: ['./editar-usuario.component.css']
})
export class EditarUsuarioComponent {

  public listaRol: any[] = [];

  constructor(private servicioUsuario: UsuarioService,
              private router: Router,
              private fb: FormBuilder) {
    this.formulario.get('numero_documento')?.disable();
    console.log(this.servicioUsuario.datosUsuario)
    if (this.servicioUsuario.datosUsuario === undefined || this.servicioUsuario.datosUsuario === null){
      this.router.navigate(['/gestion-usuarios'])
    }
    this.llenarRol()
    this.llenarCampos()
  }

  public formulario: FormGroup = this.fb.group({
    nombre: ['', [Validators.required]],
    numero_documento: ['', [Validators.required]],
    rol: ['', [Validators.required]]
  })

  editarUsuario(evento: Event) {
    evento.preventDefault();
    console.log(this.formulario)
    if(this.formulario.invalid){
      Swal.fire({
        title: 'Error',
        text: 'Llenar todos los campos',
        icon: 'error'
      })
    }else{
      const datos = {
        "documento": this.servicioUsuario.datosUsuario.num_documento,
        "nombre_usuario": this.formulario.value['nombre'],
        "fk_rol": this.formulario.value['rol']
      }
      this.servicioUsuario.editarUsuario(datos).subscribe(respuesta =>{
        console.log(respuesta)
        if(respuesta.estado === 200){
          Swal.fire({
            icon: 'success',
            text: respuesta.mensaje,
          })
          this.router.navigate(['/gestion-usuarios'])
        }else{
          Swal.fire({
            title: 'Error',
            text: respuesta.mensaje,
            icon: 'error'
          })
        }
      })

    }
  }

  llenarCampos() {
    this.formulario.controls['nombre'].setValue(this.servicioUsuario.datosUsuario.nombre_usuario)
    this.formulario.controls['numero_documento'].setValue(this.servicioUsuario.datosUsuario.num_documento)
    this.formulario.controls['rol'].setValue(this.servicioUsuario.datosUsuario.fk_rol)
  }

  llenarRol(){
    this.servicioUsuario.listarRol().subscribe(respuesta => {
      console.log(respuesta)
      this.listaRol = respuesta.datos
    })
  }
}
