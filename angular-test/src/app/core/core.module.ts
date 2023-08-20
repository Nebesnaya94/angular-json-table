import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { SharedModule } from '../shared/shared.module';
import { AppRoutingModule } from '../app-routing.module';
import { AuthService } from '../auth/services/auth.service';

@NgModule({
  declarations: [HeaderComponent],
  imports: [CommonModule, SharedModule, AppRoutingModule],
  exports: [HeaderComponent],
  providers: [AuthService],
})
export class CoreModule {}
