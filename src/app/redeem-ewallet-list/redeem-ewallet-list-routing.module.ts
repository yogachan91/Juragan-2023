import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RedeemEwalletListPage } from './redeem-ewallet-list.page';

const routes: Routes = [
  {
    path: '',
    component: RedeemEwalletListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RedeemEwalletListPageRoutingModule {}
