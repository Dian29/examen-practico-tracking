import { TestBed } from '@angular/core/testing';
import { App } from './app';
import { provideRouter } from '@angular/router';

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
      providers: [
        provideRouter([]) // Proveemos una matriz de rutas vacía para el entorno de pruebas
      ]
    }).compileComponents();
  });

  it('debería crear la aplicación raíz (App)', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('debería renderizar el contenedor de rutas de Angular', () => {
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;

    // Verificamos de forma segura que la directiva estructural del router esté presente en el DOM
    expect(compiled.querySelector('router-outlet')).toBeDefined();
  });
});
