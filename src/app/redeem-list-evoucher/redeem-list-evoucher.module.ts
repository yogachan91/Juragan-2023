import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RedeemListEvoucherPageRoutingModule } from './redeem-list-evoucher-routing.module';

import { RedeemListEvoucherPage } from './redeem-list-evoucher.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RedeemListEvoucherPageRoutingModule
  ],
  declarations: [RedeemListEvoucherPage]
})
export class RedeemListEvoucherPageModule {}
