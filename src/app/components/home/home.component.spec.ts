import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeComponent } from './home.component';
import { ActivatedRoute } from '@angular/router';
import { By } from '@angular/platform-browser';
import { signal } from '@angular/core';
import { vi } from 'vitest'; // ⚡ Importante para los Mocks
import { TrackingService } from '../../services/tracking.service';
import { VoiceToTextService } from '../../services/voice-to-text.service';

describe('HomeComponent (Pruebas de Integración)', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  
  // Mocks creados al estilo nativo de Vitest
  let trackingServiceMock: any;
  let voiceToTextServiceMock: any;

  beforeEach(async () => {
    trackingServiceMock = {
      trackEvent: vi.fn() // ✅ Reemplazo de createSpyObj
    };
    
    voiceToTextServiceMock = {
        init: vi.fn(), // Agregado para evitar errores en ngOnInit
      isSupported: vi.fn().mockReturnValue(true),
      isListening: vi.fn().mockReturnValue(false),
      startListening: vi.fn()
    };

    await TestBed.configureTestingModule({
      imports: [HomeComponent],
      providers: [
        { provide: TrackingService, useValue: trackingServiceMock },
        { provide: VoiceToTextService, useValue: voiceToTextServiceMock },
        {
          provide: ActivatedRoute,
          useValue: {
            queryParams: signal({ num: '1' }) 
          }
        }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('debería inicializar el componente y disparar el tracking de carga de tema', () => {
    expect(component).toBeTruthy();
    expect(trackingServiceMock.trackEvent).toHaveBeenCalled();
  });

  it('debería mantener el formulario inválido y el botón deshabilitado si el nombre está vacío', () => {
    component.name = ''; 
    fixture.detectChanges();

    const botonEnviar = fixture.debugElement.query(By.css('app-button[type="submit"]')).componentInstance;
    expect(botonEnviar.disabled()).toBe(true);
  });

  it('debería habilitar el botón de envío en cuanto el usuario escriba su nombre', () => {
    component.name = 'Diana Guadalupe'; 
    fixture.detectChanges();

    const botonEnviar = fixture.debugElement.query(By.css('app-button[type="submit"]')).componentInstance;
    expect(botonEnviar.disabled()).toBe(false);
  });

  it('debería abrir el modal y trackear el evento al enviar el formulario con datos válidos', () => {
    component.name = 'Pablo Martínez';
    fixture.detectChanges();

    component.handleSubmit(); 
    fixture.detectChanges();

    expect(component.isOpenModal()).toBe(true);
    expect(trackingServiceMock.trackEvent).toHaveBeenCalled();
  });
});