import { Component, OnDestroy, OnInit } from '@angular/core'
import { ActivatedRoute, Params } from '@angular/router'

import { UsersService } from '~/services/users.service'

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html'
})
export class UserComponent implements OnInit, OnDestroy {
  user: { id: number; name: string }

  constructor(
    private usersService: UsersService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.user = {
      id: this.route.snapshot.params['id'],
      name: this.route.snapshot.params['name']
    }

    this.route.params.subscribe((p: Params) => {
      this.user.id = p['id']
      this.user.name = p['name']
    })

    this.usersService.loadUser()
  }

  ngOnDestroy() {
    this.usersService.unloadUser()
  }
}
