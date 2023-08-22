import { Component, OnDestroy, OnInit } from '@angular/core';
import { PostsService } from '../../services/posts.service';
import { IPost } from 'src/app/shared/models/posts';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit, OnDestroy {
  posts: IPost[] = [];
  postsData!: Subscription;

  constructor(private service: PostsService) {}

  ngOnInit() {
    const data = this.service.getPosts();
    this.postsData = data.subscribe((response) => {
      this.posts = response;
    });
  }

  ngOnDestroy() {
    this.postsData.unsubscribe();
  }
}
