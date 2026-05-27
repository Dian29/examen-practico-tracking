/**
 * Componente de input reutilizable con soporte para etiquetas, tipo, placeholder,
 * validación requerida y reconocimiento de voz (opcional).
 *
 * @component
 * @example
 * // Uso básico
 * <app-input [label]="'Nombre'"></app-input>
 *
 * // Con tipo personalizado y placeholder
 * <app-input [type]="'email'" [placeholder]="'usuario@ejemplo.com'"></app-input>
 *
 * // Con clase CSS personalizada
 * <app-input class="input-md"></app-input>
 *
 * @property {input<string>} label - Texto de la etiqueta asociada al campo. Requerido.
 * @property {input<string>} type - Define el tipo del input HTML (text, email, password, etc.). Por defecto: 'text'
 * @property {input<string>} placeholder - Texto de ayuda dentro del input. Por defecto: ''
 * @property {input<boolean>} required - Indica si el campo es obligatorio. Por defecto: false
 * @property {input<boolean>} isVoiceSupported - Señala si la captura por voz está soportada. Por defecto: false
 * @property {input<boolean>} isListening - Estado de escucha de voz (true si está activo). Por defecto: false
 * @property {output<void>} voiceClick - Evento emitido al activar la funcionalidad de voz
 * @property {model<string>} value - Modelo reactivo que contiene el valor actual del input
 * @property {input<string>} customClass - Clases CSS adicionales aplicadas al componente. Alias: 'class'. Por defecto: ''
 * @property {output<string>} manualInputChange - Evento emitido cuando el usuario cambia el valor manualmente
 */
import { Component, input, model, output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-input',
    standalone: true,
    imports: [FormsModule],
    templateUrl: './input.component.html'
})
export class InputComponent {
    label = input.required<string>();
    type = input<string>('text');
    placeholder = input<string>('');
    required = input<boolean>(false);

    isVoiceSupported = input<boolean>(false);
    isListening = input<boolean>(false);

    voiceClick = output<void>();

    value = model<string>('');
    customClass = input<string>('', { alias: 'class' });

    manualInputChange = output<string>();

    onManualInput(): void {
        this.manualInputChange.emit(this.value());
    }
}