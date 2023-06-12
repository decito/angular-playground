import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { map } from 'rxjs/internal/operators/map'

import { environment } from 'environment/environment'

import type { Post } from '~/types'

@Injectable({ providedIn: 'root' })
export class PostsService {
  constructor(private http: HttpClient) {}

  createAndStorePost(title: string, content: string) {
    const post: Post = { title: title, content: content }

    this.http
      .post<{ name: string }>(`${environment.domain}/posts.json`, post)
      .subscribe(res => console.info(res))
  }

  fetchPosts() {
    return this.http
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
  }

  deleteAllPosts() {
    return this.http.delete(`${environment.domain}/posts.json`)
  }
}
