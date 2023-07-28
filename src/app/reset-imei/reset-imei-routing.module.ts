import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ResetImeiPage } from './reset-imei.page';

const routes: Routes = [
  {
    path: '',
    component: ResetImeiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ResetImeiPageRoutingModule {}
