import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RedeemStatusPageRoutingModule } from './redeem-status-routing.module';

import { RedeemStatusPage } from './redeem-status.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RedeemStatusPageRoutingModule
  ],
  declarations: [RedeemStatusPage]
})
export class RedeemStatusPageModule {}
