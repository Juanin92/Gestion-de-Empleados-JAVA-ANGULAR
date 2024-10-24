package com.EmpleadoSistema;

import javafx.application.Application;
import javafx.fxml.FXMLLoader;
import javafx.scene.Scene;
import javafx.scene.control.Button;
import javafx.scene.image.Image;
import javafx.scene.layout.BorderPane;
import javafx.scene.layout.StackPane;
import javafx.scene.web.WebView;
import javafx.stage.Stage;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ConfigurableApplicationContext;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan(basePackages = "com.EmpleadoSistema")
public class EmpleadoSistemaApplication extends Application {

	private static ConfigurableApplicationContext context;

	public static void main(String[] args) {
		Application.launch(args);
	}

	@Override
	public void init(){
		context = SpringApplication.run(EmpleadoSistemaApplication.class);
	}

	@Override
	public void start(Stage stage) throws Exception {
		FXMLLoader loader = new FXMLLoader(getClass().getResource("/com/EmpleadoSistema/View/principalView.fxml"));
		loader.setControllerFactory(context::getBean);

		Scene scene = new Scene(loader.load());
		Image icon = new Image("/com/EmpleadoSistema/View/img/iconView.png");
		stage.getIcons().add(icon);
		stage.setTitle("Sistema de Registro Empleados");
		stage.setScene(scene);
		stage.show();
	}

	@Override
	public void stop(){
		context.close();
	}
}
