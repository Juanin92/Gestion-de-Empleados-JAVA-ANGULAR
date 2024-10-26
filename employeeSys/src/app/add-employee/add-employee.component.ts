import { Component } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';
import { error } from 'console';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrl: './add-employee.component.css'
})
export class AddEmployeeComponent {
  // Crea un nuevo objeto de tipo Employee para almacenar los datos del nuevo empleado.
  employee: Employee = new Employee();

  // Constructor que inyecta el servicio de empleados y el router en el componente.
  constructor(private employeeService: EmployeeService, private router: Router){
  }

  // Método que se llama cuando se envía el formulario.
  onSubmit(){
    this.saveEmployee();
  }

  // Método que guarda el nuevo empleado utilizando el servicio.
  saveEmployee(){
    this.employeeService.addEmployee(this.employee).subscribe(
      {
        next: (data) => {
          this.goToEmployeeList(); // Si la operación se realiza con éxito, navega a la lista de empleados.
        }, 
        error: (error: any) => {console.log(error)}
      }
    );
  }

  goToEmployeeList() {
    this.router.navigate(['/employees']); // Usa el router para cambiar a la ruta donde se muestra la lista de empleados.
  }
}
