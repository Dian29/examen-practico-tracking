
/**
 * Servicio de seguimiento y analítica de eventos.
 * 
 * Proporciona funcionalidades para registrar eventos en la capa de datos global
 * (dataLayer) del navegador, incluyendo información de marca de tiempo.
 * 
 * @example
 * ```typescript
 * constructor(private trackingService: TrackingService) {}
 * 
 * onButtonClick() {
 *   this.trackingService.trackEvent({
 *     event: 'button_click',
 *     button_name: 'submit'
 *   });
 * }
 * ```
 */

/**
 * Inicializa el servicio de seguimiento.
 * 
 * Verifica que exista la capa de datos global (dataLayer) en el objeto window,
 * creándola como un arreglo vacío si no existe.
 */

/**
 * Registra un evento en la capa de datos global.
 * 
 * Agrega un nuevo evento al dataLayer con los datos proporcionados y una
 * marca de tiempo ISO 8601. También registra el evento en la consola del navegador.
 * 
 * @param eventData - Objeto que contiene los datos del evento a registrar
 * 
 * @example
 * ```typescript
 * this.trackingService.trackEvent({
 *   event: 'page_view',
 *   page_title: 'Inicio'
 * });
 * ```
 */
import { Injectable } from '@angular/core';

declare global {
  interface Window {
    dataLayer: any[];
  }
}

@Injectable({ providedIn: 'root' })
export class TrackingService {
  constructor() {
    window.dataLayer = window.dataLayer || [];
  }

  trackEvent(eventData: object): void {
    window.dataLayer.push({
      ...eventData,
      timestamp: new Date().toISOString()
    });
    console.log('[Tracking Event]:', window.dataLayer[window.dataLayer.length - 1]);
  }
}