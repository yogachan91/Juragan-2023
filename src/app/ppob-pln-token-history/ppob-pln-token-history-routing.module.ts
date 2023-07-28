import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PpobPlnTokenHistoryPage } from './ppob-pln-token-history.page';

const routes: Routes = [
  {
    path: '',
    component: PpobPlnTokenHistoryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PpobPlnTokenHistoryPageRoutingModule {}
