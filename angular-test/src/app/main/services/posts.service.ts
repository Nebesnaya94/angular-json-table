import { HttpClient } from '@angular/common/http';
import { Injectable, WritableSignal, signal } from '@angular/core';
import { EMPTY, Observable, catchError, map, switchMap } from 'rxjs';
import { IPost } from 'src/app/shared/models/posts';
import {
  IResponseUser,
  IResponseUserNames,
  IResponsePost,
} from 'src/app/shared/models/response';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  private API_URL = 'https://jsonplaceholder.typicode.com';

  posts: WritableSignal<IPost[]> = signal([]);

  constructor(private http: HttpClient) {}

  getPosts(): Observable<IPost[]> {
    return this.http.get<IResponseUser[]>(`${this.API_URL}/users`).pipe(
      switchMap((usersResponse: IResponseUser[]) => {
        const userList: IResponseUserNames = usersResponse.reduce(
          (acc: IResponseUserNames, user: IResponseUser) => {
            acc[user.id] = user.username;
            return acc;
          },
          {}
        );

        return this.http.get<IResponsePost[]>(`${this.API_URL}/posts`).pipe(
          map((postsResponse: IResponsePost[]) => {
            const result = postsResponse.map((post: IResponsePost) => ({
              ...post,
              userName: userList[post.userId],
            }));
            console.log(result);

            this.posts.set(result);
            return result;
          })
        );
      }),
      catchError((error) => {
        console.log('Service error:', error);
        return EMPTY;
      })
    );
  }
}
