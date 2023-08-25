import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { SharedModule } from '../shared/shared.module';
import { AppRoutingModule } from '../app-routing.module';
import { AuthService } from '../auth/services/auth.service';
import { DialogModalComponent } from './components/dialog/dialog-modal.component';

@NgModule({
  declarations: [HeaderComponent, DialogModalComponent],
  imports: [CommonModule, SharedModule, AppRoutingModule],
  exports: [HeaderComponent],
  providers: [AuthService],
})
export class CoreModule {}
