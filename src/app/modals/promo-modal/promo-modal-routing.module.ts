import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PromoModalPage } from './promo-modal.page';

const routes: Routes = [
  {
    path: '',
    component: PromoModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PromoModalPageRoutingModule {}
