import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RedeemConfirmPageRoutingModule } from './redeem-confirm-routing.module';

import { RedeemConfirmPage } from './redeem-confirm.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RedeemConfirmPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [RedeemConfirmPage]
})
export class RedeemConfirmPageModule {}
