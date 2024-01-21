import { Component } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { faUser } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
})
export class HomePageComponent {
  iconButtonLogin = faUser;
}
