import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RedeemNowPage } from './redeem-now.page';

const routes: Routes = [
  {
    path: '',
    component: RedeemNowPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RedeemNowPageRoutingModule {}
