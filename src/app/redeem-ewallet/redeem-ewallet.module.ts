import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RedeemEwalletPageRoutingModule } from './redeem-ewallet-routing.module';

import { RedeemEwalletPage } from './redeem-ewallet.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RedeemEwalletPageRoutingModule
  ],
  declarations: [RedeemEwalletPage]
})
export class RedeemEwalletPageModule {}
