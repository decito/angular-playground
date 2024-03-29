import { Component, Input } from '@angular/core'

import { AccountsService } from '~/services/accounts.service'

import type { Account } from '~/types'

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html'
})
export class AccountComponent {
  @Input() account: { name: string; status: Account }
  @Input() id: number

  constructor(private accountsService: AccountsService) {}

  changeStatus(newStatus: Account) {
    this.accountsService.updateStatus(this.id, newStatus)
  }
}
