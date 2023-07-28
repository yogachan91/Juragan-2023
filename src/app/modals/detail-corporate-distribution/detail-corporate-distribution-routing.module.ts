import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailCorporateDistributionPage } from './detail-corporate-distribution.page';

const routes: Routes = [
  {
    path: '',
    component: DetailCorporateDistributionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailCorporateDistributionPageRoutingModule {}
