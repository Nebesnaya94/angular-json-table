import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './components/main/main.component';
import { MainRoutingModule } from './main-routing.module';
import { SharedModule } from '../shared/shared.module';
import { DetailsComponent } from './components/details/details.component';
import { PostsService } from './services/posts.service';
import { CardComponent } from './components/card/card.component';

@NgModule({
  declarations: [MainComponent, DetailsComponent, CardComponent],
  imports: [CommonModule, MainRoutingModule, SharedModule],
  providers: [PostsService],
})
export class MainModule {}
