package com.gestorEmpleado.Controller;

import com.gestorEmpleado.Exception.ExceptionNotFound;
import com.gestorEmpleado.Model.Employee;
import com.gestorEmpleado.Service.IEmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("EmployeeApp")
@CrossOrigin(value = "http://localhost:4200")
public class EmployeeController {

    @Autowired private IEmployeeService employeeService;

    @GetMapping("/Employee")
    public List<Employee> getEmployee(){
        return employeeService.getAll();
    }

    @PostMapping("/Employee")
    public Employee addEmployee(@RequestBody Employee employee){
        return employeeService.createEmployee(employee);
    }

    @GetMapping("/Employee/{id}")
    public ResponseEntity<Employee> getEmployeeById(@PathVariable long id){
        Employee employee = employeeService.getById(id);
        if (employee != null){
            return ResponseEntity.ok(employee);
        }else {
           throw new ExceptionNotFound(("No se encontró el ID del empleado"));
        }

    }

    @PutMapping("/Employee/{id}")
    public ResponseEntity<Employee> updateEmployee(@PathVariable long id, @RequestBody Employee employeeReceive){
        Employee employee = employeeService.getById(id);
        employee.setName(employeeReceive.getName());
        employee.setRut(employeeReceive.getRut());
        employee.setAge(employeeReceive.getAge());
        employee.setEmail(employeeReceive.getEmail());
        employee.setSalary(employeeReceive.getSalary());
        employeeService.createEmployee(employee);
        return ResponseEntity.ok(employee);
    }

    @DeleteMapping("/Employee/{id}")
    public ResponseEntity<Map<String, Boolean>> deleteEmployee(@PathVariable long id){
        Employee employee = employeeService.getById(id);
        if (employee == null){
            throw new ExceptionNotFound("No se encontró el empleado para eliminar");
        }
        employeeService.eliminateEmployee(employee.getId());
        Map<String, Boolean> response = new HashMap<>();
        response.put("Eliminado", Boolean.TRUE);
        return ResponseEntity.ok(response);
    }
}
