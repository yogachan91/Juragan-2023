import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RedeemListElectronicPageRoutingModule } from './redeem-list-electronic-routing.module';

import { RedeemListElectronicPage } from './redeem-list-electronic.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RedeemListElectronicPageRoutingModule
  ],
  declarations: [RedeemListElectronicPage]
})
export class RedeemListElectronicPageModule {}
