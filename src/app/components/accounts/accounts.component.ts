import { Component, OnInit } from '@angular/core';

import { AccountsService } from 'src/app/services/accounts.service';
import { Account } from 'src/app/types/accounts'

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html'
})
export class AccountsComponent implements OnInit {
  accounts: { name: string, status: Account }[] = [];

  constructor(private accountsService: AccountsService) { }

  ngOnInit() {
    this.accounts = this.accountsService.accounts
  }
}
