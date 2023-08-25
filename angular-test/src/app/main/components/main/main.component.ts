import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { PostsService } from '../../services/posts.service';
import { IPost } from 'src/app/shared/models/posts';
import { Subscription } from 'rxjs';
import { MatPaginator } from '@angular/material/paginator';
import {
  MatTableDataSource,
  MatTableDataSourcePaginator,
} from '@angular/material/table';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit, OnDestroy {
  posts: IPost[] = [];
  postsData!: Subscription;
  displayedColumns: string[] = ['id', 'userName', 'title'];
  dataSource!: MatTableDataSource<IPost, MatTableDataSourcePaginator>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private service: PostsService) {}

  ngOnInit() {
    const data = this.service.getPosts();
    this.postsData = data.subscribe((response) => {
      this.posts = response;
      this.dataSource = new MatTableDataSource<IPost>(this.posts);
      this.dataSource.paginator = this.paginator;
    });
  }

  ngOnDestroy() {
    this.postsData.unsubscribe();
  }
}
