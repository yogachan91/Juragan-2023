import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PpobPlnTokenHistoryDetailsPage } from './ppob-pln-token-history-details.page';

const routes: Routes = [
  {
    path: '',
    component: PpobPlnTokenHistoryDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PpobPlnTokenHistoryDetailsPageRoutingModule {}
