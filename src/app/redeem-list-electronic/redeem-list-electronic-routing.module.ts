import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RedeemListElectronicPage } from './redeem-list-electronic.page';

const routes: Routes = [
  {
    path: '',
    component: RedeemListElectronicPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RedeemListElectronicPageRoutingModule {}
