import { Component, effect } from '@angular/core';
import { AuthService } from 'src/app/auth/services/auth.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogModalComponent } from '../dialog/dialog-modal.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  isAuthorized!: boolean;

  constructor(private authService: AuthService, public dialog: MatDialog) {
    effect(() => {
      this.isAuthorized = this.authService.isLogged();
    });
  }

  openDialog() {
    this.dialog.open(DialogModalComponent);
  }
}
