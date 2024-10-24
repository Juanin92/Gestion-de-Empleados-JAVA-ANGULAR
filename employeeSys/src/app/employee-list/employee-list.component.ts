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

  constructor(private employeeService: EmployeeService, private router: Router){}

  ngOnInit(){
    this.getEmployee();
  }

  private getEmployee(){
    this.employeeService.getEmployeeList().subscribe(
      (data => {
        this.employees = data;
      })
    );
  }

  editEmployee(id: number){
    this.router.navigate(['editEmployee', id]);
  }

  deleteEmployee(id: number){
    this.employeeService.deleteEmployee(id).subscribe(
      {
        next: (data) => this.getEmployee(),
        error: (error) => console.log(error)
      }
    );
  }
}
