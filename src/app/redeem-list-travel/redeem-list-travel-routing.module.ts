import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RedeemListTravelPage } from './redeem-list-travel.page';

const routes: Routes = [
  {
    path: '',
    component: RedeemListTravelPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RedeemListTravelPageRoutingModule {}
