import { Component, OnInit, effect } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { PostsService } from '../../services/posts.service';
import { IPost } from 'src/app/shared/models/posts';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
  detailsItem: IPost | undefined = undefined;
  detailsItems: IPost[] = [];

  private routerParams!: Subscription;

  constructor(
    public activatedRoute: ActivatedRoute,
    private service: PostsService,
    private router: Router
  ) {
    effect(() => {
      this.detailsItems = this.service.posts();
    });
  }

  ngOnInit() {
    const params = this.activatedRoute.params;
    this.routerParams = params.subscribe((params) => {
      if (!this.detailsItems.length) {
        this.router.navigate(['/main']);
      }
      this.detailsItem = this.detailsItems.find(
        (item) => item.id == params['id']
      );
      console.log(this.detailsItem);
    });
  }

  ngOnDestroy() {
    this.routerParams.unsubscribe();
  }
}
