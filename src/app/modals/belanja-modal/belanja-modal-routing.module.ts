import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BelanjaModalPage } from './belanja-modal.page';

const routes: Routes = [
  {
    path: '',
    component: BelanjaModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BelanjaModalPageRoutingModule {}
