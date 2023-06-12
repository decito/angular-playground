import { Component, OnInit } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { map } from 'rxjs/internal/operators/map'

import { environment } from 'environment/environment'

import type { Post } from '~/types'

@Component({
  selector: 'app-http-form',
  templateUrl: './http-form.component.html'
})
export class HttpFormComponent implements OnInit {
  loadedPosts = []

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchPosts()
  }

  onCreatePost(postData: Post) {
    this.http
      .post<{ name: string }>(`${environment.domain}/posts.json`, postData)
      .subscribe(res => console.log(res))
  }

  onFetchPosts() {
    this.fetchPosts()
  }

  onClearPosts() {}

  private fetchPosts() {
    this.http
      .get<{ [key: string]: Post }>(`${environment.domain}/posts.json`)
      .pipe(
        map(res => {
          const posts: Post[] = []

          for (const key in res) {
            if (res.hasOwnProperty(key)) posts.push({ ...res[key], id: key })
          }

          return posts
        })
      )
      .subscribe(posts => (this.loadedPosts = posts))
  }
}
