import { Component, OnInit } from '@angular/core'

import { PostsService } from '~/services/posts.service'

import type { Post } from '~/types'

@Component({
  selector: 'app-http-form',
  templateUrl: './http-form.component.html'
})
export class HttpFormComponent implements OnInit {
  loadedPosts = []
  isFetching = false

  constructor(private postsService: PostsService) {}

  ngOnInit(): void {
    this.fetchPosts()
  }

  onCreatePost(postData: Post) {
    this.postsService.createAndStorePost(postData.title, postData.content)
  }

  onFetchPosts() {
    this.fetchPosts()
  }

  onClearPosts() {}

  private fetchPosts() {
    this.isFetching = true

    this.postsService.fetchPosts().subscribe(posts => {
      this.isFetching = false
      this.loadedPosts = posts
    })
  }
}
