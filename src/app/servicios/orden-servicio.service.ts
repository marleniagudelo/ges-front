import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class OrdenServicioService {
  private apiUrl: string = environment.apiUrl;

  constructor(private http: HttpClient) {
  }

  crearOrden(datos: any) {
    return this.http.post<any>(`${this.apiUrl}/ges/controladores/crear_orden_controlador.php`, datos)
  }

  listarOrdenesPendientes() {
    return this.http.get<any>(`${this.apiUrl}/ges/controladores/listar_ordenes_pendientes_controlador.php`)
  }

  listarOrdenesTecnico(documento: any) {

    const datos = {
      "num_documento": documento
    }
    return this.http.post<any>(`${this.apiUrl}/ges/controladores/listar_ordenes_tecnico_controlador.php`,datos)
  }
}
