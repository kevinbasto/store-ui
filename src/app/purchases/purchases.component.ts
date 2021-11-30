import { Component, OnInit } from '@angular/core';
import { Purchase } from './entities/purchase';
import { PurchasesService } from './purchases.service';

@Component({
  selector: 'app-purchases',
  templateUrl: './purchases.component.html',
  styleUrls: ['./purchases.component.css']
})
export class PurchasesComponent implements OnInit {

  public tableHeaders = ["purchaseId", "productId", "quantity", "transactionId"]
  public purchases : Array<Purchase>;
  public error : any;

  constructor(
    private purchasesService : PurchasesService
  ) { }

  ngOnInit(): void {
    this.purchasesService.fetchPurchases()
    .then((result) => {
      this.purchases = result;
    }).catch((err) => {
      this.error = err;
    });
  }

}
