import { Injectable } from '@angular/core'
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject'

import { LoggingService } from './logging.service'

@Injectable({ providedIn: 'root' })
export class UsersService {
  userLoaded = new BehaviorSubject(false)

  activeUsers = ['Max', 'Anna', 'Fulano', 'Sicrano', 'Beltrano', 'Jaimerson']
  inactiveUsers = ['Chris', 'Manu', 'João', 'Maria', 'Zé da Manga']

  users = [
    { id: 1, name: 'Foo' },
    { id: 2, name: 'Bar' },
    { id: 3, name: 'Viz' }
  ]

  constructor(private loggingService: LoggingService) {}

  setActive(id: number) {
    this.activeUsers.push(this.inactiveUsers[id])
    this.inactiveUsers.splice(id, 1)

    this.loggingService.countActiveToInactive()
  }

  setInactive(id: number) {
    this.inactiveUsers.push(this.activeUsers[id])
    this.activeUsers.splice(id, 1)

    this.loggingService.countInactiveToActive()
  }

  setDragActive(list: string[]) {
    this.activeUsers = list
  }

  setDragInactive(list: string[]) {
    this.inactiveUsers = list
  }

  getDragUsers(key: string) {
    return key === 'active-users' ? this.activeUsers : this.inactiveUsers
  }

  getUserLoaded() {
    return this.userLoaded.getValue()
  }

  loadUser() {
    this.userLoaded.next(true)
  }

  unloadUser() {
    this.userLoaded.next(false)
  }
}
