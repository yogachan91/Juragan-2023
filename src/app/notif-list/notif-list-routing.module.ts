import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotifListPage } from './notif-list.page';

const routes: Routes = [
  {
    path: '',
    component: NotifListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NotifListPageRoutingModule {}
