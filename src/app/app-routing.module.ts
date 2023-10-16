import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IniciarSesionComponent } from './paginas/iniciar-sesion/iniciar-sesion.component';
import { PrincipalComponent } from './paginas/principal/principal.component';
import { CrearUsuarioComponent } from './paginas/usuario/crear-usuario/crear-usuario.component';
import { EditarUsuarioComponent } from './paginas/usuario/editar-usuario/editar-usuario.component';
import { GestionUsuariosComponent } from './paginas/usuario/gestion-usuarios/gestion-usuarios.component';
import { GestionarClientesComponent } from './paginas/cliente/gestionar-clientes/gestionar-clientes.component';
import { CrearClienteComponent } from './paginas/cliente/crear-cliente/crear-cliente.component';
import { CrearOrdenComponent } from './paginas/ordenes/crear-orden/crear-orden.component';
import {EditarClienteComponent} from "./paginas/cliente/editar-cliente/editar-cliente.component";
import {InicioAdminComponent} from "./componentes/inicio-admin/inicio-admin.component";
import {InicioTecnicoComponent} from "./componentes/inicio-tecnico/inicio-tecnico.component";
import {EditarOrdenComponent} from "./paginas/ordenes/editar-orden/editar-orden.component";

const routes: Routes = [
  {path: 'iniciar-sesion', component: IniciarSesionComponent},
  {path: 'crear-usuario',component: CrearUsuarioComponent},
  {path: 'editar-usuario',component: EditarUsuarioComponent},
  {path: 'gestion-usuarios',component: GestionUsuariosComponent},
  {path: 'gestionar-clientes',component: GestionarClientesComponent},
  {path: 'crear-cliente',component: CrearClienteComponent},
  {path: 'editar-cliente',component: EditarClienteComponent},
  {path: 'crear-orden',component: CrearOrdenComponent},
  {path: 'editar-orden',component: EditarOrdenComponent},
  {path: 'principal',component: PrincipalComponent},
  {path: 'principal-admin',component: InicioAdminComponent},
  {path: 'principal-tecnico',component: InicioTecnicoComponent},

  {path: '**', redirectTo: 'principal',pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

