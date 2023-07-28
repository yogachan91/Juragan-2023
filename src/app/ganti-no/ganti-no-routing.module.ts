import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GantiNoPage } from './ganti-no.page';

const routes: Routes = [
  {
    path: '',
    component: GantiNoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GantiNoPageRoutingModule {}
