import { Component } from '@angular/core';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { CommonButtonComponent } from '../../shared/components/common-button/common-button.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CommonButtonComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
})
export class HomePageComponent {
  iconButtonLogin = faUser;
}
