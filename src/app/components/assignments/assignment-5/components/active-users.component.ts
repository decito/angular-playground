import { Component, OnInit } from '@angular/core'

import { UsersService } from '~/services/users.service'

@Component({
  selector: 'app-assignment-5-active-users',
  templateUrl: './active-users.component.html'
})
export class AssignmentFiveActiveUsersComponent implements OnInit {
  users: string[]

  constructor(private usersService: UsersService) {}

  setInactive(id: number) {
    this.usersService.setInactive(id)
  }

  ngOnInit() {
    this.users = this.usersService.activeUsers
  }
}
