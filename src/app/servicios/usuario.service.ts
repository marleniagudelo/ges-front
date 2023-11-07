import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from "../../environments/environment";


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  get datosUsuario(): any {
    return this._datosUsuario;
  }

  set datosUsuario(value: any) {
    this._datosUsuario = value;
  }

  private _datosUsuario:any;

  private apiUrl: string = environment.apiUrl;
  constructor(private http: HttpClient) { }

  crearUsuario(datos: any) {
    return this.http.post<any>(`${this.apiUrl}/ges-back/controladores/crear_usuario_controlador.php`, datos)
  }

  listarRol() {
    return this.http.get<any>(`${this.apiUrl}/ges-back/controladores/listar_rol_controlador.php`)
  }

  listarTecnico() {
    return this.http.get<any>(`${this.apiUrl}/ges-back/controladores/listar_tecnico_controlador.php`)
  }

  listarUsuario() {
    return this.http.get<any>(`${this.apiUrl}/ges-back/controladores/listar_usuario_controlador.php`)
  }

  editarUsuario(datos: any) {
    return this.http.post<any>(`${this.apiUrl}/ges-back/controladores/editar_usuario_controlador.php`, datos)
  }

  estadoUsuario(datos: any) {
    return this.http.post<any>(`${this.apiUrl}/ges-back/controladores/estado_usuario_controlador.php`, datos)
  }
}
