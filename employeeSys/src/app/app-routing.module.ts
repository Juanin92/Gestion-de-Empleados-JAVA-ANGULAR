import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';

//Se crea una lista de "rutas" del objeto Routes
const routes: Routes = [
  {path:'employees', component: EmployeeListComponent}, // Ruta para mostrar la lista de empleados
  {path:'', redirectTo: 'employees', pathMatch: 'full'}, // Ruta por defecto, redirige a 'employees' si la URL está vacía
  {path:'AddEmployee', component: AddEmployeeComponent}, // Ruta para añadir un nuevo empleado
  {path: 'editEmployee/:id', component: EditEmployeeComponent} // Ruta para editar un empleado existente, recibe el ID como parámetro
];

// Definición del módulo de enrutamiento
@NgModule({
  imports: [RouterModule.forRoot(routes)], // Configura y registra el enrutador
  exports: [RouterModule] // Exporta RouterModule para que esté disponible en otros módulos
})
export class AppRoutingModule { }
