import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RedeemDetailTravelPageRoutingModule } from './redeem-detail-travel-routing.module';

import { RedeemDetailTravelPage } from './redeem-detail-travel.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RedeemDetailTravelPageRoutingModule
  ],
  declarations: [RedeemDetailTravelPage]
})
export class RedeemDetailTravelPageModule {}
