import { Component } from "@angular/core"

import { AccountsService } from 'src/app/services/accounts.service'

import { Account } from "src/app/types/accounts"

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html'
})
export class NewAccountComponent {
  accountTypes: Account[] = ['active', 'inactive', 'unknown']

  constructor(private accountsService: AccountsService) {
    this.accountsService.statusUpdated.subscribe(
      (status: Account) => alert('New Status: ' + status)
    )
  }

  createAccount(accountName: string, accountStatus: Account | string) {
    this.accountsService.addAccount(accountName, accountStatus as Account)
  }
}