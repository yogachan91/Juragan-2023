import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RedeemModalPageRoutingModule } from './redeem-modal-routing.module';

import { RedeemModalPage } from './redeem-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RedeemModalPageRoutingModule
  ],
  declarations: [RedeemModalPage]
})
export class RedeemModalPageModule {}
