import { Component } from '@angular/core'

import { AuthService } from '~/services/auth.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  title = 'Angular Playground'

  constructor(private authService: AuthService) {}

  login() {
    this.authService.logIn()
  }

  logout() {
    this.authService.logOut()
  }

  // isLoggedIn() {
  //   return this.authService.isAuthenticated()
  // }
}
