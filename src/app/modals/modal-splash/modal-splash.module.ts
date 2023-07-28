import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalSplashPageRoutingModule } from './modal-splash-routing.module';

import { ModalSplashPage } from './modal-splash.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalSplashPageRoutingModule
  ],
  declarations: [ModalSplashPage]
})
export class ModalSplashPageModule {}
