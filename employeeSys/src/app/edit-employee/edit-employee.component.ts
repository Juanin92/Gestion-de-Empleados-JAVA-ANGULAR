import { Component } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html'
})
export class EditEmployeeComponent {
  employee: Employee = new Employee();
  id: number;

  constructor(private employeeService: EmployeeService, private route: ActivatedRoute, private router: Router){}

  ngOnInit(){
    this.id = this.route.snapshot.params['id'];
    this.employeeService.getEmployeeById(this.id).subscribe(
      {
        next: (data) => this.employee = data,
        error: (error: any) => console.log(error)
      }
    );
  }

  onSubmit(){
    this.saveEmployee();
  }

  saveEmployee(){
    this.employeeService.updateEmployee(this.id, this.employee).subscribe(
      {
        next: (data) => this.goToEmployeeList(),
        error: (error) => console.log(error)
      }
    );
  }

  goToEmployeeList(){
    this.router.navigate(['/employees']);
  }
}
