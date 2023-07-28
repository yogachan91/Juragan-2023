import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PpobPlnTokenPage } from './ppob-pln-token.page';

const routes: Routes = [
  {
    path: '',
    component: PpobPlnTokenPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PpobPlnTokenPageRoutingModule {}
