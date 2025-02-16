import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true, // Importante en Angular 17
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [ RouterOutlet, RouterLink ] // Importamos NG Bootstrap aquí
})
export class AppComponent {
  
}
