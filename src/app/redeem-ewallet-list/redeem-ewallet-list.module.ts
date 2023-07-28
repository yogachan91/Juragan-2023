import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RedeemEwalletListPageRoutingModule } from './redeem-ewallet-list-routing.module';

import { RedeemEwalletListPage } from './redeem-ewallet-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RedeemEwalletListPageRoutingModule
  ],
  declarations: [RedeemEwalletListPage]
})
export class RedeemEwalletListPageModule {}
