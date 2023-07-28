import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RedeemListPageRoutingModule } from './redeem-list-routing.module';

import { RedeemListPage } from './redeem-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RedeemListPageRoutingModule
  ],
  declarations: [RedeemListPage]
})
export class RedeemListPageModule {}
