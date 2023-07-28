import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RedeemOvoPointPageRoutingModule } from './redeem-ovo-point-routing.module';

import { RedeemOvoPointPage } from './redeem-ovo-point.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RedeemOvoPointPageRoutingModule
  ],
  declarations: [RedeemOvoPointPage]
})
export class RedeemOvoPointPageModule {}
