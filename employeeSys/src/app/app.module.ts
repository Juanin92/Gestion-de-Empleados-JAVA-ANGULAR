import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { FormsModule } from '@angular/forms';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';

/**
 * define el módulo principal de una aplicación Angular.
 * es una forma de agrupar componentes, servicios y otros elementos relacionados en una aplicación.
 */

// Definimos el módulo principal de la aplicación
@NgModule({
  // 'declarations' lista los componentes que pertenecen a este módulo
  declarations: [
    AppComponent,
    EmployeeListComponent,
    AddEmployeeComponent,
    EditEmployeeComponent
  ],
  // 'imports' especifica otros módulos que este módulo necesita
  imports: [
    BrowserModule, // Permite que la aplicación funcione en un navegador
    AppRoutingModule, // Incluye el módulo de enrutamiento
    FormsModule // Habilita el uso de formularios en la aplicación
  ],
  // 'providers' define los servicios que estarán disponibles en todo el módulo
  providers: [
    provideClientHydration(),
    provideHttpClient(withInterceptorsFromDi()) // Proporciona un cliente HTTP con interceptores
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
