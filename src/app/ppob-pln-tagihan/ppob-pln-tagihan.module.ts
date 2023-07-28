import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PpobPlnTagihanPageRoutingModule } from './ppob-pln-tagihan-routing.module';

import { PpobPlnTagihanPage } from './ppob-pln-tagihan.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PpobPlnTagihanPageRoutingModule
  ],
  declarations: [PpobPlnTagihanPage]
})
export class PpobPlnTagihanPageModule {}
