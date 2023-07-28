import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PpobPlnTokenPageRoutingModule } from './ppob-pln-token-routing.module';

import { PpobPlnTokenPage } from './ppob-pln-token.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PpobPlnTokenPageRoutingModule
  ],
  declarations: [PpobPlnTokenPage]
})
export class PpobPlnTokenPageModule {}
