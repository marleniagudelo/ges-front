import {Component, OnInit} from '@angular/core';
import {OrdenServicioService} from "../../../servicios/orden-servicio.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {ClienteService} from "../../../servicios/cliente.service";
import {UsuarioService} from "../../../servicios/usuario.service";
import Swal from "sweetalert2";

@Component({
  selector: 'app-editar-orden',
  templateUrl: './editar-orden.component.html',
  styleUrls: ['./editar-orden.component.css']
})
export class EditarOrdenComponent implements OnInit {

  public listadoCliente: any[] = [];
  public listadoTecnico: any[] = [];
  datosOrdenes: any = ''

  constructor(private ordenServicio: OrdenServicioService,
              private fb: FormBuilder,
              private router: Router,
              private servicioCliente: ClienteService,
              private usuarioServicio: UsuarioService,) {
  }

  ngOnInit(): void {
    this.datosOrdenes = this.ordenServicio.datosOrdenActualizar;
    this.listarCliente();
    this.listarTecnico();
    this.llenarFormulario();
  }

  public formulario: FormGroup = this.fb.group({
    cliente: ['', [Validators.required]],
    descripcion_novedad: ['', [Validators.required]],
    tecnico: ['', [Validators.required]],
  })

  editarOrden(evento: SubmitEvent) {
    evento.preventDefault()

    console.log(this.formulario)
    if (this.formulario.invalid) {
      Swal.fire({
        title: 'Atencion!',
        text: 'Debe diligenciar todos los campos',
        icon: 'error'
      })
    } else {
      const datos =
        {
          "id_orden": this.datosOrdenes.id_orden,
          "descripcion_novedad": this.formulario.value['descripcion_novedad'],
          "nit": this.formulario.value['cliente'],
          "num_documento": this.formulario.value['tecnico']
        }
      this.ordenServicio.editarOrden(datos).subscribe(respuesta => {
        if (respuesta.estado === 200){
          Swal.fire({
            title: 'Bien!',
            text: respuesta.mensaje,
            icon: 'success'
          })
          this.router.navigate(['/principal-admin'])
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


  listarCliente() {
    this.servicioCliente.listarCliente().subscribe(respuesta => {
      this.listadoCliente = respuesta.datos;
    })
  }

  listarTecnico() {
    this.usuarioServicio.listarTecnico().subscribe(respuesta => {
      this.listadoTecnico = respuesta.datos;
    })
  }

  llenarFormulario() {
    if (this.datosOrdenes === undefined) {
      this.router.navigate(['/principal-admin'])
      return
    }
    this.formulario.controls['cliente'].setValue(this.datosOrdenes.nit);
    this.formulario.controls['descripcion_novedad'].setValue(this.datosOrdenes.descripcion_novedad);
    this.formulario.controls['tecnico'].setValue(this.datosOrdenes.num_documento);
  }

}
