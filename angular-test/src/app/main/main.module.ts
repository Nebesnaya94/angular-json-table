import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './components/main/main.component';
import { MainRoutingModule } from './main-routing.module';
import { SharedModule } from '../shared/shared.module';
import { DetailsComponent } from './components/details/details.component';

@NgModule({
  declarations: [MainComponent, DetailsComponent],
  imports: [CommonModule, MainRoutingModule, SharedModule],
})
export class MainModule {}
