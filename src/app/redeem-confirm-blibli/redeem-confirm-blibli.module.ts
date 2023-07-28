import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RedeemConfirmBlibliPageRoutingModule } from './redeem-confirm-blibli-routing.module';

import { RedeemConfirmBlibliPage } from './redeem-confirm-blibli.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RedeemConfirmBlibliPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [RedeemConfirmBlibliPage]
})
export class RedeemConfirmBlibliPageModule {}
