import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BannerModalPageRoutingModule } from './banner-modal-routing.module';

import { BannerModalPage } from './banner-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BannerModalPageRoutingModule
  ],
  declarations: [BannerModalPage]
})
export class BannerModalPageModule {}
