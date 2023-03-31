import { CanActivate, Router, CanActivateChild } from '@angular/router'

import { AuthService } from './auth.service'
import { Observable } from 'rxjs/internal/Observable'
import { Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): boolean | Observable<boolean> | Promise<boolean> {
    return this.authService.isAuthenticated().then((auth: boolean) => {
      if (auth) {
        return true
      } else {
        this.router.navigate(['/users'])
        return false
      }
    })
  }

  canActivateChild(): boolean | Observable<boolean> | Promise<boolean> {
    return this.canActivate()
  }
}
