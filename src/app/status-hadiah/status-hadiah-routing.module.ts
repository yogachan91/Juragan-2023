import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StatusHadiahPage } from './status-hadiah.page';

const routes: Routes = [
  {
    path: '',
    component: StatusHadiahPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StatusHadiahPageRoutingModule {}
