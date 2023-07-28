import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RedeemDetailElectronicPage } from './redeem-detail-electronic.page';

const routes: Routes = [
  {
    path: '',
    component: RedeemDetailElectronicPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RedeemDetailElectronicPageRoutingModule {}
