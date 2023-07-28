import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RedeemListTravelPageRoutingModule } from './redeem-list-travel-routing.module';

import { RedeemListTravelPage } from './redeem-list-travel.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RedeemListTravelPageRoutingModule
  ],
  declarations: [RedeemListTravelPage]
})
export class RedeemListTravelPageModule {}
