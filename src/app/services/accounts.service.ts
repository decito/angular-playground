import { EventEmitter, Injectable } from '@angular/core'

import { LoggingService } from './logging.service'

import type { Account } from '~/types'

@Injectable({ providedIn: 'root' })
export class AccountsService {
  accounts: { name: string; status: Account }[] = [
    {
      name: 'Master Account',
      status: 'active'
    },
    {
      name: 'Test Account',
      status: 'inactive'
    },
    {
      name: 'Hidden Account',
      status: 'unknown'
    }
  ]

  statusUpdated = new EventEmitter<string>()

  constructor(private loggingService: LoggingService) {}

  addAccount(name: string, status: Account) {
    this.accounts.push({ name, status })

    this.loggingService.logStatusChange(status)
  }

  updateStatus(id: number, status: Account) {
    this.accounts[id].status = status

    this.statusUpdated.emit(status)

    this.loggingService.logStatusChange(status)
  }
}
