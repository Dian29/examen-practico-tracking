/**
 * Servicio para convertir voz a texto utilizando la API Web Speech Recognition.
 * 
 * Proporciona funcionalidad para inicializar el reconocimiento de voz,
 * detectar si el navegador lo soporta y capturar el audio del usuario
 * para convertirlo en texto.
 * 
 */
/**
 * Inicializa el servicio de reconocimiento de voz.
 * Detecta si el navegador soporta la API Web Speech Recognition,
 * configura el idioma a español (México) y establece los listeners
 * para los eventos de inicio y fin de escucha.
 */

/**
 * Inicia el proceso de captura de voz.
 * Cuando se detecta audio, ejecuta la función callback proporcionada
 * con el texto transcrito como parámetro.
 * 
 * @param {Function} onResult - Función callback que recibe el texto transcrito.
 *                              Se ejecuta cuando el usuario termina de hablar.
 */
import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class VoiceToTextService {
  private recognition: any;
  
  // Signals reactivos para el estado
  isListening = signal<boolean>(false);
  isSupported = signal<boolean>(false);

  init(): void {
    const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    if (SpeechRecognition) {
      this.isSupported.set(true);
      this.recognition = new SpeechRecognition();
      this.recognition.continuous = false;
      this.recognition.lang = 'es-MX';
      this.recognition.interimResults = false;

      this.recognition.onstart = () => this.isListening.set(true);
      this.recognition.onend = () => this.isListening.set(false);
    }
  }

  startListening(onResult: (text: string) => void): void {
    if (!this.recognition) return;

    this.recognition.onresult = (event: any) => {
      const transcript = event.results[0][0].transcript;
      onResult(transcript);
    };

    if (!this.isListening()) {
      this.recognition.start();
    }
  }
}
