import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RedeemEwalletPage } from './redeem-ewallet.page';

const routes: Routes = [
  {
    path: '',
    component: RedeemEwalletPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RedeemEwalletPageRoutingModule {}
