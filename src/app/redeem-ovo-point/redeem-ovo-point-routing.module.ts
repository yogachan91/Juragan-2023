import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RedeemOvoPointPage } from './redeem-ovo-point.page';

const routes: Routes = [
  {
    path: '',
    component: RedeemOvoPointPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RedeemOvoPointPageRoutingModule {}
