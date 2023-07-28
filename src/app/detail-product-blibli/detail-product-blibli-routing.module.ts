import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailProductBlibliPage } from './detail-product-blibli.page';

const routes: Routes = [
  {
    path: '',
    component: DetailProductBlibliPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailProductBlibliPageRoutingModule {}
