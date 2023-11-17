import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class OrdenServicioService {

  private _datosOrdenActualizar: any;

  get datosOrdenActualizar(): any {
    return this._datosOrdenActualizar;
  }

  set datosOrdenActualizar(value: any) {
    this._datosOrdenActualizar = value;
  }

  private apiUrl: string = environment.apiUrl;

  constructor(private http: HttpClient) {
  }

  crearOrden(datos: any) {
    return this.http.post<any>(`${this.apiUrl}/ges-back/controladores/crear_orden_controlador.php`, datos)
  }

  editarOrden(datos: any) {
    return this.http.post<any>(`${this.apiUrl}/ges-back/controladores/editar_orden_controlador.php`, datos)
  }

  cancelarOrden(datos: any) {
    return this.http.post<any>(`${this.apiUrl}/ges-back/controladores/eliminar_orden_controlador.php`, datos)
  }

  listarOrdenes(estado:string) {
    const datos = {
      "estado": estado
    }
    return this.http.post<any>(`${this.apiUrl}/ges-back/controladores/listar_ordenes_estado_controlador.php`,datos)
  }

  listarOrdenesTecnico(documento: any, estadoOrden: string) {

    const datos = {
      "num_documento": documento,
      "estado_orden":estadoOrden
    }
    return this.http.post<any>(`${this.apiUrl}/ges-back/controladores/listar_ordenes_tecnico_controlador.php`, datos)
  }

  tomarOrden(idOrden: any) {

    const datos = {
      "id_orden": idOrden
    }
    return this.http.post<any>(`${this.apiUrl}/ges-back/controladores/tomar_orden_controlador.php`, datos)
  }

  finalizarOrden(idOrden: any, observacion_final: any) {

    const datos = {
      "id_orden": idOrden,
      "observacion_final": observacion_final
    }
    return this.http.post<any>(`${this.apiUrl}/ges-back/controladores/finalizar_orden_controlador.php`, datos)
  }
}
