import { CanActivate, Router, CanActivateChild } from '@angular/router'

import { AuthService } from '~/services/auth.service'
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

// import { inject} from '@angular/core';
// import { CanActivateFn, Router } from '@angular/router';
// import { AuthService } from './auth.service';

// export const authGuard: CanActivateFn = (): Promise<boolean> => {
//   const authService = inject(AuthService);
//   const router = inject(Router);
//   return authService.isUserLoggedIn().then((res) => {
//     if (res) {
//       return true;
//     } else {
//       router.navigate(['/']);
//       return false;
//     }
//   });
// };
