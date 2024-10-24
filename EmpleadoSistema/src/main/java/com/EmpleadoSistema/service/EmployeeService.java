package com.EmpleadoSistema.service;

import com.EmpleadoSistema.entity.Employee;
import com.EmpleadoSistema.repository.EmployeeRepo;
import com.EmpleadoSistema.service.interfaces.IEmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

@Component
public class EmployeeService implements IEmployeeService {

    @Autowired
    private EmployeeRepo employeeRepo;

    @Override
    public void saveEmployee(Employee employee) {
        employeeRepo.save(employee);
    }
}
