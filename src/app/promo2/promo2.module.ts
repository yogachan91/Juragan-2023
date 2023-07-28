import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Promo2PageRoutingModule } from './promo2-routing.module';

import { Promo2Page } from './promo2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Promo2PageRoutingModule
  ],
  declarations: [Promo2Page]
})
export class Promo2PageModule {}
