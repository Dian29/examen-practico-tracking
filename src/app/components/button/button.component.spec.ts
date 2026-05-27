import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ButtonComponent } from './button.component';
import { By } from '@angular/platform-browser';

describe('ButtonComponent', () => {
    let component: ButtonComponent;
    let fixture: ComponentFixture<ButtonComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [ButtonComponent]
        }).compileComponents();

        fixture = TestBed.createComponent(ButtonComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('debería crear el componente de botón', () => {
        expect(component).toBeTruthy();
    });

    it('debería deshabilitar el botón nativo cuando el input disabled es true', () => {
        fixture.componentRef.setInput('disabled', true);
        fixture.detectChanges();

        const botonNativo = fixture.debugElement.query(By.css('button')).nativeElement;
        // ✅ En Vitest usamos .toBe(true)
        expect(botonNativo.disabled).toBe(true);
    });

    it('debería mantener habilitado el botón nativo por defecto', () => {
        const botonNativo = fixture.debugElement.query(By.css('button')).nativeElement;
        // ✅ En Vitest usamos .toBe(false)
        expect(botonNativo.disabled).toBe(false);
    });
});