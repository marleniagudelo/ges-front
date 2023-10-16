import { Component } from '@angular/core';
import {ClienteService} from "../../../servicios/cliente.service";
import {UsuarioService} from "../../../servicios/usuario.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Event, Router} from "@angular/router";
import {OrdenServicioService} from "../../../servicios/orden-servicio.service";
import Swal from "sweetalert2";

@Component({
  selector: 'app-crear-orden',
  templateUrl: './crear-orden.component.html',
  styleUrls: ['./crear-orden.component.css']
})
export class CrearOrdenComponent {
  public listadoCliente: any[] = [];
  public listadoTecnico: any[] = [];

  constructor(private servicioCliente: ClienteService,
              private usuarioServicio: UsuarioService,
              private ordenServicio: OrdenServicioService,
              private fb: FormBuilder,
              private router:Router) {
    this.listarCliente();
    this.listarTecnico();
  }

  public formulario: FormGroup = this.fb.group({
    cliente: ['', [Validators.required]],
    descripcion_novedad: ['', [Validators.required]],
    tecnico: ['', [Validators.required]],
  })

  crearOrden(evento: SubmitEvent){
    evento.preventDefault()
    console.log(this.formulario)

    if(this.formulario.invalid){
      Swal.fire({
        title: 'Atencion!',
        text: 'Debe diligenciar todos los campos',
        icon: 'error'
      })
    }else{
      const datos = {
        "fk_id_cliente": this.formulario.value['cliente'],
        "descripcion_novedad": this.formulario.value['descripcion_novedad'],
        "fk_id_usuario": this.formulario.value['tecnico']
      }
      this.ordenServicio.crearOrden(datos).subscribe(respuesta => {
        console.log(respuesta)
        if (respuesta.estado===200){
          Swal.fire({
            title: 'Bien!',
            text: respuesta.mensaje,
            icon: 'success'
          })
          this.router.navigate(['/principal'])
        }else{
          Swal.fire({
            title: 'Atencion!',
            text: respuesta.mensaje,
            icon: 'error'
          })
        }
      })
    }
  }

  listarCliente(){
    this.servicioCliente.listarCliente().subscribe(respuesta => {
      this.listadoCliente = respuesta.datos;
    })
  }

  listarTecnico(){
    this.usuarioServicio.listarTecnico().subscribe(respuesta => {
      this.listadoTecnico = respuesta.datos;
    })
  }

}
