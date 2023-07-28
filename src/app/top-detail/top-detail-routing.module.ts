import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TopDetailPage } from './top-detail.page';

const routes: Routes = [
  {
    path: '',
    component: TopDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TopDetailPageRoutingModule {}
