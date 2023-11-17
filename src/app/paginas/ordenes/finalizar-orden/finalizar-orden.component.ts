import { Component } from '@angular/core';
import {OrdenServicioService} from "../../../servicios/orden-servicio.service";
import {Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import Swal from "sweetalert2";

@Component({
  selector: 'app-finalizar-orden',
  templateUrl: './finalizar-orden.component.html',
  styleUrls: ['./finalizar-orden.component.css']
})
export class FinalizarOrdenComponent {

  public detalleOrden: any = [];

  constructor(private servicioOrden: OrdenServicioService,
              private router: Router,
              private fb: FormBuilder) {
    this.ObtenerDatosOrden();
  }


  public formulario: FormGroup = this.fb.group({
    observacion_final: ['', [Validators.required]]
  })

  ObtenerDatosOrden() {
    this.detalleOrden = this.servicioOrden.datosOrdenActualizar

    if (this.detalleOrden === undefined){
      this.router.navigate(['/'])
    }
    console.log(this.detalleOrden)
  }

  finalizarOrden(evento:SubmitEvent){

    evento.preventDefault();
    console.log(this.formulario.value)

    if (this.formulario.invalid){
      Swal.fire({
        title: 'Atencion!',
        text: 'Ingresar observacion final por favor',
        icon: 'error'
      })
    }else{
      this.detalleOrden.observaciones_finales = this.formulario.value['observacion_final']
      console.log(this.detalleOrden)

      this.servicioOrden.finalizarOrden(this.detalleOrden.id_orden, this.detalleOrden.observaciones_finales).subscribe(res => {
        console.log(res)
        if (res.estado === 200){
          Swal.fire({
            title: res.mensaje,
            icon: 'success'
          })

          this.formulario.reset();

          this.router.navigate(['/'])
        }
      })
    }
  }

}
