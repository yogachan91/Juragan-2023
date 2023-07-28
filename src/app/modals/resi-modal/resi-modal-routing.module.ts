import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ResiModalPage } from './resi-modal.page';

const routes: Routes = [
  {
    path: '',
    component: ResiModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ResiModalPageRoutingModule {}
