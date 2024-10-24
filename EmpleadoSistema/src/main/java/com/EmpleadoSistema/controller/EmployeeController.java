package com.EmpleadoSistema.controller;

import com.EmpleadoSistema.entity.Employee;
import com.EmpleadoSistema.repository.EmployeeRepo;
import com.EmpleadoSistema.service.EmployeeService;
import com.EmpleadoSistema.service.interfaces.IEmployeeService;
import javafx.event.ActionEvent;
import javafx.fxml.FXML;
import javafx.fxml.FXMLLoader;
import javafx.scene.control.Button;
import javafx.scene.control.Label;
import javafx.scene.control.TextField;
import javafx.scene.layout.AnchorPane;
import javafx.stage.Stage;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.io.IOException;

@Component
public class EmployeeController {

    @Autowired
    private EmployeeService employeeService;

    @Autowired
    private EmployeeRepo employeeRepo;

    @FXML
    private TextField txtName, txtSurname, txtEmail, txtIncome;
    @FXML
    private Button btnRegister, btnClean, btnBackPrincipal;
    @FXML
    private Label lblMessage;
    @FXML
    private AnchorPane anchorpanePrincipal,anchorPane;

    @FXML
    public void saveEmployee(){
        if (!txtName.getText().trim().isEmpty()){
            Employee employee = new Employee();
            employee.setName(employee.getName());
            employee.setSurname(employee.getSurname());
            employee.setEmail(employee.getEmail());
            employee.setIncome(employee.getIncome());
            employee.setStatus(true);

//            LocalDate localDate = employee.getCreationDate();
//            Date date = Date.from(localDate.atStartOfDay(ZoneId.systemDefault()).toInstant());
//            employee.setCreationDate(date);
//            employeeService.saveEmployee(employee);
            employeeRepo.save(employee);
            lblMessage.setVisible(true);
            lblMessage.setText("Empleado creado Exitosamente!");
        }else{
            lblMessage.setVisible(true);
            lblMessage.setText("Debe ingresar datos!");
        }
    }

    @FXML
    private void back(ActionEvent event) throws IOException {
        try {
            FXMLLoader loader = new FXMLLoader(getClass().getResource("/com/EmpleadoSistema/View/principalView.fxml"));
            AnchorPane principalView = loader.load();

            Stage stage = (Stage) anchorpanePrincipal.getScene().getWindow();
            stage.setTitle("Registro de Empleados");

            anchorpanePrincipal.getChildren().setAll(principalView);
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    @FXML
    public void clean(){

        anchorPane.getChildren().forEach(node -> {
            if (node instanceof TextField)((TextField) node).clear();
        });
    }
}
