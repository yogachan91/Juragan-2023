import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductBlibliPage } from './product-blibli.page';

const routes: Routes = [
  {
    path: '',
    component: ProductBlibliPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductBlibliPageRoutingModule {}
