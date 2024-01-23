import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { EncabezadoComponent } from './components/encabezado/encabezado.component';
import { ContenidoComponent } from './components/contenido/contenido.component';
import { PiePaginaComponent } from './components/pie-pagina/pie-pagina.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,EncabezadoComponent, ContenidoComponent, PiePaginaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'colegio';
}
