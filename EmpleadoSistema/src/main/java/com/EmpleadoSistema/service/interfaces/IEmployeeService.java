package com.EmpleadoSistema.service.interfaces;

import com.EmpleadoSistema.entity.Employee;
import org.springframework.stereotype.Service;

@Service
public interface IEmployeeService {

    void saveEmployee(Employee employee);
}
