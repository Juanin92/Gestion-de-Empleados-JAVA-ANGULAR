import { Component } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
})
export class EmployeeListComponent {
  employees: Employee[];

  // Constructor que inyecta el EmployeeService y el Router en el componente.
  constructor(private employeeService: EmployeeService, private router: Router){}

  // Método que se ejecuta automáticamente cuando el componente se carga por primera vez.
  // Aquí llamamos a la función que obtiene la lista de empleados para mostrarla.
  ngOnInit(){
    this.getEmployee();
  }

  private getEmployee(){
    this.employeeService.getEmployeeList().subscribe(
      (data => {
        this.employees = data;  // Asigna la lista de empleados recibida a la propiedad employees.
      })
    );
  }

  // Método para navegar a la vista de edición de un empleado específico.
  editEmployee(id: number){
    this.router.navigate(['editEmployee', id]); // Navega a la ruta de edición, pasando el ID del empleado.
  }

  deleteEmployee(id: number){
    this.employeeService.deleteEmployee(id).subscribe(
      {
        next: (data) => this.getEmployee(), // Si la eliminación es exitosa, vuelve a cargar la lista de empleados.
        error: (error) => console.log(error) // Si hay un error, lo registra en la consola.
      }
    );
  }
}
