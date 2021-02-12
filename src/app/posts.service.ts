import {Posts} from './posts.model';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {Injectable} from '@angular/core';
import {error} from '@angular/compiler/src/util';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  constructor(private http: HttpClient) {
  }

  onCreatePost(postData: { title: string; content: string }) {
    // Send Http request
    this.http
      .post<{ [key: string]: Posts }>(
        'https://angular-practice-2a792-default-rtdb.firebaseio.com/posts.json',
        postData
      )
      .subscribe(responseData => {
        console.log(responseData);
      }, error => {
        console.log(error.message);
      });
    this.fetchPosts();
  }

  fetchPosts() {
    return this.http
      .get<{ [key: string]: Posts }>('https://angular-practice-2a792-default-rtdb.firebaseio.com/posts.json')
      .pipe(
        map(responseData => {
          const postsArray = [];
          for (const key in responseData) {
            if (responseData.hasOwnProperty(key)) {
              postsArray.push({...responseData[key], id: key});
            }
          }
          return postsArray;
        })
      );
  }

}
