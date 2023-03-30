import { Injectable } from '@angular/core'

@Injectable()
export class AuthService {
  private logged = false

  isAuthenticated() {
    return new Promise((resolve, reject) =>
      setTimeout(() => resolve(this.logged), 800)
    )
  }

  logIn() {
    this.logged = true
  }

  logOut() {
    this.logged = false
  }
}
