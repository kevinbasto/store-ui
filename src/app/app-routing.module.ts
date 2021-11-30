import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountsComponent } from './accounts/accounts.component';
import { ProductsComponent } from './products/products.component';
import { PurchasesComponent } from './purchases/purchases.component';
import { RolesComponent } from './roles/roles.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'roles',
    pathMatch: 'full'
  },
  {
    path: 'roles',
    component: RolesComponent
  },
  {
    path: 'users',
    component: UsersComponent
  },
  {
    path: 'accounts',
    component: AccountsComponent
  },
  {
    path: 'products',
    component: ProductsComponent
  },
  {
    path: 'transactions',
    component: TransactionsComponent
  },
  {
    path: 'purchases',
    component: PurchasesComponent
  },
  {
    path: '**',
    redirectTo: 'roles'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
