import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RedeemConfirmPage } from './redeem-confirm.page';

const routes: Routes = [
  {
    path: '',
    component: RedeemConfirmPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RedeemConfirmPageRoutingModule {}
