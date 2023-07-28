import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalNotifPage } from './modal-notif.page';

const routes: Routes = [
  {
    path: '',
    component: ModalNotifPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalNotifPageRoutingModule {}
