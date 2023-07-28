import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EwalletDetailsPageRoutingModule } from './ewallet-details-routing.module';

import { EwalletDetailsPage } from './ewallet-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EwalletDetailsPageRoutingModule
  ],
  declarations: [EwalletDetailsPage]
})
export class EwalletDetailsPageModule {}
