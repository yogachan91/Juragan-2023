import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PpobPlnTokenHistoryDetailsPageRoutingModule } from './ppob-pln-token-history-details-routing.module';

import { PpobPlnTokenHistoryDetailsPage } from './ppob-pln-token-history-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PpobPlnTokenHistoryDetailsPageRoutingModule
  ],
  declarations: [PpobPlnTokenHistoryDetailsPage]
})
export class PpobPlnTokenHistoryDetailsPageModule {}
