import { Component, OnInit } from '@angular/core'

import { UsersService } from 'src/app/services/users.service'

@Component({
  selector: 'app-assignment-5-active-users',
  templateUrl: './inactive-users.component.html'
})
export class AssignmentFiveActiveUsersComponent implements OnInit {
  users: string[]

  constructor(private usersService: UsersService) { }

  setActive(id: number) {
    this.usersService.setActive(id)
  }

  ngOnInit() {
    this.users = this.usersService.inactiveUsers
  }
}
