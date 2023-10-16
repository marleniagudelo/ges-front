import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";


@Injectable({
  providedIn: 'root'
})

export class ClienteService {
  private _datosClientesActualizar: any;

  get datosClientesActualizar(): any {
    return this._datosClientesActualizar;
  }
  set datosClientesActualizar(value: any) {
    this._datosClientesActualizar = value;
  }


  private apiUrl: string = environment.apiUrl;

  constructor(private http: HttpClient) { }

  crearCliente(datos: any) {
    return this.http.post<any>(`${this.apiUrl}/ges-back/controladores/crear_cliente_controlador.php`, datos)
  }

  editarCliente(datos: any) {
    return this.http.post<any>(`${this.apiUrl}/ges-back/controladores/editar_cliente_controlador.php`, datos)
  }

  listarCliente() {
    return this.http.get<any>(`${this.apiUrl}/ges-back/controladores/listar_cliente_controlador.php`)
  }

  eliminarCliente(datos:any){
    return this.http.post<any>(`${this.apiUrl}/ges-back/controladores/eliminar_cliente_controlador.php`, datos)
  }
}
