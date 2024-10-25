import { Component } from '@angular/core';

/**
 * Este código establece la base de la aplicación Angular, 
 * definiendo cómo se verá y qué contenido se mostrará inicialmente. 
 * Es un punto de partida que se puede expandir a medida que se agregan 
 * más componentes y funcionalidades a la aplicación.
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'employeeSys';
}
