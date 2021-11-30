import { Component, OnInit } from '@angular/core';
import { AccountsService } from './accounts.service';
import { Account } from './entities/account';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css']
})
export class AccountsComponent implements OnInit {

  public tableHeaders =  ["email", "password", "userId"];
  public accounts : Array<Account>;
  public error : any;

  constructor(
    private accountsService : AccountsService
  ) { }

  ngOnInit(): void {
    this.accountsService.fetchAccounts()
    .then((result) => {
      this.accounts = result;
    }).catch((err) => {
      this.error = err;
    });
  }

}
