import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RolesComponent } from './roles/roles.component';
import { UsersComponent } from './users/users.component';
import { AccountsComponent } from './accounts/accounts.component';
import { ProductsComponent } from './products/products.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { PurchasesComponent } from './purchases/purchases.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatRadioModule } from '@angular/material/radio';

@NgModule({
  declarations: [
    AppComponent,
    RolesComponent,
    UsersComponent,
    AccountsComponent,
    ProductsComponent,
    TransactionsComponent,
    PurchasesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    // material imports
    MatCardModule,
    MatDialogModule,
    MatInputModule,
    MatTableModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatRadioModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
