import {Component} from '@angular/core';
import {ClienteService} from "../../../servicios/cliente.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Event, Router} from "@angular/router";
import Swal from "sweetalert2";

@Component({
  selector: 'app-editar-cliente',
  templateUrl: './editar-cliente.component.html',
  styleUrls: ['./editar-cliente.component.css']
})
export class EditarClienteComponent {

  constructor(private clienteServicio: ClienteService,
              private fb: FormBuilder,
              private router: Router) {
    console.log(this.clienteServicio.datosClientesActualizar)
    if (this.clienteServicio.datosClientesActualizar === undefined || this.clienteServicio.datosClientesActualizar === "") {
      this.router.navigate(['/gestionar-clientes'])
    }
    this.llenarCamposCliente()
  }

  public formulario: FormGroup = this.fb.group({
    razon_social: ['', [Validators.required],],
    nit: [{value: '', disabled: true}, [Validators.required]],
    representante: ['', [Validators.required]],
    direccion: ['', [Validators.required]],
    telefono: ['', [Validators.required]],
    correo: ['', [Validators.required]],
  })

  editarCliente(evento: SubmitEvent) {
    evento.preventDefault();

    if (this.formulario.invalid){
      Swal.fire({
        title: 'Atencion!',
        text: "Diligenciar todos los campos por favor",
        icon: 'error'
      })
      return
    }else{
      const datos = {
        "razon_social": this.formulario.value['razon_social'],
        "nit": this.clienteServicio.datosClientesActualizar.nit,
        "representante": this.formulario.value['representante'],
        "direccion": this.formulario.value['direccion'],
        "telefono": this.formulario.value['telefono'],
        "correo": this.formulario.value['correo']
      }
      console.log(datos)
      this.clienteServicio.editarCliente(datos).subscribe(respuesta =>{
        console.log(respuesta);

        if (respuesta.estado === 200){
          Swal.fire({
            title: 'Bien!',
            text: respuesta.mensaje,
            icon: 'success'
          })
          this.router.navigate(['/gestionar-clientes'])
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

  llenarCamposCliente() {
    this.formulario.controls['razon_social'].setValue(this.clienteServicio.datosClientesActualizar.razon_social)
    this.formulario.controls['nit'].setValue(this.clienteServicio.datosClientesActualizar.nit)
    this.formulario.controls['representante'].setValue(this.clienteServicio.datosClientesActualizar.representante_legal)
    this.formulario.controls['direccion'].setValue(this.clienteServicio.datosClientesActualizar.direccion)
    this.formulario.controls['telefono'].setValue(this.clienteServicio.datosClientesActualizar.telefono)
    this.formulario.controls['correo'].setValue(this.clienteServicio.datosClientesActualizar.correo)
  }

}
