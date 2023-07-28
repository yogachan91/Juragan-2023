import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailBelanjaPage } from './detail-belanja.page';

const routes: Routes = [
  {
    path: '',
    component: DetailBelanjaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailBelanjaPageRoutingModule {}
