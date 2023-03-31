import { Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private logged = false

  isAuthenticated() {
    return new Promise(resolve => setTimeout(() => resolve(this.logged), 800))
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
