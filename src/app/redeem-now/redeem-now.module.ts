import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RedeemNowPageRoutingModule } from './redeem-now-routing.module';

import { RedeemNowPage } from './redeem-now.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RedeemNowPageRoutingModule
  ],
  declarations: [RedeemNowPage]
})
export class RedeemNowPageModule {}
