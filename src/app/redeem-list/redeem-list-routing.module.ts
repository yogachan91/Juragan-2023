import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RedeemListPage } from './redeem-list.page';

const routes: Routes = [
  {
    path: '',
    component: RedeemListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RedeemListPageRoutingModule {}
