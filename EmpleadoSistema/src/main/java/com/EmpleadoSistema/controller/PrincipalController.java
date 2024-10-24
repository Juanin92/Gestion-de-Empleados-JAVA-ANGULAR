package com.EmpleadoSistema.controller;

import com.EmpleadoSistema.configuration.SpringContext;
import com.EmpleadoSistema.entity.Employee;
import com.EmpleadoSistema.repository.EmployeeRepo;
import javafx.collections.FXCollections;
import javafx.collections.ObservableList;
import javafx.event.ActionEvent;
import javafx.fxml.FXML;
import javafx.fxml.FXMLLoader;
import javafx.fxml.Initializable;
import javafx.scene.control.Button;
import javafx.scene.control.Label;
import javafx.scene.control.TableColumn;
import javafx.scene.control.TableView;
import javafx.scene.control.cell.PropertyValueFactory;
import javafx.scene.layout.AnchorPane;
import javafx.stage.Stage;
import org.springframework.beans.BeansException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationContext;
import org.springframework.context.ApplicationContextAware;
import org.springframework.stereotype.Component;

import java.io.IOException;
import java.net.URL;
import java.util.List;
import java.util.ResourceBundle;
import java.time.LocalDate;

@Component
public class PrincipalController implements Initializable, ApplicationContextAware {

    private ApplicationContext applicationContext;

    @FXML
    private Button btnRegisterView;
    @FXML
    private TableView<Employee> listEmployee;
    @FXML
    private AnchorPane anchorpanePrincipal;
    @FXML
    private Label lblMessage;

    private EmployeeRepo employeeRepo;

    @Override
    public void initialize(URL url, ResourceBundle resourceBundle) {
        // Configurar TableView y cargar datos
        configureTableView();
        loadEmployeeData();
    }

    @Override
    public void setApplicationContext(ApplicationContext applicationContext) throws BeansException {
        this.applicationContext = applicationContext;
        this.employeeRepo = applicationContext.getBean(EmployeeRepo.class);
    }

    private void configureTableView() {
        TableColumn<Employee, Long> idColumn = new TableColumn<>("ID");
        idColumn.setCellValueFactory(new PropertyValueFactory<>("id"));

        TableColumn<Employee, String> nameColumn = new TableColumn<>("Nombre");
        nameColumn.setCellValueFactory(new PropertyValueFactory<>("name"));

        TableColumn<Employee, String> surnameColumn = new TableColumn<>("Apellido");
        surnameColumn.setCellValueFactory(new PropertyValueFactory<>("surname"));

        TableColumn<Employee, String> emailColumn = new TableColumn<>("Email");
        emailColumn.setCellValueFactory(new PropertyValueFactory<>("email"));

        TableColumn<Employee, Integer> incomeColumn = new TableColumn<>("Ingreso");
        incomeColumn.setCellValueFactory(new PropertyValueFactory<>("income"));

        TableColumn<Employee, Boolean> statusColumn = new TableColumn<>("Estado");
        statusColumn.setCellValueFactory(new PropertyValueFactory<>("status"));

        TableColumn<Employee, LocalDate> creationDateColumn = new TableColumn<>("Fecha de Creación");
        creationDateColumn.setCellValueFactory(new PropertyValueFactory<>("creationDate"));

        listEmployee.getColumns().clear(); // Limpiar columnas antes de agregarlas
        listEmployee.getColumns().addAll(idColumn, nameColumn, surnameColumn, emailColumn, incomeColumn, statusColumn, creationDateColumn);
    }

    private void loadEmployeeData() {
        List<Employee> employees = employeeRepo.findAll();
        System.out.println("Employees retrieved: " + employees.size()); // Depuración

        if (employees == null || employees.isEmpty()) {
            System.out.println("No employees found"); // Depuración
            listEmployee.setVisible(false);
            lblMessage.setVisible(true);
        } else {
            System.out.println("Employees: " + employees); // Depuración
            ObservableList<Employee> employeeList = FXCollections.observableArrayList(employees);
            listEmployee.setItems(employeeList);
            listEmployee.setVisible(true);
            lblMessage.setVisible(false);
        }
    }

    @FXML
    private void employeeView(ActionEvent event) throws IOException {
        try {
            FXMLLoader loader = new FXMLLoader(getClass().getResource("/com/EmpleadoSistema/View/registerEmployee.fxml"));
            AnchorPane employeeView = loader.load();

            Stage stage = (Stage) anchorpanePrincipal.getScene().getWindow();
            stage.setTitle("Registro de Empleados");

            anchorpanePrincipal.getChildren().setAll(employeeView);
        } catch (IOException e) {
            e.printStackTrace();
        }
    }


}
