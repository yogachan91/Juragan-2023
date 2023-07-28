import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RedeemDetailPage } from './redeem-detail.page';

const routes: Routes = [
  {
    path: '',
    component: RedeemDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RedeemDetailPageRoutingModule {}
