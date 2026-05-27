import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InputComponent } from './input.component';
import { By } from '@angular/platform-browser';
import { vi } from 'vitest';

describe('InputComponent', () => {
  let component: InputComponent;
  let fixture: ComponentFixture<InputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputComponent] // Al ser Standalone, se importa directamente aquí
    }).compileComponents();

    fixture = TestBed.createComponent(InputComponent);
    component = fixture.componentInstance;
    
    // Configuramos los inputs requeridos mínimos para evitar errores de inicialización
    fixture.componentRef.setInput('label', 'Tu Nombre');
    fixture.detectChanges();
  });

  it('debería crear el componente', () => {
    expect(component).toBeTruthy();
  });

  it('debería renderizar la etiqueta label correctamente', () => {
    const labelEl = fixture.debugElement.query(By.css('label')).nativeElement;
    expect(labelEl.textContent).toContain('Tu Nombre');
  });

  it('debería aplicar las clases dinámicas de customClass al input', () => {
    const clasesDePrueba = 'bg-stone-100 border-stone-300 text-stone-900';
    fixture.componentRef.setInput('class', clasesDePrueba);
    fixture.detectChanges();

    const inputEl = fixture.debugElement.query(By.css('input')).nativeElement;
    expect(inputEl.className).toContain('bg-stone-100');
    expect(inputEl.className).toContain('border-stone-300');
  });

  it('debería emitir el evento voiceClick al presionar el botón del micrófono', () => {
    fixture.componentRef.setInput('isVoiceSupported', true);
    fixture.detectChanges();

    // ✅ Cambiamos spyOn por vi.spyOn
    vi.spyOn(component.voiceClick, 'emit'); 

    const botonMicrofono = fixture.debugElement.query(By.css('button'));
    botonMicrofono.nativeElement.click();

    expect(component.voiceClick.emit).toHaveBeenCalled();
  });
});