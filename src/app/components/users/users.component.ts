import { Component, OnDestroy, OnInit } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { delay } from 'rxjs/internal/operators/delay'
import { Subscription } from 'rxjs/internal/Subscription'

import { UsersService } from 'src/app/services/users.service'

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html'
})
export class UsersComponent implements OnInit, OnDestroy {
  users = this.usersService.users

  subscription: Subscription
  userLoaded = this.usersService.getUserLoaded()

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private usersService: UsersService
  ) {}

  ngOnInit() {
    this.subscription = this.usersService.userLoaded
      .pipe(delay(0))
      .subscribe(u => (this.userLoaded = u))
  }

  onClick() {
    this.router.navigate(['/servers'])
  }

  reloadPage() {
    this.router.navigate(['users'], { queryParams: { reloaded: true } })
  }

  brokenReloadPage() {
    this.router.navigate(['users'], { relativeTo: this.route })
  }

  ngOnDestroy() {
    this.subscription.unsubscribe()
  }
}
