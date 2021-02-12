import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {Posts} from './posts.model';
import {PostsService} from './posts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  loadedPosts: Posts[] = [];

  constructor(private postService: PostsService) {
  }

  ngOnInit() {
    this.fetchPosts();
  }

  onCreatePost(postData: { title: string; content: string }) {
    // Send Http request
    this.postService.onCreatePost(postData);
    this.fetchPosts();
  }

  fetchPosts() {
    // Send Http request
    this.postService.fetchPosts()
      .subscribe(posts => {
        this.loadedPosts = posts;
        console.log(posts);
      });
  }

  onClearPosts() {
    // Send Http request
  }


}
