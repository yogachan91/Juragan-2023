import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Promo2Page } from './promo2.page';

const routes: Routes = [
  {
    path: '',
    component: Promo2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Promo2PageRoutingModule {}
