import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ClienteService} from "../../../servicios/cliente.service";
import Swal from "sweetalert2";
import {Router} from "@angular/router";

@Component({
  selector: 'app-crear-cliente',
  templateUrl: './crear-cliente.component.html',
  styleUrls: ['./crear-cliente.component.css']
})


export class CrearClienteComponent {
  constructor(private fb: FormBuilder,
              private servicioCliente: ClienteService,
              private router: Router) {
  }

  public formulario: FormGroup = this.fb.group({
    razon_social: ['', [Validators.required]],
    nit: ['', [Validators.required]],
    representante: ['', [Validators.required]],
    direccion: ['', [Validators.required]],
    telefono: ['', [Validators.required]],
    correo: ['', [Validators.required]],
  })


  guardarCliente(evento:Event){
    evento.preventDefault();
    console.log(this.formulario)

    if (this.formulario.invalid){
      Swal.fire({
        title: 'Atencion!',
        text: "Diligenciar todos los campos por favor",
        icon: 'error'
      })
      return
    }else{
      console.log("Melos")
      const datos = {
        "razon_social": this.formulario.value['razon_social'],
        "nit": this.formulario.value['nit'],
        "representante": this.formulario.value['representante'],
        "direccion": this.formulario.value['direccion'],
        "telefono": this.formulario.value['telefono'],
        "correo": this.formulario.value['correo']
      }
      this.servicioCliente.crearCliente(datos).subscribe(respuesta => {
        console.log(respuesta)
        if (respuesta.estado === 200){
          Swal.fire({
            title: 'Bien!',
            text: respuesta.mensaje,
            icon: 'success'
          })
          this.formulario.reset()
          this.router.navigate(['/gestionar-clientes'])
        }else{
          Swal.fire({
            title: 'Atencion!',
            text: respuesta.mensaje,
            icon: 'error'
          })
        }
      })
      console.log(datos)

    }


  }

}
