import { Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private logged = true

  isAuthenticated() {
    return new Promise(resolve => setTimeout(() => resolve(this.logged), 500))
  }

  logIn() {
    alert('logged in')
    this.logged = true
  }

  logOut() {
    alert('logged out')
    this.logged = false
  }
}
