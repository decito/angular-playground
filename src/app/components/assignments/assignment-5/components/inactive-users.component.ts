import { Component, OnInit } from '@angular/core'

import { UsersService } from '~/services/users.service'

@Component({
  selector: 'app-assignment-5-inactive-users',
  templateUrl: './inactive-users.component.html'
})
export class AssignmentFiveInactiveUsersComponent implements OnInit {
  users: string[]

  constructor(private usersService: UsersService) {}

  setActive(id: number) {
    this.usersService.setActive(id)
  }

  ngOnInit() {
    this.users = this.usersService.inactiveUsers
  }
}
