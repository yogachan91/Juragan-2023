import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RedeemTagihanPageRoutingModule } from './redeem-tagihan-routing.module';

import { RedeemTagihanPage } from './redeem-tagihan.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RedeemTagihanPageRoutingModule
  ],
  declarations: [RedeemTagihanPage]
})
export class RedeemTagihanPageModule {}
