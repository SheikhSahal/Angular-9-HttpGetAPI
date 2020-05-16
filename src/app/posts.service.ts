import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private api: HttpClient) { }
  getPosts(){
    return this.api.get('http://jsonplaceholder.typicode.com/posts');
  }
}
