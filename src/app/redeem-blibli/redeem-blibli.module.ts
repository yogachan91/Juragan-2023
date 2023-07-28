import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RedeemBlibliPageRoutingModule } from './redeem-blibli-routing.module';

import { RedeemBlibliPage } from './redeem-blibli.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RedeemBlibliPageRoutingModule
  ],
  declarations: [RedeemBlibliPage]
})
export class RedeemBlibliPageModule {}
