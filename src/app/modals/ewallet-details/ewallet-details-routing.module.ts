import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EwalletDetailsPage } from './ewallet-details.page';

const routes: Routes = [
  {
    path: '',
    component: EwalletDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EwalletDetailsPageRoutingModule {}
