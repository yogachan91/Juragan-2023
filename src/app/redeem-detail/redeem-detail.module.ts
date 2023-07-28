import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RedeemDetailPageRoutingModule } from './redeem-detail-routing.module';

import { RedeemDetailPage } from './redeem-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RedeemDetailPageRoutingModule
  ],
  declarations: [RedeemDetailPage]
})
export class RedeemDetailPageModule {}
