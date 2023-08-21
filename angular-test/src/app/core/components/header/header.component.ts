import { Component, effect } from '@angular/core';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  isAuthorized!: boolean;

  constructor(private authService: AuthService) {
    effect(() => {
      this.isAuthorized = this.authService.isLogged();
    });
  }
}
