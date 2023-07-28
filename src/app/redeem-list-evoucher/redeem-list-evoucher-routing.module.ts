import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RedeemListEvoucherPage } from './redeem-list-evoucher.page';

const routes: Routes = [
  {
    path: '',
    component: RedeemListEvoucherPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RedeemListEvoucherPageRoutingModule {}
