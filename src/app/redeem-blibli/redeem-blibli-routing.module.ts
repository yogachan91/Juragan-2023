import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RedeemBlibliPage } from './redeem-blibli.page';

const routes: Routes = [
  {
    path: '',
    component: RedeemBlibliPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RedeemBlibliPageRoutingModule {}
