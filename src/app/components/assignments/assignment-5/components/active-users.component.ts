import { Component, OnInit } from "@angular/core"

import { UsersService } from "src/app/services/users.service"

@Component({
  selector: 'app-assignment-5-inactive-users',
  templateUrl: './active-users.component.html'
})
export class AssignmentFiveInactiveUsersComponent implements OnInit {
  users: string[]

  constructor(private usersService: UsersService) { }

  setInactive(id: number) {
    this.usersService.setInactive(id)
  }

  ngOnInit() {
    this.users = this.usersService.activeUsers
  }
}