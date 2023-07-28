import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RedeemDetailElectronicPageRoutingModule } from './redeem-detail-electronic-routing.module';

import { RedeemDetailElectronicPage } from './redeem-detail-electronic.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RedeemDetailElectronicPageRoutingModule
  ],
  declarations: [RedeemDetailElectronicPage]
})
export class RedeemDetailElectronicPageModule {}
