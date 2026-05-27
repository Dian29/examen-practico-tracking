/**
 * Componente Modal
 * 
 * Un componente reutilizable que muestra un diálogo modal en la aplicación.
 * Permite mostrar contenido personalizado con un título y controlar su visibilidad.
 * 
 * @component
 * @standalone true
 * 
 * @example
 * <app-modal 
 *  [isOpen]="mostrarModal" 
 *  title="Confirmación" 
 *  content="¿Está seguro?" 
 *  (close)="cerrarModal()" 
 * />
 * 
 * @input isOpen - Controla si el modal está visible o no. Este valor es requerido.
 * @input title - Título del modal. Por defecto es una cadena vacía.
 * @input content - Contenido o mensaje principal del modal. Por defecto es una cadena vacía.
 * @input bgClass - Clase CSS para el fondo del modal. Por defecto es 'bg-slate-800 border border-slate-700'.
 * @input contentClass - Clase CSS para el contenido del modal. Por defecto es 'text-indigo-400'.
 * @input buttonClass - Clase CSS para el botón de cierre del modal. Por defecto es 'bg-slate-700 text-white'.
 * 
 * @output close - Evento que se emite cuando el usuario cierra el modal.
 */
import { Component, input, output } from '@angular/core';
import { ButtonComponent } from '../button/button.component';

@Component({
    selector: 'app-modal',
    standalone: true,
    imports: [ButtonComponent],
    templateUrl: './modal.component.html'
})
export class ModalComponent {
    isOpen = input.required<boolean>();
    title = input<string>('');
    content = input<string>('');
    close = output<void>();
    bgClass = input<string>('bg-slate-800 border border-slate-700');
    contentClass = input<string>('text-indigo-400');
    buttonClass = input<string>('bg-slate-700 text-white');
}