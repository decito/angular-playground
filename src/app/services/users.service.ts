import { EventEmitter, Injectable } from "@angular/core"

import { LoggingService } from "./logging.service"

@Injectable({ providedIn: 'root' })
export class UsersService {
  statusUpdated = new EventEmitter<number>()

  activeUsers = ['Max', 'Anna']
  inactiveUsers = ['Chris', 'Manu']

  constructor(private loggingService: LoggingService) { }

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
}