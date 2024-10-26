import { Component } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html'
})
export class EditEmployeeComponent {
  employee: Employee = new Employee(); // Crea un nuevo objeto de tipo Employee para almacenar los datos del empleado que se va a editar.
  id: number; // Variable para almacenar el ID del empleado.

  constructor(private employeeService: EmployeeService, private route: ActivatedRoute, private router: Router){}
  
  // Método que se ejecuta automáticamente cuando se carga el componente.
  ngOnInit(){
    this.id = this.route.snapshot.params['id']; // Obtiene el ID del empleado de la ruta actual.
    this.employeeService.getEmployeeById(this.id).subscribe(
      {
        next: (data) => this.employee = data,
        error: (error: any) => console.log(error)
      }
    );
  }

  // Método que se llama cuando se envía el formulario.
  onSubmit(){
    this.saveEmployee();
  }

  // Método que actualiza el empleado utilizando el servicio.
  saveEmployee(){
    // Llama al método updateEmployee del servicio, pasando el ID y el objeto employee.
    this.employeeService.updateEmployee(this.id, this.employee).subscribe(
      {
        next: (data) => this.goToEmployeeList(), // Si la operación es exitosa, navega a la lista de empleados.
        error: (error) => console.log(error)
      }
    );
  }

  // Método que navega a la lista de empleados.
  goToEmployeeList(){
    this.router.navigate(['/employees']);
  }
}
