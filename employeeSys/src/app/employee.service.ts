import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private urlBase = "http://localhost:8080/EmployeeApp/Employee"

  constructor(private httpClient: HttpClient) { }

  getEmployeeList(): Observable<Employee[]>{
    return this.httpClient.get<Employee[]>(this.urlBase);
  }

  addEmployee(employee: Employee): Observable<Object>{
    return this.httpClient.post(this.urlBase, employee);
  }  

  getEmployeeById(id: number){
    return this.httpClient.get<Employee>(`${this.urlBase}/${id}`);
  }

  updateEmployee(id: number, employee: Employee): Observable<Object>{
    return this.httpClient.put(`${this.urlBase}/${id}`, employee);
  }

  deleteEmployee(id: number): Observable<Object>{
    return this.httpClient.delete<Employee>(`${this.urlBase}/${id}`);
  }
}