import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RedeemDetailEvoucherPageRoutingModule } from './redeem-detail-evoucher-routing.module';

import { RedeemDetailEvoucherPage } from './redeem-detail-evoucher.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RedeemDetailEvoucherPageRoutingModule
  ],
  declarations: [RedeemDetailEvoucherPage]
})
export class RedeemDetailEvoucherPageModule {}
