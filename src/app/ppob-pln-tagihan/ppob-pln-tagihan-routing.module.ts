import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PpobPlnTagihanPage } from './ppob-pln-tagihan.page';

const routes: Routes = [
  {
    path: '',
    component: PpobPlnTagihanPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PpobPlnTagihanPageRoutingModule {}
