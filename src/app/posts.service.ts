import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  private baseUrl = 'http://jsonplaceholder.typicode.com/posts';

  constructor(private httpClient: HttpClient) { }

  getPosts(id: number) {
    const url = `${this.baseUrl}?id=${id}`;
    return this.httpClient.get(url);
  }
}
