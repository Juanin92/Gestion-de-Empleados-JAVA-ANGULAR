import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  // URL base para las operaciones relacionadas con empleados
  private urlBase = "http://localhost:8080/EmployeeApp/Employee"

  //HttpClient: Un servicio que permite realizar solicitudes HTTP (GET, POST, PUT, DELETE) a servidores.
  constructor(private httpClient: HttpClient) { }

  // Observable: Un tipo de objeto que permite trabajar con valores que pueden llegar en el futuro, 
  //especialmente útil en operaciones asíncronas como solicitudes HTTP.
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