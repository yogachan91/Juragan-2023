import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BannerModalPage } from './banner-modal.page';

const routes: Routes = [
  {
    path: '',
    component: BannerModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BannerModalPageRoutingModule {}
