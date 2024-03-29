import { Component, OnDestroy, OnInit } from '@angular/core'
import { Subscription } from 'rxjs/internal/Subscription'
import { HttpErrorResponse } from '@angular/common/http'

import { PostsService } from '~/services/posts.service'

import type { Post } from '~/types'

@Component({
  selector: 'app-http-form',
  templateUrl: './http-form.component.html'
})
export class HttpFormComponent implements OnInit, OnDestroy {
  loadedPosts = []
  isFetching = false
  isCreating = false
  errorMessage: string
  subscription: Subscription

  constructor(private postsService: PostsService) {}

  ngOnInit(): void {
    this.subscription = this.postsService.errorContent.subscribe(
      err => (this.errorMessage = `${err.status} ${err.statusText}`)
    )

    this.fetchPosts()
  }

  onCreatePost(postData: Post) {
    this.isCreating = true

    this.postsService
      .createAndStorePost(postData.title, postData.content)
      .subscribe({
        complete: () => {
          this.fetchPosts()
          this.isCreating = false
        }
      })
  }

  onFetchPosts() {
    this.fetchPosts()
  }

  onClearPosts() {
    this.postsService.deleteAllPosts().subscribe(() => (this.loadedPosts = []))
  }

  private fetchPosts() {
    this.isFetching = true

    this.postsService.fetchPosts().subscribe({
      next: posts => {
        this.isFetching = false
        this.errorMessage = null
        this.loadedPosts = posts
      },
      error: (err: HttpErrorResponse) => {
        this.isFetching = false
        this.errorMessage = `${err.status} ${err.statusText}`
      }
    })
  }

  onHandleError() {
    this.errorMessage = null
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }
}
