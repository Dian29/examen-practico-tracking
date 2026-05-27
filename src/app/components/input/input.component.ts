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
}