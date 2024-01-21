import { Component, Input } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-common-button',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './common-button.component.html',
  styleUrl: './common-button.component.scss',
})
export class CommonButtonComponent {
  @Input() label: string = '';
  @Input() bgColor: string | null = null;
  @Input() fontColor: string = 'white';
  @Input() fontSize: string = '1rem';
  @Input() shadow: boolean = false;
  @Input() width: number = 120;
  @Input() height: number = 40;
  @Input() border: string = 'none';
  @Input() icon: any | null = null;
}
