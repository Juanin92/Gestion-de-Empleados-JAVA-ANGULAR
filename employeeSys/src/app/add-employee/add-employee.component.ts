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
  employee: Employee = new Employee();

  constructor(private employeeService: EmployeeService, private router: Router){

  }

  onSubmit(){
    this.saveEmployee();
  }

  saveEmployee(){
    this.employeeService.addEmployee(this.employee).subscribe(
      {
        next: (data) => {
          this.goToEmployeeList();
        }, 
        error: (error: any) => {console.log(error)}
      }
    );
  }

  goToEmployeeList() {
    this.router.navigate(['/employees']);
  }
}
