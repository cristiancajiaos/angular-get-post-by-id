import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { Post } from './post';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  url = 'https://jsonplaceholder.typicode.com/posts';

  constructor(
    private http: HttpClient
  ) { }

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(`${this.url}`).pipe(
      catchError((error: any): Observable<any> => {
        return of({});
      })
    );
  }
}
