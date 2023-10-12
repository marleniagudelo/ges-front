import {Component} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent {

  public rol:string | null = "";

  constructor(private router: Router) {
    this.verificarRol()
  }

  verificarRol() {

    this.rol = sessionStorage.getItem('rol');
    if (sessionStorage.getItem('rol') === "1") {
      this.router.navigate(['/principal-admin'])
    }else{
      if(sessionStorage.getItem('rol') === "2"){
        this.router.navigate(['/principal-tecnico'])
      }else{
        this.router.navigate(['/iniciar-sesion'])

      }
    }

  }

}
