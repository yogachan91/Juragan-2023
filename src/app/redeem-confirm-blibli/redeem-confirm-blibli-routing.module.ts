import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RedeemConfirmBlibliPage } from './redeem-confirm-blibli.page';

const routes: Routes = [
  {
    path: '',
    component: RedeemConfirmBlibliPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RedeemConfirmBlibliPageRoutingModule {}
