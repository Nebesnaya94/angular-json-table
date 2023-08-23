import { Component, Input } from '@angular/core';
import { IPost } from 'src/app/shared/models/posts';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input() item!: IPost | undefined;
}
