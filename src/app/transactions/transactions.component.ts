import { Component, OnInit } from '@angular/core';
import { Transaction } from './entities/transaction';
import { TransactionsService } from './transactions.service';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css']
})
export class TransactionsComponent implements OnInit {

  public tableHeaders = ["transactionId", "subtotal", "tax", "userId"]
  public transactions : Array<Transaction>;
  public error : any;

  constructor(
    private transactionsService : TransactionsService
  ) { }

  ngOnInit(): void {
    this.transactionsService.fetchTransactions()
    .then((result) => {
      this.transactions = result;
    }).catch((err) => {
      this.error = err;
    });
  }

}
