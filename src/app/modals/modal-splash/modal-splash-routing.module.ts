import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalSplashPage } from './modal-splash.page';

const routes: Routes = [
  {
    path: '',
    component: ModalSplashPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalSplashPageRoutingModule {}
