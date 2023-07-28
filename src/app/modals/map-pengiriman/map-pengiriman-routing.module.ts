import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MapPengirimanPage } from './map-pengiriman.page';

const routes: Routes = [
  {
    path: '',
    component: MapPengirimanPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MapPengirimanPageRoutingModule {}
