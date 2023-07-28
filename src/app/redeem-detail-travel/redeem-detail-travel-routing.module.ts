import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RedeemDetailTravelPage } from './redeem-detail-travel.page';

const routes: Routes = [
  {
    path: '',
    component: RedeemDetailTravelPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RedeemDetailTravelPageRoutingModule {}
