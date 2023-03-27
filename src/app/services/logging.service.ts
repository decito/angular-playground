import { Injectable } from "@angular/core"

@Injectable({ providedIn: 'root' })
export class LoggingService {
  inactiveToActive = 0
  activeToInactive = 0

  logStatusChange(status: string) {
    console.info('A server status changed, new status: ' + status)
  }

  countActiveToInactive() {
    this.activeToInactive++
    console.info(`User status changed to Inactive. Times changed: ${ this.activeToInactive }`)
  }

  countInactiveToActive() {
    this.inactiveToActive++
    console.info(`User status changed to Active. Times changed: ${ this.inactiveToActive }`)
  }
}
