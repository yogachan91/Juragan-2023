import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RedeemDetailEvoucherPage } from './redeem-detail-evoucher.page';

const routes: Routes = [
  {
    path: '',
    component: RedeemDetailEvoucherPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RedeemDetailEvoucherPageRoutingModule {}
