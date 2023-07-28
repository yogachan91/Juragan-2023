import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RedeemTagihanPage } from './redeem-tagihan.page';

const routes: Routes = [
  {
    path: '',
    component: RedeemTagihanPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RedeemTagihanPageRoutingModule {}
