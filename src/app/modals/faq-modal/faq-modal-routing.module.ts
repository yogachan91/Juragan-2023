import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FaqModalPage } from './faq-modal.page';

const routes: Routes = [
  {
    path: '',
    component: FaqModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FaqModalPageRoutingModule {}
