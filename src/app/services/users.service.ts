import { EventEmitter, Injectable } from "@angular/core"
import { BehaviorSubject } from "rxjs/internal/BehaviorSubject"

import { LoggingService } from "./logging.service"

@Injectable({ providedIn: 'root' })
export class UsersService {
  statusUpdated = new EventEmitter<number>()

  userLoaded = new BehaviorSubject(false)

  activeUsers = ['Max', 'Anna']
  inactiveUsers = ['Chris', 'Manu']

  users = [
    { id: 1, name: 'Foo' },
    { id: 2, name: 'Bar' },
    { id: 3, name: 'Viz' }
  ]

  constructor(private loggingService: LoggingService) { }

  setActive(id: number) {
    this.activeUsers.push(this.inactiveUsers[id])
    this.inactiveUsers.splice(id, 1)

    this.loggingService.countActiveToInactive()
  }

  getuserLoaded() {
    return this.userLoaded.getValue()
  }

  loadUser() {
    this.userLoaded.next(true)
  }

  unloadUser() {
    this.userLoaded.next(false)
  }

  setInactive(id: number) {
    this.inactiveUsers.push(this.activeUsers[id])
    this.activeUsers.splice(id, 1)

    this.loggingService.countInactiveToActive()
  }
}