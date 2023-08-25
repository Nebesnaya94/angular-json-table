import { Component } from '@angular/core';
import { AuthService } from 'src/app/auth/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dialog-modal',
  templateUrl: 'dialog-modal.component.html',
})
export class DialogModalComponent {
  constructor(private authService: AuthService, private router: Router) {}

  logOut() {
    this.authService.logout();
    this.router.navigate(['auth', 'log-in']);
  }
}
