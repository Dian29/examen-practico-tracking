/**
 * Componente de botón reutilizable con soporte para tipos y clases CSS personalizadas.
 * 
 * @component
 * @example
 * // Uso básico
 * <app-button>Aceptar</app-button>
 * 
 * // Con tipo personalizado
 * <app-button [type]="'submit'">Enviar</app-button>
 * 
 * // Con clase CSS
 * <app-button class="btn-primary">Guardar</app-button>
 * 
 * @property {input<string>} type - Define el tipo de botón HTML (button, submit, reset, etc.). Por defecto: 'button'
 * @property {input<string>} customClass - Clases CSS personalizadas aplicadas al botón. Se utiliza el alias 'class' para mayor facilidad. Por defecto: ''
 * @property {input<boolean>} disabled - Controla si el botón está deshabilitado. Por defecto: false
 */
import { Component, input } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  templateUrl: './button.component.html'
})
export class ButtonComponent {
  type = input<string>('button');
  customClass = input<string>('', { alias: 'class' });
  disabled = input<boolean>(false);
}