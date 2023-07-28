import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PpobPlnTokenHistoryPageRoutingModule } from './ppob-pln-token-history-routing.module';

import { PpobPlnTokenHistoryPage } from './ppob-pln-token-history.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PpobPlnTokenHistoryPageRoutingModule
  ],
  declarations: [PpobPlnTokenHistoryPage]
})
export class PpobPlnTokenHistoryPageModule {}
