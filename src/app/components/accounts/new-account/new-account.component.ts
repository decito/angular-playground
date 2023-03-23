import { Component, OnDestroy } from "@angular/core"
import { Subscription } from "rxjs/internal/Subscription"

import { AccountsService } from 'src/app/services/accounts.service'

import { Account } from "src/app/types/accounts"

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html'
})
export class NewAccountComponent implements OnDestroy {
  accountTypes: Account[] = ['active', 'inactive', 'unknown']

  subscription: Subscription

  constructor(private accountsService: AccountsService) {
    this.subscription = this.accountsService.statusUpdated.subscribe(
      (status: Account) => alert('New Status: ' + status)
    )
  }

  createAccount(accountName: string, accountStatus: Account | string) {
    this.accountsService.addAccount(accountName, accountStatus as Account)
  }

  ngOnDestroy() {
    this.subscription.unsubscribe()
  }
}