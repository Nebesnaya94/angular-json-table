import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './components/main/main.component';
import { MainRoutingModule } from './main-routing.module';
import { SharedModule } from '../shared/shared.module';
import { DetailsComponent } from './components/details/details.component';
import { PostsService } from './services/posts.service';

@NgModule({
  declarations: [MainComponent, DetailsComponent],
  imports: [CommonModule, MainRoutingModule, SharedModule],
  providers: [PostsService],
})
export class MainModule {}
