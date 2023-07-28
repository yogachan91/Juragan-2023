import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RedeemModalPage } from './redeem-modal.page';

const routes: Routes = [
  {
    path: '',
    component: RedeemModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RedeemModalPageRoutingModule {}
