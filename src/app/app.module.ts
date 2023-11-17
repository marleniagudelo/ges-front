import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

//COMPONENTES

import { AppComponent } from './app.component';
import { IniciarSesionComponent } from './paginas/iniciar-sesion/iniciar-sesion.component';
import { CrearUsuarioComponent } from './paginas/usuario/crear-usuario/crear-usuario.component';
import { PrincipalComponent } from './paginas/principal/principal.component';
import { EncabezadoComponent } from './componentes/encabezado/encabezado.component';
import { EditarUsuarioComponent } from './paginas/usuario/editar-usuario/editar-usuario.component';
import { GestionUsuariosComponent } from './paginas/usuario/gestion-usuarios/gestion-usuarios.component';
import { CrearOrdenComponent } from './paginas/ordenes/crear-orden/crear-orden.component';
import { CrearClienteComponent } from './paginas/cliente/crear-cliente/crear-cliente.component';
import { GestionarClientesComponent } from './paginas/cliente/gestionar-clientes/gestionar-clientes.component';
import { EditarClienteComponent } from './paginas/cliente/editar-cliente/editar-cliente.component';
import { InicioAdminComponent } from './componentes/inicio-admin/inicio-admin.component';
import { InicioTecnicoComponent } from './componentes/inicio-tecnico/inicio-tecnico.component';
import { EditarOrdenComponent } from './paginas/ordenes/editar-orden/editar-orden.component';
import { TablaOrdenServicioComponent } from './componentes/tabla-orden-servicio/tabla-orden-servicio.component';
import { DetalleOrdenComponent } from './paginas/ordenes/detalle-orden/detalle-orden.component';
import { FinalizarOrdenComponent } from './paginas/ordenes/finalizar-orden/finalizar-orden.component'



@NgModule({
  declarations: [
    AppComponent,
    IniciarSesionComponent,
    CrearUsuarioComponent,
    PrincipalComponent,
    EncabezadoComponent,
    EditarUsuarioComponent,
    GestionUsuariosComponent,
    CrearOrdenComponent,
    CrearClienteComponent,
    GestionarClientesComponent,
    EditarClienteComponent,
    InicioAdminComponent,
    InicioTecnicoComponent,
    EditarOrdenComponent,
    TablaOrdenServicioComponent,
    DetalleOrdenComponent,
    FinalizarOrdenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
