import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class IniciarSesionService {

  private apiUrl: string = environment.apiUrl;

  constructor(private http: HttpClient) { }



  iniciarSesion(datos: any) {
    return this.http.post<any>(`${this.apiUrl}/ges-back/controladores/iniciar_sesion_controlador.php`, datos)
  }


}
