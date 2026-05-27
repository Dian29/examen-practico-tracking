/**
 * Componente principal de la página de inicio (Home)
 * 
 * Gestiona la interfaz inicial de la aplicación, incluyendo:
 * - Configuración y carga de temas visuales basados en parámetros de URL
 * - Captura de entrada de nombre del usuario (voz o manual)
 * - Visualización de modal con el nombre ingresado
 * - Seguimiento de eventos de usuario para análisis
 * 
 * @component
 * @standalone true
 * @imports FormsModule, ButtonComponent, ModalComponent, InputComponent
 * 
 * @property {Signal<ThemeConfiguration>} theme - Tema visual actual aplicado al componente
 * @property {string} name - Nombre ingresado por el usuario (voz o teclado)
 * @property {Signal<string>} displayName - Nombre a mostrar en el modal
 * @property {Signal<boolean>} isOpenModal - Controla la visibilidad del modal
 * @property {Input<string>} num - Número de tema recibido como parámetro de ruta
 * 
 * @example
 * // Uso en enrutamiento
 * { path: 'home/:num', component: HomeComponent }
 * 
 * @see TrackingService - Servicio para registrar eventos del usuario
 * @see VoiceToTextService - Servicio para convertir voz a texto
 */
import { Component, OnInit, signal, inject, input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { THEME_CONFIGS, DEFAULT_THEME, ThemeConfiguration } from '../../config/themes.config';
import { TrackingService } from '../../services/tracking.service';
import { VoiceToTextService } from '../../services/voice-to-text.service';
import { ButtonComponent } from '../button/button.component';
import { ModalComponent } from '../modal/modal.component';
import { InputComponent } from '../input/input.component';

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [FormsModule, ButtonComponent, ModalComponent, InputComponent],
    templateUrl: './home.component.html' // <-- Apunta al archivo HTML externo
})
export class HomeComponent implements OnInit {
    private trackingService = inject(TrackingService);
    protected voiceService = inject(VoiceToTextService);

    theme = signal<ThemeConfiguration>(DEFAULT_THEME);
    name: string = '';
    displayName = signal<string>('');
    isOpenModal = signal<boolean>(false);

    num = input<string>('1');

    ngOnInit(): void {
        const valorParametro = this.num();
        console.log("El número de tema cargado por ruta es:", valorParametro);

        this.voiceService.init();

        const params = new URLSearchParams(window.location.search);
        const numParam = params.get('num');
        const num = numParam ? parseInt(numParam, 10) : 1;

        const selectedTheme = THEME_CONFIGS[num] || DEFAULT_THEME;
        this.theme.set(selectedTheme);

        this.trackingService.trackEvent({
            event: 'theme_loaded',
            num: numParam ? num : 'default_1'
        });
    }

    handleVoiceDictation(): void {
        this.voiceService.startListening((text) => {
            this.name = text.replace(/[.]+$/, "");
            this.trackingService.trackEvent({ event: 'name_input', method: 'voice' });
        });
    }

    handleInputBlur(): void {
        if (this.name.trim()) {
            this.trackingService.trackEvent({ event: 'name_input', method: 'manual' });
        }
    }

    handleSubmit(): void {
        if (!this.name.trim()) return;

        this.displayName.set(this.name);
        this.isOpenModal.set(true);
        this.trackingService.trackEvent({ event: 'name_displayed' });
    }
}